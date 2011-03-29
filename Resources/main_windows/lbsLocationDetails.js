var win = Titanium.UI.currentWindow;  

var nav_bar = Titanium.UI.createImageView({
        image:'../images/navigation/nav-bar-blank.png',
        top:0,
        left:0,
        height:40,
        //width:330,
	    borderWidth: 0,
	    borderRadius: 0
});
win.add(nav_bar);

var titleName = Titanium.UI.createLabel({  
        text:'Location Details',  
        top:10,  
        left:125,  
        borderRadius:0,  
        height:'auto'
}); 
win.add(titleName);

var btnBack = Titanium.UI.createButton({  
    title:'Back',  
    top:10,  
    left:20,
    width:75,  
    height:20,
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  

btnBack.addEventListener('click', function()
{
   win.previousWin.open();
   win.close();
});

// SimpleGeo Keys
var consumer_key='KJ7rx8BLKEdKLqP5mfKZqnegNE4uruRD';
var secret_key='ecWfQfKMc6gYSDam7mWJdTMQfmWEpw9q';

//
// SimpleGeo Example working with Appcelerator
//
// borrowed from the Tweetanium project can be downloaded from here
// <a href="https://github.com/appcelerator/tweetanium/tree/master/mobile/Tweetanium/Resources/lib/oauth">https://github.com/appcelerator/tweetanium/tree/master/mobile/Tweetanium/Resources/lib/oauth</a>
Ti.include(
    '../lib/oauth/sha1.js',
    '../lib/oauth/oauth.js'
);
 
//
// most of this code is borrowed and simplified from the documentation
// in the oauth.js file and the tweetanium source
//
var fetchUrl = 'http://api.simplegeo.com/1.0/features/'+win.simpleGeoID+'.json';
//var fetchUrl = 'http://api.simplegeo.com/1.0/features/SG_5JkVsYK82eLj26eomFrI7S_37.795027_-122.421583@1291796505.json';
var accessor = { consumerSecret: secret_key };
var parameters = {};//{ "address" : "302 easy st, mountain view, ca"};
var message = {
    method: 'GET',
    //action: 'http://api.simplegeo.com/1.0/context/address.json?q=tuxedo',
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
 
OAuth.setTimestampAndNonce(message);
OAuth.setParameter(message, "oauth_timestamp", OAuth.timestamp());
OAuth.SignatureMethod.sign(message, accessor);
var finalUrl = OAuth.addToURL(message.action, message.parameters);
 
var xhr = Titanium.Network.createHTTPClient();
xhr.onerror = function(e){
    Ti.API.debug(e);
};   
 
// dump the JSON output
xhr.onload = function(e){
    //Ti.API.debug(JSON.parse(xhr.responseText));
    
    // Will return in this format: http://simplegeo.com/docs/api-endpoints/simplegeo-features#get-detailed-information
    
    Ti.API.info( xhr.responseText );
    
    results = eval('('+xhr.responseText+')');
    
    Ti.API.info(JSON.parse(xhr.responseText));
    Ti.API.info( "Business Name: " + results.properties.name );
    Ti.API.info( "Business Phone: " + results.properties.phone );
    
    var scrollView1 = Titanium.UI.createScrollView({
        contentWidth:'auto',
        contentHeight:'auto',
        top:40,
        left:0,
        //width:300,
        //height:600,
        borderRadius:0,
        backgroundColor:'red',
        showVerticalScrollIndicator:true,
        showHorizontalScrollIndicator:false
    });
    
    var locName = Titanium.UI.createLabel({  
        text:'Name: ' + results.properties.name,  
        top:10,  
        left:0,  
        //width:300,
        borderRadius:0,  
        height:'auto'
        //backgroundColor:'#336699'  
    });  
    scrollView1.add(locName);  
        
    var locPhone = Titanium.UI.createLabel({  
        text:'Phone: ' + results.properties.phone,  
        top:30,  
        left:0,  
        //width:300,  
        height:'auto',
        backgroundColor:'#336699'  
    });  
    scrollView1.add(locPhone); 
    
    var locAddress = Titanium.UI.createLabel({  
        text:'Address: ' + results.properties.address + ', ' + results.properties.city + ', ' + results.properties.province + ', ' + results.properties.postcode,  
        top:50,  
        left:0,  
        //width:300,  
        height:'auto',
        backgroundColor:'#336699'  
    });  
    scrollView1.add(locAddress); 
    var eventLocation = Titanium.Map.createAnnotation({
            latitude:results.geometry.coordinates[1],
            longitude:results.geometry.coordinates[0],
            title:results.properties.name,
            subtitle:results.properties.address,
            pincolor:Titanium.Map.ANNOTATION_RED,
            animate:true,
            //leftButton: '../images/png/Bouquet.png',
            //rightView:btnAnnotationRight,
            myid:1 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS        	
    });

        // Pass to event listener
        eventLocation.location = results.properties.address + " " + results.properties.city + " " + results.properties.country;
        eventLocation.addEventListener('click',function(e)
        {
            Ti.API.info( "Map button clicked" );
            Ti.Platform.openURL('http://maps.google.com/maps?daddr='+e.source.location+'&ie=UTF8&t=h&z=16');

        });
 
   	win.mapview.top="100"; 
	if( Titanium.Platform.name == 'iPhone OS' ){
            win.mapview.setRegion({latitude:results.geometry.coordinates[1],
			longitude:results.geometry.coordinates[0],animate:true,latitudeDelta:0.01, longitudeDelta:0.01});
        }
        if( Titanium.Platform.name == 'android' ){
            win.mapview.setLocation({latitude:results.geometry.coordinates[1],
			longitude:results.geometry.coordinates[0],animate:true,latitudeDelta:0.01, longitudeDelta:0.01});
        }

        win.mapview.addAnnotation( eventLocation );

        scrollView1.add(win.mapview);
	
    win.add( scrollView1 );
    
    win.add( btnBack );
    
    
};
xhr.open('GET', finalUrl);
xhr.send();





