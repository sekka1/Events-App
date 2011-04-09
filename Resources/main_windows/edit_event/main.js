var win = Titanium.UI.currentWindow;  

var nav_bar = Titanium.UI.createImageView({
        image:'../../images/navigation/nav-bar-blank.png',
        top:0,
        left:0,
        height:40,
        width:480,
	    borderWidth: 0,
	    borderRadius: 0
});
win.add(nav_bar);

var titleName = Titanium.UI.createLabel({  
        text:'Edit',  
        top:10,  
        left:125,  
        borderRadius:0,  
        height:'auto'
}); 
win.add(titleName);

var btnBack = Titanium.UI.createButton({  
    title:'',  
    backgroundImage:'../../images/navigation/back.png',
    top:5,  
    left:2,
    width:35,  
    height:35,
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnBack);

btnBack.addEventListener('click', function()
{
   win.backWindow.open();
   win.close();
});


// create table view data object
// type - can be either: q or category
// searchTerm - is the term that will be in the value field of the type
var data = [
	{title:'Event Info', hasChild:true, type:'event_info'},
	{title:'Template', hasChild:true, type:'template'},
	{title:'About Us', hasChild:true, type:'about_us'},
	{title:'Family', hasChild:true, type:'family'},
	{title:'Gift Registy', hasChild:true, type:'gift_registry'},
	{title:'Photos', hasChild:true, type:'photos'},
	{title:'Invite Facebook Friends', hasChild:true, type:'invite_facebook_friends'},
	{title:'Collaborate', hasChild:true, type:'Collaborate'},

];

//var search = Titanium.UI.createSearchBar({
//	showCancel:false
//});
// create table view
var tableview = Titanium.UI.createTableView({
    top:40,
	data:data,
//	search:search,
	filterAttribute:'title'
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	// Row Data
	var index = e.index;
	var section = e.section;
	var row = e.row;
	var rowdata = e.rowData;
	
	if( row.type == 'event_info' ){
		
		Ti.API.info( "Event Edit Event Info: " + win.idKey );
	
		var windowEdit = Titanium.UI.createWindow({
			title:'Edit Event',
			url:'eventInfo.js',
			//backgroundColor:'white'
		});
		
		windowEdit.loader = win.loader;
		windowEdit.idKey = win.idKey;
		windowEdit.site_url = win.site_url;
		windowEdit.backWindow = win;
		
		windowEdit.open();		
	}
	if( row.type == 'about_us' ){

		var windowEdit = Titanium.UI.createWindow({
			title:'Edit About US',
			url:'AboutUs.js',
			backgroundColor:'white'
		});
		//window variables 
		windowEdit.loader = win.loader;
		windowEdit.idKey = win.idKey;
		windowEdit.site_url = win.site_url;
		windowEdit.backWindow = win;
		
		windowEdit.open();
	}
	if( row.type == 'family' ){
	
		var windowEdit = Titanium.UI.createWindow({
			title:'Edit Family',
			url:'family.js',
			backgroundColor:'white'
		});
		//window variables 
		windowEdit.loader = win.loader;
		windowEdit.idKey = win.idKey;
		windowEdit.site_url = win.site_url;
		windowEdit.backWindow = win;
		
		windowEdit.open();
	}
	if( row.type == 'photos' ){
	
		var windowEdit = Titanium.UI.createWindow({
			title:'Edit Photos',
			url:'photos.js',
			backgroundColor:'white'
		});
		//window variables 
		windowEdit.loader = win.loader;
		windowEdit.idKey = win.idKey;
		windowEdit.site_url = win.site_url;
		windowEdit.backWindow = win;
		
		windowEdit.open();
	}
	if( row.type == 'invite_facebook_friends' ){
	
		var windowEdit = Titanium.UI.createWindow({
			title:'Edit Facebook Friends',
			url:'facebook_friends.js',
			backgroundColor:'white'
		});
		//window variables 
		windowEdit.loader = win.loader;
		windowEdit.idKey = win.idKey;
		windowEdit.site_url = win.site_url;
		windowEdit.backWindow = win;
		
		windowEdit.open();
	}
});

win.add(tableview);
win.add(btnBack);
