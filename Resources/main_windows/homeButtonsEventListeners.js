//
// Action Events for the buttons on the home screen
//

// Event Info 
btnEventInfo.addEventListener('click',function(e)  
{   
    // Set this new window's variables
    win.windowEventInfo.idKey = win.idKey;
    win.windowEventInfo.actInd = actInd;
    win.windowEventInfo.templateUsed = templateUsed;

    win.windowEventInfo.open();
    win.hide();
    
});

// Map
btnMap.addEventListener('click',function(e)  
{   
    // Set this new window's variables
    win.windowMap.idKey = win.idKey;
    win.windowMap.mapview = win.mapview;
    win.windowMap.templateUsed = templateUsed;

    win.windowMap.open();
    win.hide();
    
});

/*
// RSVP
btnRsvp.addEventListener('click',function(e)  
{   
    // Set this new window's variables
    win.windowRsvp.idKey = win.idKey;

    win.windowRsvp.open();
    win.hide();
    
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
    win.windowArbitrary.actInd = actInd;
    win.windowArbitrary.templateUsed = templateUsed;

    win.windowArbitrary.open();
    win.hide();
    
});

// Family
btnArbitraryTwo.addEventListener('click',function(e)  
{   
    // Set this new window's variables
    win.windowArbitrary.idKey = win.idKey;
    
    // Pass result to windowArbitrary
    win.windowArbitrary.arbitraryWinID = 1;
    //win.windowArbitrary.textWeddingParty = win.textWeddingParty;
    win.windowArbitrary.actInd = actInd;
    win.windowArbitrary.templateUsed = templateUsed;

    win.windowArbitrary.open();
    win.hide();
    
});

// Guests Photos
btnGuestPhotos.addEventListener('click',function(e)  
{   
    // Set this new window's variables
    win.windowPhotos.idKey = win.idKey;
    //win.windowPhotos.actInd2 = actInd;
    win.windowPhotos.templateUsed = templateUsed;

    win.windowPhotos.open();
    win.hide();
    
});

// Gift Registry
btnRegistry.addEventListener('click',function(e)  
{   
    // Set this new window's variables
    win.windowGiftRegistry.idKey = win.idKey;
    win.windowGiftRegistry.actInd = actInd;
    win.windowGiftRegistry.templateUsed = templateUsed;

    win.windowGiftRegistry.open();
    win.hide();
    
});


// LBS
btnLBS.addEventListener('click',function(e)  
{   
	win.windowLBS.templateUsed = templateUsed;
	
    win.windowLBS.open();
    win.hide();
    
});

// Wedding Comments
btnWeddingComment.addEventListener('click',function(e)  
{   
	win.windowWeddingComments.templateUsed = templateUsed;
    win.windowWeddingComments.idKey = win.idKey;
    win.windowWeddingComments.open();
    win.hide();
    
});
