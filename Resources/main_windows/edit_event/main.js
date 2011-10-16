var win = Titanium.UI.currentWindow;  

Ti.API.info( "In Edit event main window" );

var nav_bar = Titanium.UI.createImageView({
        image:'../../images/templates/multi-color/nav-bar-blank.png',
        top:0,
        left:0,
        height:40,
        //width:480,
	    borderWidth: 0,
	    borderRadius: 0
});
win.add(nav_bar);

var titleName = Titanium.UI.createLabel({  
        text:'Edit My Wedding',  
        top:10,  
        left:125,  
        borderRadius:0,  
        height:'auto',
        color:'white'
}); 
win.add(titleName);

var btnBack = Titanium.UI.createButton({  
    title:'',  
    backgroundImage:'../../images/templates/multi-color/back.png',
    backgroundSelectedImage: '../../images/templates/multi-color/back_over.png',
    top:2,  
    left:2,
    width:65,  
    height:40,
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
	{title:'Wedding Info', hasChild:true, type:'event_info'},
//	{title:'Template', hasChild:true, type:'template'},
	{title:'About Us', hasChild:true, type:'about_us'},
	{title:'Our Family', hasChild:true, type:'family'},
	{title:'Our Gift Registry', hasChild:true, type:'gift_registry'},
	{title:'Photos', hasChild:true, type:'photos'},
	{title:'Invite Friends', hasChild:true, type:'invite_facebook_friends'}
//	{title:'Collaborate', hasChild:true, type:'Collaborate'},

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
	Ti.API.info( "Clicking a row: " + win.idKey );

	// Row Data
	var index = e.index;
	var section = e.section;
	var row = e.row;
	var rowdata = e.rowData;
	
	if( row.type == 'event_info' ){
		
		Ti.API.info( "Event Edit Event Info: " + win.idKey );
	
		var windowEdit = Titanium.UI.createWindow({
			title:'Edit Wedding Info',
			url:'eventInfo.js'
			//backgroundColor:'white'
		});
		
		//windowEdit.loader = win.loader;
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
		//windowEdit.loader = win.loader;
		windowEdit.idKey = win.idKey;
		windowEdit.site_url = win.site_url;
		windowEdit.backWindow = win;
		
		windowEdit.open();
	}
	if( row.type == 'template' ){
		Ti.API.info( "Template Edit: " + win.idKey );
		var windowEditTemplate = Titanium.UI.createWindow({
			title:'Edit Template',
			url:'Template.js',
			backgroundColor:'white'
		});
		//window variables 
		windowEditTemplate.idKey = win.idKey;
		windowEditTemplate.site_url = win.site_url;
		windowEditTemplate.backWindow = win;
		
		windowEditTemplate.open();
		
	}
	if( row.type == 'family' ){
	
		var windowEdit = Titanium.UI.createWindow({
			title:'Edit Family',
			url:'Family.js',
			backgroundColor:'white'
		});
		//window variables 
		//windowEdit.loader = win.loader;
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
		//windowEdit.loader = win.loader;
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
		//windowEdit.loader = win.loader;
		windowEdit.idKey = win.idKey;
		windowEdit.site_url = win.site_url;
		windowEdit.backWindow = win;
		
		windowEdit.open();
	}
	if( row.type == 'gift_registry' ){
	
		var windowEdit = Titanium.UI.createWindow({
			title:'Edit Gift Registry',
			url:'gift_registry_list.js',
			backgroundColor:'white'
		});
		//window variables 
		//windowEdit.loader = win.loader;
		windowEdit.idKey = win.idKey;
		windowEdit.site_url = win.site_url;
		windowEdit.backWindow = win;
		
		windowEdit.open();
	}
});

win.add(tableview);
win.add(btnBack);
