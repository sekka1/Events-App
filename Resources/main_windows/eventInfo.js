var win = Titanium.UI.currentWindow;  

var nav_bar = Titanium.UI.createImageView({
        image:'../images/navigation/nav-bar-blank.png',
        top:0,
        left:0,
        height:40,
        width:480,
	    borderWidth: 0,
	    borderRadius: 0
});
win.add(nav_bar);

//var btnBack = Titanium.UI.createButton({  
var btnBack = Titanium.UI.createButton({  
    title:'',  
    backgroundImage:'../images/navigation/back.png',
    top:5,  
    left:2,
    width:35,  
    height:35,
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnBack);

btnBack.addEventListener('click', function()
{
   Ti.API.info( "Event info back button pressed..." );
   win.windowHome.open();
   win.close();
});

var actInd = Titanium.UI.createActivityIndicator({
    height:50,
    width:10
});

// Create our HTTP Client
//var loader = Titanium.Network.createHTTPClient();

Ti.API.info( "Making ajax call for data to: " + win.site_url + "data/index/class/GetEventInfo/method/getInfo/id/" + win.idKey );

// Sets the HTTP request method, and the URL to get data from
win.loader.open( "GET", win.site_url + "data/index/class/GetEventInfo/method/getInfo/id/" + win.idKey );

win.loader.onload = function() 
{
    Ti.API.info( "Event Info: " + this.responseText );

    results = eval('('+this.responseText+')');
    var scrollView1 = Titanium.UI.createScrollView({
        contentWidth:'auto',
        contentHeight:'auto',
        top:40,
        left:0,
        //width:300,
        //height:600,
        borderRadius:0,
        backgroundColor:'#336699',
        showVerticalScrollIndicator:true,
        showHorizontalScrollIndicator:false
    });

    var eventName = Titanium.UI.createLabel({  
        text:results[0].name, 
        top:10,  
        left:125,  
        //width:300,
        borderRadius:0,  
        height:'auto'
        //backgroundColor:'#336699'  
    });  
    //scrollView1.add(eventName);  
    win.add(eventName);
        
    var eventDescription = Titanium.UI.createLabel({  
        text:results[0].description,  
    	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:10},  
        top:10,  
        left:10,  
        height:'auto',
        backgroundColor:'#336699'  
    });  
    scrollView1.add(eventDescription); 
   
    var eventLocation = Titanium.UI.createLabel({  
        text:results[0].location,  
    	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:10},  
        top:20,  
        left:10,  
        height:'auto',
        backgroundColor:'#336699'  
    });  
    scrollView1.add(eventLocation); 
    
    var eventWhen = Titanium.UI.createLabel({  
        text:results[0].when,  
    	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:10},  
        top:30,  
        left:10,  
        height:'auto',
        backgroundColor:'#336699'  
    });  
    scrollView1.add(eventWhen); 
 
    var eventMessage = Titanium.UI.createLabel({  
        text:results[0].message,  
    	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:10},  
        top:40,  
        left:10,  
        height:'auto',
        backgroundColor:'#336699'  
    });  
    scrollView1.add(eventMessage); 
    
    win.add( scrollView1 );
};

// Send the HTTP request
win.loader.send();
