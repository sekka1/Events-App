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
win.add(btnBack);

/*
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
var consumer_key='KJ7rx8BLKEdKLqP5mfKZqnegNE4uruRD';
var secret_key='ecWfQfKMc6gYSDam7mWJdTMQfmWEpw9q';
 
//
// most of this code is borrowed and simplified from the documentation
// in the oauth.js file and the tweetanium source
//
var accessor = { consumerSecret: secret_key };
//var parameters = { "address" : "730 n 6th st, san jose,ca" };
var parameters = { "q" : "Parish" };
var message = {
    method: 'GET',
    //action: 'http://api.simplegeo.com/1.0/context/address.json',
    action: 'http://api.simplegeo.com/1.0/places/37.7645,-122.4294.json',
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
    
    results = eval('('+xhr.responseText+')');
    
    //Ti.API.info( xhr.responseText );
    
    Ti.API.info( results.features[0].properties.name );
    
};
xhr.open('GET', finalUrl);
xhr.send();
*/


// create table view data object
// type - can be either: q or category
// searchTerm - is the term that will be in the value field of the type
var data = [
	{title:'Accommodations', hasChild:true, type:'category', searchTerm:'Travel Hotels & Motels', header:'A'},
	{title:'Bridal Fashions', hasChild:true, type:'category', searchTerm:'Bridal', header:'B'},
	{title:'Cakes & Candies', hasChild:true, type:'q', searchTerm:'cake pastry', header:'C'},
	{title:'Catering', hasChild:true, type:'q', searchTerm:'cake pastry'},
	{title:'Ceremony Sites', hasChild:true, type:'q', searchTerm:'cake pastry'},
	{title:'Counseling', hasChild:true, type:'q', searchTerm:'cake pastry'},
	{title:'Dance Instruction', hasChild:true, type:'q', searchTerm:'cake pastry', header:'D'},
	{title:'Decorations', hasChild:true, type:'q', searchTerm:'cake pastry'},
	{title:'Disc Jockeys', hasChild:true, type:'q', searchTerm:'cake pastry'},
	{title:'Favors', hasChild:true, type:'q', searchTerm:'cake pastry', header:'F'},
	{title:'Flowers', hasChild:true, type:'q', searchTerm:'cake pastry'},
	{title:'For the Men', hasChild:true, type:'q', searchTerm:'cake pastry'},
	{title:'Gifts', hasChild:true, type:'q', searchTerm:'cake pastry', header:'G'},
	{title:'Health & Beauty', hasChild:true, type:'q', searchTerm:'cake pastry', header:'H'},
	{title:'Honeymoons', hasChild:true, type:'q', searchTerm:'cake pastry'},
	{title:'Invitations', hasChild:true, type:'q', searchTerm:'cake pastry', header:'I'},
	{title:'Jewelers', hasChild:true, type:'q', searchTerm:'cake pastry', header:'J'},
	{title:'Live Music', hasChild:true, type:'q', searchTerm:'cake pastry', header:'L'},
	{title:'Officiants', hasChild:true, type:'q', searchTerm:'cake pastry', header:'O'},
	{title:'Photographers', hasChild:true, type:'q', searchTerm:'cake pastry', header:'P'},
    {title:'Pre-wedding Events', hasChild:true, type:'q', searchTerm:'cake pastry'},
    {title:'Reception Facilities', hasChild:true, type:'q', searchTerm:'cake pastry', header:'R'},
    {title:'Registries', hasChild:true, type:'q', searchTerm:'cake pastry'},
    {title:'Rehearsal Dinner', hasChild:true, type:'q', searchTerm:'cake pastry'},
    {title:'Rental Services', hasChild:true, type:'q', searchTerm:'cake pastry'},
    {title:'Transportation', hasChild:true, type:'q', searchTerm:'cake pastry', header:'T'},
    {title:'Tuxedos', hasChild:true, type:'q', searchTerm:'cake pastry'},
	{title:'Videographers', hasChild:true, type:'q', searchTerm:'cake pastry', header:'V'},
    {title:'Wedding Planners', hasChild:true, type:'q', searchTerm:'cake pastry', header:'W'}
];

var search = Titanium.UI.createSearchBar({
	showCancel:false
});
// create table view
var tableview = Titanium.UI.createTableView({
	data:data,
	search:search,
	filterAttribute:'title'
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	// event data
	var index = e.index;
	var section = e.section;
	var row = e.row;
	var rowdata = e.rowData;
	
	e.section.headerTitle = e.section.headerTitle + ' section has been clicked';
	Titanium.UI.createAlertDialog({title:'Table View',message:'row ' + row + ' index ' + index + ' section ' + section  + ' row data ' + rowdata + ' title ' + row.title + ' query ' + row.query }).show();
});

win.add(tableview);
