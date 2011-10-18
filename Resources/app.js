// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

Ti.API.info( "Platform: " + Titanium.Platform.name );

/////////////////////////////////////////////
// Global Variables
/////////////////////////////////////////////
var site_url = 'http://wedvite.us/';
var idKey = ''; // This is the event_id_seq

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

var windowRsvp = Titanium.UI.createWindow({
    title:'RSVP',
    url:'main_windows/rsvp.js'
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

var windowLocationList = Titanium.UI.createWindow({
    title:'LBS Location List',
    url:'main_windows/lbsLocationList.js'
});

var windowLocationDetail = Titanium.UI.createWindow({
    title:'LBS Location Details',
    url:'main_windows/lbsLocationDetails.js'
});

var windowWeddingComments = Titanium.UI.createWindow({
    title:'Wedding Comments',
    url:'main_windows/weddingComments.js'
});

var windowComments = Titanium.UI.createWindow({
    title:'Comment Anything Page',
    url:'main_windows/comments.js'
});

var windowAnonymousLogin = Titanium.UI.createWindow({
	title:'Anonymous Login',
	url:'main_windows/anonymousLogin.js'
});
/////////////////////////////////////////////
// Creating App Objects
/////////////////////////////////////////////

// Can only have one map view.  Creating it here and passing it around
var mapview = Titanium.Map.createView({
        top:40,
        mapType: Titanium.Map.STANDARD_TYPE,
        animate:true,
        regionFit:true,
        userLocation:false
});

// Having problems with webviews.  Trying to create one and pass it around
var webview = Titanium.UI.createWebView({
    top:40,
    scalesPageToFit:false
});

// Create our HTTP Client and name it "loader"
//var loader = Titanium.Network.createHTTPClient();

/////////////////////////////////////////////
// Passing Variables to Each Window
/////////////////////////////////////////////

// Login Window
windowLogin.windowHome = windowHome;
windowLogin.windowAnonymousLogin = windowAnonymousLogin;
windowLogin.idkey = idKey;
windowLogin.site_url = site_url;
//windowLogin.loader = loader;

// Home Screen Window
windowHome.windowLogin = windowLogin;
windowHome.windowEventInfo = windowEventInfo;
windowHome.windowMap = windowMap;
windowHome.mapview = mapview;
windowHome.windowRsvp = windowRsvp;
windowHome.idKey = idKey;
windowHome.site_url = site_url;
windowHome.windowArbitrary = windowArbitrary;
windowHome.windowFullPhoto = windowFullPhoto;
windowHome.windowPhotos = windowPhotos;
windowHome.windowGiftRegistry = windowGiftRegistry;
windowHome.windowLBS = windowLBS;
windowHome.windowWeddingComments = windowWeddingComments;
//windowHome.loader = loader;

// Event Info Window
windowEventInfo.windowHome = windowHome;
windowEventInfo.idKey = idKey;
windowEventInfo.site_url = site_url;
//windowEventInfo.loader = loader;

// Map Window
windowMap.windowHome = windowHome;
windowMap.mapview = mapview;
windowMap.idKey = idKey;
windowMap.site_url = site_url;
//windowMap.loader = loader;

// RSVP Window
windowRsvp.windowHome = windowHome;
windowRsvp.site_url = site_url;
//windowRsvp.loader = loader;

// Arbitrary Window
windowArbitrary.windowHome = windowHome;
windowArbitrary.site_url = site_url;
//windowArbitrary.loader = loader;

// Full Photo Window
windowFullPhoto.windowHome = windowHome;
windowFullPhoto.windowPhotos = windowPhotos;
//windowFullPhoto.webview = webview;
windowFullPhoto.windowComments = windowComments;

// Photos
windowPhotos.windowHome = windowHome;
windowPhotos.windowFullPhoto = windowFullPhoto;
windowPhotos.site_url = site_url;
windowPhotos.idKey = idKey;
//windowPhotos.loader = loader;


// Gift Registry
windowGiftRegistry.site_url = site_url;
windowGiftRegistry.windowHome = windowHome;
windowGiftRegistry.idKey = idKey;

// LBS 
windowLBS.windowHome = windowHome;
windowLBS.windowLocationList = windowLocationList;
windowLBS.mapview = mapview;

// LBS -> Category List
windowLocationList.windowLocationDetail = windowLocationDetail;

// LBS -> Category List -> Detail Page with map
windowLocationDetail.windowLBS = windowLBS;

// Wedding Comments
windowWeddingComments.windowHome = windowHome;
windowWeddingComments.idKey = idKey;
windowWeddingComments.webview = webview;

// Comment Anything Page
windowComments.webview = webview;

// Anonymous Login Screen
windowAnonymousLogin.windowLogin = windowLogin;

/////////////////////////////////////////////
// Open First Window
/////////////////////////////////////////////
windowLogin.open();
