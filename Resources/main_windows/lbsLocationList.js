var win = Titanium.UI.currentWindow;  

var nav_bar = Titanium.UI.createImageView({
        image:'../images/templates/multi-color/nav-bar-blank.png',
        top:0,
        left:0,
        height:40,
        //width:480,
	    borderWidth: 0,
	    borderRadius: 0
});
win.add(nav_bar);

var titleName = Titanium.UI.createLabel({  
        text:'Store List',  
        top:10,  
        left:125,  
        borderRadius:0,  
        height:'auto'
}); 
win.add(titleName);


var btnBack = Titanium.UI.createButton({  
    backgroundImage:'../images/templates/multi-color/back.png',
    backgroundSelectedImage: '../images/templates/multi-color/back_over.png',
    top:2,  
    left:2,
    width:65,  
    height:40,
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  

btnBack.addEventListener('click', function()
{
   win.previousWin.open();
   win.close();
});


// Create Sub window
var windowLocationDetail = Titanium.UI.createWindow({
    title:'LBS Location Details',
    url:'lbsLocationDetails.js'
});

//
// GET CURRENT POSITION - THIS FIRES ONCE
//
if (Titanium.Platform.name == 'iPhone OS'){
    Ti.Geolocation.purpose = "Using location list to produce shops the user might be interested in at this location";
    Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
    Titanium.Geolocation.distanceFilter = 0.1;
}

var longitude;
var latitude;
var currentLocation = "";
Titanium.Geolocation.getCurrentPosition(function(e)
{
	if (!e.success || e.error)
	{
		currentLocation.text = 'error: ' + JSON.stringify(e.error);
		return;
	}

	longitude = e.coords.longitude;
	latitude = e.coords.latitude;
	altitude = e.coords.altitude;
	runIT();
});

//
// SimpleGeo Example working with Appcelerator
//
// borrowed from the Tweetanium project can be downloaded from here
// <a href="https://github.com/appcelerator/tweetanium/tree/master/mobile/Tweetanium/Resources/lib/oauth">https://github.com/appcelerator/tweetanium/tree/master/mobile/Tweetanium/Resources/lib/oauth</a>
Ti.include(
    '../lib/oauth/sha1.js',
    '../lib/oauth/oauth.js'
);

function runIT() {
    var consumer_key='KJ7rx8BLKEdKLqP5mfKZqnegNE4uruRD';
    var secret_key='ecWfQfKMc6gYSDam7mWJdTMQfmWEpw9q';

    Ti.API.info( "Latitude: " + latitude + " Longitude: " + longitude );
 
    //
    // most of this code is borrowed and simplified from the documentation
    // in the oauth.js file and the tweetanium source
    //
    var fetchUrl = 'http://api.simplegeo.com/1.0/places/' + latitude + "," + longitude + ".json";
    var accessor = { consumerSecret: secret_key };
    var parameters;
    
    Ti.API.info( "category: " + win.type + " searchTerm: " + win.searchTerm );
    
    // Set the parameters based on which category selection the user picked in the previous screen
    if( win.type == 'category' ){
        parameters = { "category" : win.searchTerm };
    }
    if( win.type == 'q' ){
        parameters = { "q" : win.searchTerm };
    }

    Ti.API.info( "parameters: " + parameters );
    
    var message = {
        method: 'GET',
        action: fetchUrl,
        parameters: [
            ['oauth_signature_method', 'HMAC-SHA1'],
            ['oauth_consumer_key', consumer_key],
            ['oauth_secret_key', secret_key],
            ['oauth_version', '1.0']
        ]
    };
 
    //load up additional parameters for the request
    var moreParams = parameters||{};
    for (var key in moreParams) {
        if (moreParams.hasOwnProperty(key)) {
            message.parameters.push([key,moreParams[key]]);
    }
}

    //
    // Set OAuth Parameters and make the http request
    // 
    OAuth.setTimestampAndNonce(message);
    OAuth.setParameter(message, "oauth_timestamp", OAuth.timestamp());
    OAuth.SignatureMethod.sign(message, accessor);
    var finalUrl = OAuth.addToURL(message.action, message.parameters);
     
    var xhr = Titanium.Network.createHTTPClient();
    xhr.onerror = function(e){
        Ti.API.debug(e);
    };   


    //
    //  Setting up the Tableview for the data
    //
    var search = Titanium.UI.createSearchBar({
        showCancel:false
    });
    // create table view
    var tableview = Titanium.UI.createTableView({
        top:40,
        //data:data,
        search:search,
        filterAttribute:'title'
    });

    // create table view event listener
    tableview.addEventListener('click', function(e)
    {
        // event data
        var index = e.index;
        var section = e.section;
        var row = e.row;
        var rowdata = e.rowData;
        
        //e.section.headerTitle = e.section.headerTitle + ' section has been clicked';
        //Titanium.UI.createAlertDialog({title:'Table View',message:'row ' + row + ' index ' + index + ' section ' + section  + ' row data ' + rowdata + ' type ' + row.type + ' searchTerm ' + row.searchTerm }).show();
        
        Ti.API.info( "row.simpleGeoID: " + row.simpleGeoID );
       	
	windowLocationDetail.mapview = win.mapview; 
        windowLocationDetail.simpleGeoID = row.simpleGeoID;
        
        windowLocationDetail.previousWin = win;
        
        windowLocationDetail.open();
        
        //win.close();
        
        
    });

    win.add(tableview);
    win.add(btnBack);

 
    // onload after the HTTP Call
    xhr.onload = function(e){
        //Ti.API.debug(JSON.parse(xhr.responseText));
    
        results = eval('('+xhr.responseText+')');
    
        Ti.API.info( "results.features.length: " + results.features.length );
        //Ti.API.info( "test: " + results.features[0].properties.name );
        //Ti.API.info( "test: " + results.properties.name );
    
        // create table view data object
        // This table holds information about the stores that the search came back with
        var data = [];
    
        for( var i=0; i < results.features.length; i++ ){
    
            var tmp = {title:results.features[i].properties.name, simpleGeoID:results.features[i].id, hasChild:true};
    
            data.push( tmp );
    
        }

        tableview.data = data;

    };

    xhr.open('GET', finalUrl);
    xhr.send();
}







