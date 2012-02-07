var win = Titanium.UI.currentWindow;

var nav_bar = Titanium.UI.createImageView({
        image:'../images/templates/'+win.templateUsed+'/nav-bar-blank.png',
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
    backgroundImage:'../images/templates/'+win.templateUsed+'/back.png',
    backgroundSelectedImage: '../images/templates/'+win.templateUsed+'/back_over.png',
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
	// Remove all annotations on the map
	win.mapview.removeAllAnnotations();

   win.windowHome.show();
   win.close();
});

    // Create our HTTP Client and name it "loader"
	//var loader = Titanium.Network.createHTTPClient();
    
    Ti.API.info( "Making ajax call for data to: " + win.site_url + "data/index/class/GetEventInfo/method/getInfo/id/" + win.idKey );

	// Create our HTTP Client
	var loader = Titanium.Network.createHTTPClient();

	// Sets the HTTP request method, and the URL to get data from
	loader.open( "GET", win.site_url + "data/index/class/GetEventInfo/method/getInfo/id/" + win.idKey );
    
    loader.onload = function() 
	{
        Ti.API.info( "Data: " + this.responseText );
        
        var results = eval('('+this.responseText+')');
        
        var points = [];
        
        ///////////////////////////////////////////////
        // Ceromony Details
        ///////////////////////////////////////////////
        points[0] = Titanium.Map.createAnnotation({
            latitude:results[0].location_geo_lat,
            longitude:results[0].location_geo_long,
            title:results[0].location_name,
            subtitle:results[0].location,
            pincolor:Titanium.Map.ANNOTATION_RED,
            animate:true,
            //rightButton: '../images/templates/'+win.templateUsed+'/back.png',
            //rightView:btnAnnotationRight,
            myid:1 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
        });
        
        // Pass to event listener
        points[0].location = results[0].location;
        
        points[0].addEventListener('click',function(e)  
        {   
        	Ti.API.info( "e.clickSource: " + e.clickSource );
        
        	//if( e.clickSource == 'rightButton' ){
            	Ti.API.info( "Map button clicked" );
            	//Ti.Platform.openURL('http://maps.google.com/maps?daddr={'+e.source.location+'}&ie=UTF8&t=h&z=16');
            	//Ti.Platform.openURL('http://maps.google.com/maps?daddr='+e.source.location+'&ie=UTF8&t=h&z=16');
            	
    		//}
        });
        
        ///////////////////////////////////////////////
        // Reception Details
        ///////////////////////////////////////////////
        
        points[1] = Titanium.Map.createAnnotation({
            latitude:results[0].location_geo_lat2,
            longitude:results[0].location_geo_long2,
            title:results[0].location_name2,
            subtitle:results[0].location2,
            pincolor:Titanium.Map.ANNOTATION_RED,
            animate:true,
            //leftButton: '../images/templates/'+win.templateUsed+'/back.png',
            //rightView:btnAnnotationRight,
            myid:2 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
        });
        
        // Pass to event listener
        points[1].location = results[0].location2;
        
        points[1].addEventListener('click',function(e)  
        {   
        	Ti.API.info( "e.clickSource: " + e.clickSource );
        
        	//if( e.clickSource == 'rightButton' ){
            	Ti.API.info( "Map button clicked" );
            	//Ti.Platform.openURL('http://maps.google.com/maps?daddr={'+e.source.location+'}&ie=UTF8&t=h&z=16');
            	Ti.Platform.openURL('http://maps.google.com/maps?daddr='+e.source.location+'&ie=UTF8&t=h&z=16');
    		//}
        });
        ///////////////////////////////////////////////
        // Map Details
        ///////////////////////////////////////////////

		win.mapview.top="40";
        if( Titanium.Platform.name == 'iPhone OS' ){
            win.mapview.setRegion({latitude:results[0].location_geo_lat,longitude:results[0].location_geo_long,animate:true,latitudeDelta:0.01, longitudeDelta:0.01});
        }
        if( Titanium.Platform.name == 'android' ){
            win.mapview.setLocation({latitude:results[0].location_geo_lat,longitude:results[0].location_geo_long,animate:true,latitudeDelta:0.01, longitudeDelta:0.01});
        }
        
        //win.mapview.addAnnotation( eventLocation );
        win.mapview.addAnnotations( points );
        
        win.add(win.mapview);
        win.add(btnBack);
        
 		// Passing lat and long to the navigation buttions
		btnNavToCeromony.location_geo_lat = results[0].location_geo_lat;
		btnNavToCeromony.location_geo_long = results[0].location_geo_long;
		btnNavToReception.location_geo_lat = results[0].location_geo_lat2;
		btnNavToReception.location_geo_long = results[0].location_geo_long2;
		
		win.add(btnNavToCeromony);
		win.add(btnNavToReception);
		

    };
    
    // Send the HTTP request
	loader.send();



///////////////////////////////////////////////
// Navigate Buttons
///////////////////////////////////////////////
var btnNavToCeromony = Titanium.UI.createButton({  
	title:'To Ceromony',
	bottom:2,  
	left:2,
	width:100,  
	height:40,
	borderRadius:1,  
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
}); 

btnNavToCeromony.addEventListener('click', function(e)
{
	Ti.API.info( "Nav Ceromony button clicked:" + e.source.location_geo_lat );
	Ti.Platform.openURL('http://tne.telenav.com/ad/driveto?dt=@'+e.source.location_geo_lat+','+e.source.location_geo_long+'&apiKey=AQAAATUV88oof/////////8AAAABAAAAAQEAAAAQ4EH0GEJncXoYD9I5EwzR0wEAAAAOAwAAAJgAAADQAAAAAQA=&name=Marriott%20Hotel');
});

var btnNavToReception = Titanium.UI.createButton({  
	title:'To Reception',
	bottom:2,  
	right:2,
	width:100,  
	height:40,
	borderRadius:1,  
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
}); 

btnNavToReception.addEventListener('click', function(e)
{
	Ti.API.info( "Nav Reception button clicked:" + e.source.location_geo_lat );
	Ti.Platform.openURL('http://tne.telenav.com/ad/driveto?dt=@'+e.source.location_geo_lat+','+e.source.location_geo_long+'&apiKey=AQAAATUV88oof/////////8AAAABAAAAAQEAAAAQ4EH0GEJncXoYD9I5EwzR0wEAAAAOAwAAAJgAAADQAAAAAQA=&name=Marriott%20Hotel');
});