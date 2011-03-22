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
        text:'Map',  
        top:10,  
        left:125,  
        borderRadius:0,  
        height:'auto',
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
            //leftButton: '../images/png/Bouquet.png',
            //rightView:btnAnnotationRight,
            myid:1 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
        });
        
        // Pass to event listener
        eventLocation.location = results[0].location;
        
        eventLocation.addEventListener('click',function(e)  
        {   
            Ti.API.info( "Map button clicked" );
            Ti.Platform.openURL('http://maps.google.com/maps?daddr={'+e.source.location+'}&ie=UTF8&t=h&z=16');
    
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