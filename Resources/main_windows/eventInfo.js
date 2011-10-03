var win = Titanium.UI.currentWindow;  
win.setBackgroundImage('../images/background.jpg');

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

//var btnBack = Titanium.UI.createButton({  
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

var scrollView1 = Titanium.UI.createScrollView({
	contentWidth:'auto',
	contentHeight:'auto',
	top:40,
	left:5,
	width:300,
	borderRadius:4,
	layout:'vertical',
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:false
});

btnBack.addEventListener('click', function()
{
   Ti.API.info( "Event info back button pressed..." );
   
   win.remove( scrollView1 );
   
   win.windowHome.show();
   win.close();
});

var pageName = Titanium.UI.createLabel({  
        text:'Wedding Info', 
        top:10,  
        left:125,  
        //width:300,
        borderRadius:4,  
        height:'auto',
        color:'white'
        //backgroundColor:'#336699'  
    });  
win.add(pageName);

// Create our HTTP Client
//var loader = Titanium.Network.createHTTPClient();

Ti.API.info( "Making ajax call for data to: " + win.site_url + "data/index/class/GetEventInfo/method/getInfo/id/" + win.idKey );

// Sets the HTTP request method, and the URL to get data from
win.loader.open( "GET", win.site_url + "data/index/class/GetEventInfo/method/getInfo/id/" + win.idKey );

win.loader.onload = function() 
{
	
    
    Ti.API.info( "Event Info: " + this.responseText );

    results = eval('('+this.responseText+')');

    var eventName = Titanium.UI.createLabel({  
        text:results[0].name, 
        top:10,  
        font:{fontFamily:'Baroque Script',fontSize:25},
        textAlign: 'center',
        borderWidth:0,
        borderRadius:4,
        height:'auto'
    });  
    scrollView1.add(eventName);

    var eventHost = Titanium.UI.createLabel({  
        text:'Host: ' + results[0].host, 
        top:40,  
        font:{fontFamily:'Baroque Script',fontSize:17},
    	textAlign: 'center',
        borderWidth:0,
        borderRadius:4,  
        height:'auto'
    });  
    scrollView1.add(eventHost);

    var eventPhone = Titanium.UI.createLabel({  
        text:'Phone: ' + results[0].phone, 
        top:30,  
        font:{fontFamily:'Baroque Script',fontSize:17},  
        textAlign: 'center',
        borderWidth:0,
        borderRadius:4,  
        height:'auto'
    });  
    scrollView1.add(eventPhone);
    
    var eventLocation = Titanium.UI.createLabel({  
        text:results[0].address + ', ' + results[0].city + ', ' + results[0].state + ', ' + results[0].zip,  
    	font:{fontFamily:'Baroque Script',fontSize:17},  
        top:5,
        textAlign: 'center',
        borderWidth:0,
        borderRadius:4,
        height:'auto'
    });  
    scrollView1.add(eventLocation); 
    
    var eventWhen = Titanium.UI.createLabel({  
        text:results[0].when,
    	font:{fontFamily:'Baroque Script',fontSize:17},  
        top:20,
        textAlign: 'center',
    	borderWidth:0,
        borderRadius:4,
        height:'auto'
    });  
    scrollView1.add(eventWhen); 
    
    var eventDescription = Titanium.UI.createLabel({  
        text:results[0].description,  
    	font:{fontFamily:'Baroque Script',fontSize:17},  
        top:40,
        textAlign: 'center',
        borderWidth:0,
        borderRadius:4,
        height:'auto'
    });  
    scrollView1.add(eventDescription); 
 
    var eventMessage = Titanium.UI.createLabel({  
        text:results[0].message,
    	font:{fontFamily:'Baroque Script',fontSize:35},  
        top:10,
        left:10,
        height:'auto',
        backgroundColor:'#336699'  
    });  
    //scrollView1.add(eventMessage); 
    
    win.add( scrollView1 );
    
    win.actInd.hide();
};

// Send the HTTP request
win.loader.send();

// Activity Indicator
win.add(win.actInd);
win.actInd.show();