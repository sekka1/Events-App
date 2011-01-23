//
// Setup Variables
//
var site_url = 'http://smurf.grep-r.com/';

// to include extra files you can do this
Ti.include('welcome.js');


//
// Data values for various pages.  We dont want to keep on
// reloading data.  
// These will be the un-evaluated data.  Pure json text data.
//
//var event_info_results = 'XXXXXX';
//var arbitrary_page_results = '';

// this sets the background color of the master UIView (when there are no windows/tab groups on it)  
Titanium.UI.setBackgroundColor('#fff');  

var tabGroup = Titanium.UI.createTabGroup();// Login window
var tabGroup2 = Titanium.UI.createTabGroup(); // Post login windows

var login = Titanium.UI.createWindow({  
    title:'User Authentication',
    url:'main_windows/login.js',
    exitOnClose: true  
});  

var loginTab = Titanium.UI.createTab({  
    title:"Login",  
    window:login  
});  
var home = Titanium.UI.createWindow({  
    title:'Home Page',
    url:'main_windows/home.js',
    backgroundColor:'red',
    exitOnClose: true  
});  

var homeTab = Titanium.UI.createTab({  
    title:"Home Page",  
    window:home  
});  

tabGroup.addTab(loginTab);
tabGroup.open();

// GrantEntrance function which will close out the login window and
// open up the iVMS windows/tabs
Ti.App.addEventListener('grantEntrance', function(event)  
{  
    
    home.site_url = site_url;
    home.idKey = event.idKey;
    //home.event_info_results  = event_info_results;
    //home.arbitrary_page_results = arbitrary_page_results;
     
    // Closing the tabGroup that is holding the login tab
    tabGroup.close();
    
    // Open up the tabGroup that has the main windows/tabs
    tabGroup2.addTab(homeTab);
    //tabGroup2.addTab(availabilityTab);
    tabGroup2.open();
     
}); 

