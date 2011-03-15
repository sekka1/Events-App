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
//win.add(btnBack);

var btnComment = Titanium.UI.createButton({  
    title:'Comment',  
    top:30,  
    left:20,
    width:75,  
    height:20,
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  

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

btnComment.addEventListener('click', function()
{
    var windowComments = Titanium.UI.createWindow({
        title:'Home Page',
        url:'comments.js'
    });
    
    windowComments.back_location = win.back_location;
    windowComments.photo_url = win.photo_url;
    windowComments.image_url = win.image_url;
    windowComments.server_location = win.server_location;
    windowComments.lastWindow = win;
    windowComments.open();

});

var scrollView1 = Titanium.UI.createScrollView({
        contentWidth:'auto',
        contentHeight:'auto',
        top:40,
        left:0,
        //width:300,
        //height:600,
        borderRadius:0,
        backgroundColor:'#336699',
        showVerticalScrollIndicator:true,
        showHorizontalScrollIndicator:false
});


var av_image = Titanium.UI.createImageView({
        image:win.photo_url, // the image for the image view
        top:40,
        left:0,
        //height:82,
        //width:80
});
scrollView1.add(av_image);

var webview = Titanium.UI.createWebView({
    //url:'http://'+win.server_location+'/photos/fb/width/500/location/'+win.server_location+'/url/' + new_image_url,
    url:'http://smurf.grep-r.com/photos/fb/width/450/location/smurf.grep-r.com/url/__pictures__14-phpRxT0MO.png',
    //url:'http://zend3.grep-r.com/gkan/gar-comment-2.php',
    top:140,
    scalesPageToFit:false
});
scrollView1.add(webview);


win.add(scrollView1);

// Add button on top of the image
win.add(btnBack);
win.add(btnComment);