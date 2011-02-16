//
// Action Events for the buttons on the home screen
//

// Event Info 
btnEventInfo.addEventListener('click',function(e)  
{   
    // Set this new window's variables
    win.windowEventInfo.idKey = win.idKey;

    win.windowEventInfo.open();
    win.close();
    
});

// Map
btnMap.addEventListener('click',function(e)  
{   
    // Set this new window's variables
    win.windowMap.idKey = win.idKey;
    win.windowMap.mapview = win.mapview;

    win.windowMap.open();
    win.close();
    
});

// About Us
btnArbitraryOne.addEventListener('click',function(e)  
{   
    // Set this new window's variables
    win.windowArbitrary.idKey = win.idKey;
    
    // Pass result to windowArbitrary
    win.windowArbitrary.arbitraryWinID = 0;
    win.windowArbitrary.textAboutUs = win.textAboutUs;

    win.windowArbitrary.open();
    win.close();
    
});

// Wedding Party
btnArbitraryTwo.addEventListener('click',function(e)  
{   
    // Set this new window's variables
    win.windowArbitrary.idKey = win.idKey;
    
    // Pass result to windowArbitrary
    win.windowArbitrary.arbitraryWinID = 1;
    win.windowArbitrary.textWeddingParty = win.textWeddingParty;

    win.windowArbitrary.open();
    win.close();
    
});

// Owners Photos
btnOwnersPhotos.addEventListener('click',function(e)  
{   
    // Set this new window's variables
    win.windowOwnersPhoto.idKey = win.idKey;

    win.windowOwnersPhoto.open();
    win.close();
    
});

// Guests Photos
btnGuestPhotos.addEventListener('click',function(e)  
{   
    // Set this new window's variables
    win.windowGuestsPhoto.idKey = win.idKey;

    win.windowGuestsPhoto.open();
    win.close();
    
});

// Gift Registry
btnRegistry.addEventListener('click',function(e)  
{   
    // Set this new window's variables
    win.windowGiftRegistry.idKey = win.idKey;

    win.windowGiftRegistry.open();
    win.close();
    
});


// LBS
btnLBS.addEventListener('click',function(e)  
{   
    win.windowLBS.open();
    win.close();
    
});
