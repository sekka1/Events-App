var win = Titanium.UI.currentWindow;  

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

var webview = Titanium.UI.createWebView({url:'http://www1.macys.com/registry/wedding/registryhome?cm_mmc=Google_Bridal-_-Coremetrics+Bridal+Exact_gift+registry-_-4181574038_Exact-_-gift+registry_mkwid_s100000000000236374430_4181574038|-|100000000000236374430&cm_guid=1-_-100000000000236374430-_-4181574038'});

win.add(webview);

win.add(btnBack);



