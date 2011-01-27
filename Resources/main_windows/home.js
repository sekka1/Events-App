var win = Titanium.UI.currentWindow;  

win.addEventListener('focus',function(e)  
{  
    Ti.API.info( "home.js win.addEventListener - focus" );
    
    Ti.API.info( "idKey: " + win.idKey );
});

// Put in the Common buttons on the home page
Ti.include( 'homeButtons.js' );
Ti.include( 'homeButtonsEventListeners.js' );

// Puts in the bottom slider with photos
Ti.include( 'photoSlider.js' );

// Gets how many Arbitrary data pages the user has created and
// makes an icon for it.
Ti.include( 'getArbitraryButtons.js' );