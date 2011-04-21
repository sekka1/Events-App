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

var btnBack = Titanium.UI.createButton({  
    title:'',  
    backgroundImage:'../images/templates/multi-color/back.png',
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
   win.backWindow.open();
   win.close();
});

var eventName = Titanium.UI.createTextField({  
    color:'#336699',  
    top:60,  
    left:10,  
    width:300,  
    height:40,  
    hintText:'New Event Name',
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
});  
win.add(eventName);  
  
var btnCreate = Titanium.UI.createButton({  
    title:'Create',  
    bottom:10,  
    width:90,  
    height:35,  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnCreate);  

btnCreate.addEventListener('click',function(e)  
{  

	// Sets the HTTP request method, and the URL to get data from
    win.loader.open( "GET", win.site_url + "data/index/class/Events/method/create/user_id/" + Titanium.Facebook.uid + "/name/" + eventName.value );
    Ti.API.info( win.site_url + "data/index/class/Events/method/create/user_id/" + Titanium.Facebook.uid + "/name/" + eventName.value );
        
    win.loader.onload = function() 
    {
		alert( 'Event Created' );
		win.backWindow.open();
   		win.close();
	};
	
	// Send the HTTP request
    win.loader.send();
    
});  




