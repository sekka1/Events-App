var win = Titanium.UI.currentWindow;  
win.setBackgroundImage('../images/background.jpg');

Ti.API.info( "Home window loading..." );

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

var titlebar_logo = Titanium.UI.createImageView({
        image:'../images/wedvite-logo-navbar.png',
        top:3,
        left:100,
        width: 137,
        height:39,
	    borderWidth: 0,
	    borderRadius: 0
});
win.add(titlebar_logo);

win.addEventListener('focus',function(e)  
{  
    Ti.API.info( "home.js win.addEventListener - focus" );
    
    Ti.API.info( "idKey: " + win.idKey );
});

// Back button to the login screen
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
   win.windowLogin.open();
   win.close();
});


Ti.include('properties.js');

// Gets how many Arbitrary data pages the user has created and
// makes an icon for it.
//Ti.include( 'getArbitraryButtons.js' );


// Put in the Common buttons on the home page
Ti.include( 'homeButtons.js' );
Ti.include( 'homeButtonsEventListeners.js' );

// Puts in the bottom slider with photos
Ti.include( 'photoSlider.js' );

//Ti.include('countDown.js');

win.add(btnBack);
