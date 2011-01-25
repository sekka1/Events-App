var win = Titanium.UI.currentWindow;  

var actInd = Titanium.UI.createActivityIndicator({
    height:50,
    width:10,
    message:'Retrieving Data'
});

function loadEventLocation()
{
    // Show Activity indicator
    actInd.show();
    
	// Create our HTTP Client and name it "loader"
	var loader = Titanium.Network.createHTTPClient();
    
    Ti.API.info( "Making ajax call for data to: " + win.site_url + "data/index/class/GetEventInfo/method/getInfo/id/" + win.idKey );

	// Sets the HTTP request method, and the URL to get data from
	loader.open( "GET", win.site_url + "data/index/class/GetEventInfo/method/getInfo/id/" + win.idKey );
    
    loader.onload = function() 
	{
        Ti.API.info( "Data: " + this.responseText );
    
        var results = eval('('+this.responseText+')');
        
        var eventLocation = Titanium.Map.createAnnotation({
            latitude:results[0]['location_geo_lat'],
            longitude:results[0]['location_geo_long'],
            title:results[0]['name'],
            subtitle:results[0]['location'],
            pincolor:Titanium.Map.ANNOTATION_RED,
            animate:true,
            leftButton: '../images/appcelerator_small.png',
            myid:1 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
        });

        var mapview = Titanium.Map.createView({
            mapType: Titanium.Map.STANDARD_TYPE,
            //region: {latitude:33.74511, longitude:-84.38993, 
            //latitudeDelta:0.01, longitudeDelta:0.01},
            location: {latitude:results[0]['location_geo_lat'], longitude:results[0]['location_geo_long'], latitudeDelta:0.01, longitudeDelta:0.01},
            animate:true,
            regionFit:true,
            userLocation:false,
            annotations:[eventLocation]
        });

        win.add(mapview);        
        
        // Hide Activity indicator
        actInd.hide();
    
    };
    
    // Send the HTTP request
	loader.send();

}

// Run Function
loadEventLocation()  


