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

<<<<<<< HEAD
=======
Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
Titanium.Geolocation.distanceFilter = 0.1;
// GET CURRENT POSITION - THIS FIRES ONCE
var longitude;
var latitude;
var currentLocation = "";
Titanium.Geolocation.getCurrentPosition(function(e)
{
	if (!e.success || e.error)
	{
		currentLocation.text = 'error: ' + JSON.stringify(e.error);
		return;
	}

	longitude = e.coords.longitude;
	latitude = e.coords.latitude;
	altitude = e.coords.altitude;
	runIT();
});


/*
>>>>>>> 10b20a88136e6aad50d48afe8beffdb0f644b2ff
var webview = Titanium.UI.createWebView({url:'http://www1.macys.com/registry/wedding/registryhome?cm_mmc=Google_Bridal-_-Coremetrics+Bridal+Exact_gift+registry-_-4181574038_Exact-_-gift+registry_mkwid_s100000000000236374430_4181574038|-|100000000000236374430&cm_guid=1-_-100000000000236374430-_-4181574038'});

win.add(webview);

win.add(btnBack);


<<<<<<< HEAD

=======
//
// SimpleGeo Example working with Appcelerator
//
// borrowed from the Tweetanium project can be downloaded from here
// <a href="https://github.com/appcelerator/tweetanium/tree/master/mobile/Tweetanium/Resources/lib/oauth">https://github.com/appcelerator/tweetanium/tree/master/mobile/Tweetanium/Resources/lib/oauth</a>
Ti.include(
    '../lib/oauth/sha1.js',
    '../lib/oauth/oauth.js'
);
 
//
// get your own keys from simpleGeo
// <a href="http://simplegeo.com/docs/getting-started">http://simplegeo.com/docs/getting-started</a>
//

function runIT() {
var consumer_key='KJ7rx8BLKEdKLqP5mfKZqnegNE4uruRD';
var secret_key='ecWfQfKMc6gYSDam7mWJdTMQfmWEpw9q';
 
//
// most of this code is borrowed and simplified from the documentation
// in the oauth.js file and the tweetanium source
//
var fetchUrl = 'http://api.simplegeo.com/1.0/places/' + latitude + "," + longitude + ".json?q=tuxedo%20rentals";
var accessor = { consumerSecret: secret_key };
var parameters = { "address" : "302 easy st, mountain view, ca"};
var message = {
    method: 'GET',
    //action: 'http://api.simplegeo.com/1.0/context/address.json?q=tuxedo',
    action: fetchUrl,
    parameters: [
        ['oauth_signature_method', 'HMAC-SHA1'],
        ['oauth_consumer_key', consumer_key],
        ['oauth_secret_key', secret_key],
        ['oauth_version', '1.0']
    ]
};
 
//load up additional parameters for the request
var moreParams = parameters||{};
for (var key in moreParams) {
    if (moreParams.hasOwnProperty(key)) {
        message.parameters.push([key,moreParams[key]]);
    }
}
 
OAuth.setTimestampAndNonce(message);
OAuth.setParameter(message, "oauth_timestamp", OAuth.timestamp());
OAuth.SignatureMethod.sign(message, accessor);
var finalUrl = OAuth.addToURL(message.action, message.parameters);
 
var xhr = Titanium.Network.createHTTPClient();
xhr.onerror = function(e){
    Ti.API.debug(e);
};   
 
// dump the JSON output
xhr.onload = function(e){
    Ti.API.debug(JSON.parse(xhr.responseText));
};
xhr.open('GET', finalUrl);
xhr.send();
}
>>>>>>> 10b20a88136e6aad50d48afe8beffdb0f644b2ff
