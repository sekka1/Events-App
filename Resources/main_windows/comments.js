var win = Titanium.UI.currentWindow;  

var nav_bar = Titanium.UI.createImageView({
        image:'../images/navigation/nav-bar-blank.png',
        top:0,
        left:0,
        height:40,
        //width:330,
	    borderWidth: 0,
	    borderRadius: 0
});
win.add(nav_bar);

var titleName = Titanium.UI.createLabel({  
        text:'Comments',  
        top:10,  
        left:125,  
        borderRadius:0,  
        height:'auto'
}); 
win.add(titleName);

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
   win.lastWindow.open();
   win.close();
});

Ti.API.info( win.photo_url + ' ---- ' + win.image_url + ' ----- '  + win.server_location );
Ti.API.info( win.image_url.replace( /\//g, '__' ) );

// Replacing the / with __ so that it can be passed into the FB photo comment generator
var new_image_url = win.image_url.replace( /\//g, "__" );

// Evo - Width of 300 is perfect for the Evo, still cant hit the comment button to open the login
// iPHone - Width of 500 only covers half the screen

var webview = Titanium.UI.createWebView({
    url:'http://'+win.server_location+'/photos/fb/width/300/location/'+win.server_location+'/url/' + new_image_url,
    //url:'http://zend3.grep-r.com/gkan/gar-comment-2.php',
    top:40,
    scalesPageToFit:false
});

win.add(webview);

win.add(btnBack);
