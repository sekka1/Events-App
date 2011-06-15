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
        text:'Map',  
        top:10,  
        left:125,  
        borderRadius:0,  
        height:'auto',
        color:'white'
}); 
win.add(titleName);

var btnBack = Titanium.UI.createButton({  
    title:'',  
    backgroundImage:'../images/templates/multi-color/back.png',
    backgroundSelectedImage: '../images/templates/multi-color/back_over.png',
    top:2,  
    left:2,
    width:65,  
    height:40,
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnBack);


btnBack.addEventListener('click', function()
{
   win.windowHome.open();
   win.close();
});

    // Create our HTTP Client and name it "loader"
	//var loader = Titanium.Network.createHTTPClient();
    
    Ti.API.info( "Making ajax call for data to: " + win.site_url + "data/index/class/GetEventInfo/method/getInfo/id/" + win.idKey );

	// Sets the HTTP request method, and the URL to get data from
	win.loader.open( "GET", win.site_url + "data/index/class/GetEventInfo/method/getInfo/id/" + win.idKey );
    
    win.loader.onload = function() 
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

		win.mapview.top="40";
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
	win.loader.send();
