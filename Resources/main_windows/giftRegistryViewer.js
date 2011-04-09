var win = Titanium.UI.currentWindow;
Titanium.API.info("The url you wanted is: " + win.url);
Titanium.API.info("The url you wanted is: " + win.myURL);
var windowHome = Titanium.UI.createWindow({
    title:'Home Page',
    url:'main_windows/home.js'
});


var nav_bar = Titanium.UI.createImageView({
        image:'../images/navigation/nav-bar-blank.png',
        top:0,
        left:0,
        height:40,
        width:480,
		borderWidth: 0,
		borderRadius: 0
		});
		win.add(nav_bar);

var titleName = Titanium.UI.createLabel({
        text:'Gift Registry',
        top:10,
        left:125,
        borderRadius:0,
        height:'auto'
});
win.add(titleName);
//var btnBack = Titanium.UI.createButton({
var btnBack = Titanium.UI.createButton({  
    title:'',
    backgroundImage:'../images/navigation/back.png',
    top:5,  
    left:2,
    width:35,
    height:35,
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  });  win.add(btnBack);

btnBack.addEventListener('click', function()
{
   win.previousWin.open();
   win.close();
});

win.add(btnBack);


var webview = Titanium.UI.createWebView({
	url:win.myURL,
    //url:'http://zend3.grep-r.com/gkan/gar-comment-2.php',
    //url:'http://smurf.grep-r.com/photos/fb/width/450/location/smurf.grep-r.com/url/__pictures__14-phpRxT0MO.png',
    top:40
});

win.add(webview);



