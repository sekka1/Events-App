var win = Titanium.UI.currentWindow;  

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

var btnBack = Titanium.UI.createButton({  
    title:'',  
    backgroundImage:'../images/templates/multi-color/back.png',
    backgroundSelectedImage: '../images/templates/multi-color/back_over.png',
    top:2,  
    left:2,
    width:65,  
    height:40,
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnBack);

btnBack.addEventListener('click', function()
{
    win.windowHome.open();
    win.close();

});


// Replacing the / with __ so that it can be passed into the FB photo comment generator
//var new_image_url = win.image_url.replace( /\//g, "__" );

var webview = Titanium.UI.createWebView({
    url:'http://wedvite.us/photos/commentonly/width/325/location/wedvite.us/url/__comments__' + win.idKey + 'comment',
    top:40,
    scalesPageToFit:false
});
win.add(webview);

// Add button on top of the image
win.add(btnBack);
