//
// Action Events for the buttons on the home screen
//

btnEventInfo.addEventListener('click',function(e)  
{   
    // Set this new window's variables
    win.windowEventInfo.idKey = win.idKey;

    win.windowEventInfo.open();
    win.close();
    
});
