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
win.add(btnBack);

btnBack.addEventListener('click', function()
{
   win.windowHome.open();
   win.close();
});


// Create our HTTP Client
var loader = Titanium.Network.createHTTPClient();

Ti.API.info( "Making ajax call for data to: " + win.site_url + "data/index/class/GetEventInfo/method/getInfo/id/" + win.idKey );

// Sets the HTTP request method, and the URL to get data from
loader.open( "GET", win.site_url + "data/index/class/GetEventInfo/method/getInfo/id/" + win.idKey );

loader.onload = function() 
{
    Ti.API.info( "Event Info: " + this.responseText );

    results = eval('('+this.responseText+')');
    
    var scrollView1 = Titanium.UI.createScrollView({
        contentWidth:'auto',
        contentHeight:'auto',
        top:40,
        left:10,
        //width:300,
        //height:600,
        borderRadius:10,
        backgroundColor:'#ff99000',
        showVerticalScrollIndicator:true,
        showHorizontalScrollIndicator:false
    });
    
    var eventName = Titanium.UI.createLabel({  
        text:results[0].name,  
        top:10,  
        left:10,  
        width:300,  
        height:'auto',
        backgroundColor:'#336699'  
    });  
    scrollView1.add(eventName);  
        
    var eventDescription = Titanium.UI.createLabel({  
        text:results[0].description,  
        top:30,  
        left:10,  
        width:300,  
        height:'auto',
        backgroundColor:'#336699'  
    });  
    scrollView1.add(eventDescription); 
    
    win.add( scrollView1 );
};

// Send the HTTP request
loader.send();