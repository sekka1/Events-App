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
/*
// RSVP
btnRsvp.addEventListener('click',function(e)  
{   
    // Set this new window's variables
    win.windowRsvp.idKey = win.idKey;

    win.windowRsvp.open();
    win.close();
    
});
*/

// About Us
btnArbitraryOne.addEventListener('click',function(e)  
{   
    // Set this new window's variables
    win.windowArbitrary.idKey = win.idKey;
    
    // Pass result to windowArbitrary
    win.windowArbitrary.arbitraryWinID = 0;
    //win.windowArbitrary.textAboutUs = win.textAboutUs;

    win.windowArbitrary.open();
    win.close();
    
});

// Family
btnArbitraryTwo.addEventListener('click',function(e)  
{   
    // Set this new window's variables
    win.windowArbitrary.idKey = win.idKey;
    
    // Pass result to windowArbitrary
    win.windowArbitrary.arbitraryWinID = 1;
    //win.windowArbitrary.textWeddingParty = win.textWeddingParty;

    win.windowArbitrary.open();
    win.close();
    
});

// Guests Photos
btnGuestPhotos.addEventListener('click',function(e)  
{   
    // Set this new window's variables
    win.windowPhotos.idKey = win.idKey;

    win.windowPhotos.open();
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

// Wedding Comments
btnWeddingComment.addEventListener('click',function(e)  
{   
    win.windowWeddingComments.idKey = win.idKey;
    win.windowWeddingComments.open();
    win.close();
    
});