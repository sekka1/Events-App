var win = Titanium.UI.currentWindow;

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
   win.windowHome.open();
   win.close();
});


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
            latitude:results[0].location_geo_lat,
            longitude:results[0].location_geo_long,
            title:results[0].name,
            subtitle:results[0].location,
            pincolor:Titanium.Map.ANNOTATION_RED,
            animate:true,
            leftButton: '../images/appcelerator_small.png',
            myid:1 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
        });

        if( Titanium.Platform.name == 'iPhone OS' ){
            win.mapview.setRegion({latitude:results[0].location_geo_lat,longitude:results[0].location_geo_long,animate:true,latitudeDelta:0.01, longitudeDelta:0.01});
        }
        if( Titanium.Platform.name == 'android' ){
            win.mapview.setLocation({latitude:results[0].location_geo_lat,longitude:results[0].location_geo_long,animate:true,latitudeDelta:0.01, longitudeDelta:0.01});
        }
        
        win.mapview.addAnnotation( eventLocation );
        
        win.add(win.mapview);
        win.add(btnBack);
    };
    
    // Send the HTTP request
	loader.send();