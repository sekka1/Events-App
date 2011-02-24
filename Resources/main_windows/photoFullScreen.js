var win = Titanium.UI.currentWindow;  

var nav_bar = Titanium.UI.createImageView({
        image:'../images/navigation/nav-bar-3.png',
        top:0,
        left:0,
        height:40,
        //width:330,
	    borderWidth: 0,
	    borderRadius: 0
});
win.add(nav_bar);

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
    // This page is used multiple times.  Call this window you
    // need to set the back_location to tell it where to go
    // when the back button is hit
    
    if( win.back_location == 'home' ){
        win.windowHome.open();
        win.close();
    }
    
    if( win.back_location == 'ownersPhotos' ){
        win.windowOwnersPhoto.open();
        win.close();
    }
    if( win.back_location == 'guestsPhotos' ){
        win.windowGuestsPhoto.open();
        win.close();
    }
   
});

var av_image = Titanium.UI.createImageView({
        image:win.photo_url, // the image for the image view
        top:40,
        left:0,
        //height:82,
        //width:80
});
win.add( av_image );

// Add button on top of the image
win.add(btnBack);