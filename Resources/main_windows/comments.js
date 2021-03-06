var win = Titanium.UI.currentWindow;  

var nav_bar = Titanium.UI.createImageView({
        image:'../images/templates/'+win.templateUsed+'/nav-bar-blank.png',
        top:0,
        left:0,
        height:40,
        //width:480,
	    borderWidth: 0,
	    borderRadius: 0
});
win.add(nav_bar);

var titleName = Titanium.UI.createLabel({  
        text:'Comments',  
        top:10,  
        left:125,  
        borderRadius:0,
        color:'white',
        height:'auto'
}); 
win.add(titleName);

var btnBack = Titanium.UI.createButton({  
    backgroundImage:'../images/templates/'+win.templateUsed+'/back.png',
    backgroundSelectedImage: '../images/templates/'+win.templateUsed+'/back_over.png',
    top:2,  
    left:2,
    width:65,  
    height:40,
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
/*
var webview = Titanium.UI.createWebView({
    url:'http://'+win.server_location+'/photos/fb/width/300/location/'+win.server_location+'/url/' + new_image_url,
    //url:'http://zend3.grep-r.com/gkan/gar-comment-2.php',
    top:40,
    scalesPageToFit:false
});
*/

Ti.API.info( 'webview url: ' + win.site_url+'/photos/commentonly/width/325/location/s3.amazonaws.com_wedvite-photos/url/'+new_image_url );

//win.webview.url = 'http://'+win.server_location+'/photos/fb/width/300/location/'+win.server_location+'/url/' + new_image_url;
win.webview.url = win.site_url+'photos/commentonly/width/325/location/s3.amazonaws.com_wedvite-photos/url/'+new_image_url;
win.webview.scalesPageToFit = 'false';


win.add(win.webview);

win.add(btnBack);
