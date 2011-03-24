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
        text:'Gift Registry',  
        top:10,  
        left:125,  
        borderRadius:0,  
        height:'auto'
}); 
win.add(titleName);

var btnBack = Titanium.UI.createButton({  
    title:'',  
    backgroundImage:'../images/navigation/back.png',
    top:5,  
    left:2,
    width:50,  
    height:28,
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnBack);

btnBack.addEventListener('click', function()
{
   win.windowHome.open();
   win.close();
});


var webview = Titanium.UI.createWebView({
    url:'http://www1.macys.com/registry/wedding/registryhome?cm_mmc=Google_Bridal-_-Coremetrics+Bridal+Exact_gift+registry-_-4181574038_Exact-_-gift+registry_mkwid_s100000000000236374430_4181574038|-|100000000000236374430&cm_guid=1-_-100000000000236374430-_-4181574038',
    //url:'http://zend3.grep-r.com/gkan/gar-comment-2.php',
    //url:'http://smurf.grep-r.com/photos/fb/width/450/location/smurf.grep-r.com/url/__pictures__14-phpRxT0MO.png',
    top:40
});

win.add(webview);

win.add(btnBack);
