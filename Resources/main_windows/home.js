var win = Titanium.UI.currentWindow;  
win.setBackgroundImage('../images/background.jpg');

win.addEventListener('focus',function(e)  
{  
    Ti.API.info( "home.js win.addEventListener - focus" );
    
    Ti.API.info( "idKey: " + win.idKey );
});

// Back button to the login screen
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
   win.windowLogin.open();
   win.close();
});


Ti.include('properties.js');

// Gets how many Arbitrary data pages the user has created and
// makes an icon for it.
Ti.include( 'getArbitraryButtons.js' );


// Put in the Common buttons on the home page
Ti.include( 'homeButtons.js' );
Ti.include( 'homeButtonsEventListeners.js' );

// Puts in the bottom slider with photos
Ti.include( 'photoSlider.js' );

//Ti.include('countDown.js');

win.add(btnBack);
