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

//var btnBack = Titanium.UI.createButton({  
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
   Ti.API.info( "Event info back button pressed..." );
   win.backWindow.open();
   win.close();
});

var btnAdd = Titanium.UI.createButton({
    title:'Add',
    top:10,
    right:5,
    width:100,
    height:20,
    borderRadius:1,
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
win.add(btnAdd);

btnAdd.addEventListener('click', function()
{
	var windowAdd = Titanium.UI.createWindow({
		title:'Add Gift Registry',
		url:'gift_registry_add.js',
		backgroundColor:'white'
	});
	//window variables 
	windowAdd.loader = win.loader;
	windowAdd.idKey = win.idKey;
	windowAdd.site_url = win.site_url;
	windowAdd.backWindow = win;
	
	windowAdd.open();
});



win.addEventListener('focus',function(){

	loadList();
});

function loadList(){

	// create table view
	var tableview = Titanium.UI.createTableView({
		top:40
	});

	// Variable to set what onload section todo.  Setting the text field info or saving
	var onloadType = 'getting_gift_registry_list';
	
	// Get a list of users that is invited to this event
	var invitedList = '';
	
	win.loader.open( "GET", win.site_url + "data/index/class/GetGiftRegistry/method/getInfo/id/" + win.idKey );
	
	win.loader.onload = function() 
	{
		Ti.API.info( this.responseText );
	
		if( onloadType == 'getting_gift_registry_list' ){
		
			results = eval('('+this.responseText+')');
			
			Ti.API.info( results.length );
			
			for (var i=0;i<results.length;i++){
				
				// Create a row for each entry
				var row = Ti.UI.createTableViewRow({
					title:results[i].name,
					hasChild:true
				});
				
				row.gift_registry_id_seq = results[i].gift_registry_id_seq;
				row.name = results[i].name;
				row.url_link = results[i].url;
				
				row.addEventListener('click', function(e)
				{
					e.source.id
					Ti.API.info( "Clicked: " + e.source.gift_registry_id_seq );
					
					var windowAdd = Titanium.UI.createWindow({
						title:'Gift Registy Edit',
						url:'gift_registry_edit.js',
						backgroundColor:'white'
					});
					//window variables 
					windowAdd.loader = win.loader;
					windowAdd.idKey = win.idKey;
					windowAdd.site_url = win.site_url;
					windowAdd.backWindow = win;
					windowAdd.gift_registry_id_seq = e.source.gift_registry_id_seq;
					windowAdd.name = e.source.name;
					windowAdd.url_link = e.source.url_link;
					
					windowAdd.open();
					
				});
				
				tableview.appendRow( row );
			}
			
			win.add(tableview);
		}
	}
	
	// Send the HTTP request
	win.loader.send();

}





