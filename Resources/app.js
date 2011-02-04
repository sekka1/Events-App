// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

/////////////////////////////////////////////
// Global Variables
/////////////////////////////////////////////
var site_url = 'http://smurf.grep-r.com/';
var idKey = '';

/////////////////////////////////////////////
// Creating All Windows
/////////////////////////////////////////////
var windowLogin = Titanium.UI.createWindow({
    title:'User Authentication',
    url:'main_windows/login.js',
    exitOnClose: true
});

var windowHome = Titanium.UI.createWindow({
    title:'Home Page',
    url:'main_windows/home.js'
});

var windowEventInfo = Titanium.UI.createWindow({
    title:'Event Info',
    url:'main_windows/eventInfo.js'
});

/////////////////////////////////////////////
// Passing Variables to Each Window
/////////////////////////////////////////////

// Login Window
windowLogin.windowHome = windowHome;
windowLogin.idkey = idKey;

// Home Screen Window
windowHome.windowEventInfo = windowEventInfo;
windowHome.idKey = idKey;
windowHome.site_url = site_url;

// Event Info Window
windowEventInfo.windowHome = windowHome;
windowEventInfo.idKey = idKey;
windowEventInfo.site_url = site_url;

/////////////////////////////////////////////
// Open First Window
/////////////////////////////////////////////
windowLogin.open();