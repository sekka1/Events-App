// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

Ti.API.info( "Platform: " + Titanium.Platform.name );

/////////////////////////////////////////////
// Global Variables
/////////////////////////////////////////////
var site_url = 'http://wedvite.us/';
var idKey = '';

// Arbitrary Windows
var arbitraryWinID = '';
var textAboutUs = '';
var textWeddingParty = '';

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

var windowMap = Titanium.UI.createWindow({
    title:'Map',
    url:'main_windows/map.js'
});

var mapview = Titanium.Map.createView({
        top:40,
        mapType: Titanium.Map.STANDARD_TYPE,
        animate:true,
        regionFit:true,
        userLocation:false
});

var windowArbitrary = Titanium.UI.createWindow({
    title:'Arbitrary',
    url:'main_windows/arbitrary.js'
});

// This window just displays a picture
var windowFullPhoto = Titanium.UI.createWindow({
    title:'Full PHoto',
    url:'main_windows/photoFullScreen.js'
});

var windowPhotos = Titanium.UI.createWindow({
    title:'Guests Photos',
    url:'main_windows/photos.js'
});

var windowGiftRegistry = Titanium.UI.createWindow({
    title:'Gift Registry',
    url:'main_windows/giftRegistry.js'
});

var windowLBS = Titanium.UI.createWindow({
    title:'Location Based Search',
    url:'main_windows/lbs.js'
});

var windowWeddingComments = Titanium.UI.createWindow({
    title:'Wedding Comments',
    url:'main_windows/weddingComments.js'
});

/////////////////////////////////////////////
// Passing Variables to Each Window
/////////////////////////////////////////////

// Login Window
windowLogin.windowHome = windowHome;
windowLogin.idkey = idKey;
windowLogin.site_url = site_url;

// Home Screen Window
windowHome.windowLogin = windowLogin;
windowHome.windowEventInfo = windowEventInfo;
windowHome.windowMap = windowMap;
windowHome.mapview = mapview;
windowHome.idKey = idKey;
windowHome.site_url = site_url;
windowHome.windowArbitrary = windowArbitrary;
windowHome.windowFullPhoto = windowFullPhoto;
windowHome.windowPhotos = windowPhotos;
windowHome.windowGiftRegistry = windowGiftRegistry;
windowHome.windowLBS = windowLBS;
windowHome.windowWeddingComments = windowWeddingComments;

// Event Info Window
windowEventInfo.windowHome = windowHome;
windowEventInfo.idKey = idKey;
windowEventInfo.site_url = site_url;

// Map Window
windowMap.windowHome = windowHome;
windowMap.mapview = mapview;
windowMap.idKey = idKey;
windowMap.site_url = site_url;

// Arbitrary Window
windowArbitrary.windowHome = windowHome;

// Full Photo Window
windowFullPhoto.windowHome = windowHome;
windowFullPhoto.windowPhotos = windowPhotos;

// Photos
windowPhotos.windowHome = windowHome;
windowPhotos.windowFullPhoto = windowFullPhoto;
windowPhotos.site_url = site_url;
windowPhotos.idKey = idKey;

// Gift Registry
windowGiftRegistry.site_url = site_url;
windowGiftRegistry.windowHome = windowHome;
windowGiftRegistry.idKey = idKey;

// LBS 
windowLBS.windowHome = windowHome;

// Wedding Comments
windowWeddingComments.windowHome = windowHome;
windowWeddingComments.idKey = idKey;

/////////////////////////////////////////////
// Open First Window
/////////////////////////////////////////////
windowLogin.open();
