var win = Titanium.UI.currentWindow;
win.setBackgroundImage('../images/background.jpg');

var titlebar_logo = Titanium.UI.createImageView({
        image:'../images/wedvite_logo.png',
        top:160,
        left:72,
        width: 176,
        height:60,
	    borderWidth: 0,
	    borderRadius: 0
});
win.add(titlebar_logo);

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
   win.backWindow.open();
   win.close();
});

var pageName = Titanium.UI.createLabel({  
        text:'Create a Wedding', 
        top:10,  
        left:125,  
        //width:300,
        borderRadius:4,  
        height:'auto',
        color:'white'
        //backgroundColor:'#336699'  
    });  
win.add(pageName);

var eventName = Titanium.UI.createTextField({  
    color:'#336699',  
    top:60,  
    left:10,  
    width:300,  
    height:40,  
    hintText:'Wedding Name',
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
});  
win.add(eventName);  
  
var btnCreate = Titanium.UI.createButton({  
    title:'Create',  
    top:110, 
    width:90,  
    height:35,  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnCreate);

var alertDialog = Titanium.UI.createAlertDialog({
	title: 'Wedding Created',
	message: 'Click on the Edit button next to your Wedding name to fill in the details for this wedding.',
	buttonNames: ['OK']
});

btnCreate.addEventListener('click',function(e)  
{  

	// Check the event name for eroneous characters
	var theEventName = eventName.value.replace( / /g, "%20" );
	theEventName = theEventName.replace( /\//g, "%2F" );
	theEventName = theEventName.replace( /\+/g, "%2B" );
	theEventName = theEventName.replace( /&/g, "%26" );

	// Create our HTTP Client
	var loader = Titanium.Network.createHTTPClient();

	// Sets the HTTP request method, and the URL to get data from
    loader.open( "GET", win.site_url + "data/index/class/Events/method/create/user_id/" + Titanium.Facebook.uid + "/name/" + theEventName );
    Ti.API.info( win.site_url + "data/index/class/Events/method/create/user_id/" + Titanium.Facebook.uid + "/name/" + theEventName );
        
    loader.onload = function() 
    {
		//alert( 'Event Created' );
		alertDialog.show();
		win.backWindow.open();
   		win.close();
	};
	loader.onerror = function(e)
	{
	
		alert('error: ' + e.error );
	}
	
	// Send the HTTP request
    loader.send();
    
});  




