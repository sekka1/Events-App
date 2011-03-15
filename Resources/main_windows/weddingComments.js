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

btnBack.addEventListener('click', function()
{
    win.windowHome.open();
    win.close();

});


// Replacing the / with __ so that it can be passed into the FB photo comment generator
//var new_image_url = win.image_url.replace( /\//g, "__" );

var webview = Titanium.UI.createWebView({
    //url:'http://'+win.server_location+'/photos/fb/width/325/location/'+win.server_location+'/url/' + new_image_url,
    url:'http://smurf.grep-r.com/photos/fb/width/450/location/smurf.grep-r.com/url/__pictures__14-phpRxT0MO.png',
    top:40,
    scalesPageToFit:false
});
win.add(webview);



// Add button on top of the image
win.add(btnBack);