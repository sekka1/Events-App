/////////////////////////////////////////////////////
//  Standard Window and Nav layout
/////////////////////////////////////////////////////
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
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnBack);

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
    
    if( win.back_location == 'photos' ){
        win.windowPhotos.open();
        win.close();
    }
   
});

/////////////////////////////////////////////////////
//  Start of page content
/////////////////////////////////////////////////////

// Replacing the / with __ so that it can be passed into the FB photo comment generator
var new_image_url = win.image_url.replace( /\//g, "__" );

/*var webview = Titanium.UI.createWebView({
    url:'http://'+win.server_location+'/photos/fb/width/325/location/'+win.server_location+'/url/' + new_image_url,
    top:40,
    scalesPageToFit:false
});*/
win.webview.url = 'http://'+win.server_location+'/photos/fb/width/325/location/'+win.server_location+'/url/' + new_image_url;
win.webview.scalesPageToFit = 'false';
win.add(win.webview);

// Add button on top of the image
win.add(btnBack);
