var win = Titanium.UI.currentWindow;  


var nav_bar = Titanium.UI.createImageView({
        image:'../images/templates/multi-color/nav-bar-blank.png',
        top:0,
        left:0,
        height:40,
        //width:480,
	    borderWidth: 0,
	    borderRadius: 0
});
win.add(nav_bar);

//var btnBack = Titanium.UI.createButton({  
var btnBack = Titanium.UI.createButton({  
    title:'',  
    backgroundImage:'../images/templates/multi-color/back.png',
    backgroundSelectedImage: '../images/templates/multi-color/back_over.png',
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
   win.windowHome.open();
   win.close();
});

var actInd = Titanium.UI.createActivityIndicator({
    height:50,
    width:10
});

var titleName = Titanium.UI.createLabel({  
        text:'Gift Registry',  
        top:10,  
        left:125,  
        borderRadius:0,  
        height:'auto',
        color:'white'
}); 
win.add(titleName);



// Create Sub window
var windowRegistryView = Titanium.UI.createWindow({
    title:'Viewing Gift',    url:'giftRegistryViewer.js'
});
function dynTable(rowData) { 
	
	// create table view data object
	var data = [];
	for(var i=0; i < rowData.length; i++) {
		// use data passed into function 
		data.push({title:rowData[i].name, hasChild:true, url:rowData[i].url} );	
	}

	// create table view
	var tableview = Titanium.UI.createTableView({
    		top:40,
        	data:data,
        	filterAttribute:'title'
	});

	tableview.addEventListener('click', function(e)
	{   
        	// event data 
        	var index = e.index;
        	var section = e.section;
        	var row = e.row;
        	var rowdata = e.rowData;
        
        	//e.section.headerTitle = e.section.headerTitle + ' section has been clicked';
        	//Titanium.UI.createAlertDialog({title:'Table View',message:'row ' + row + ' index ' + index + ' section ' + section  + ' row data ' + rowdata + ' type ' + row.type + ' searchTerm ' + row.searchTerm }).show();
        
    		windowRegistryView.previousWin = win;
    		windowRegistryView.myURL = row.url;
		windowRegistryView.previousWin = win;


    		windowRegistryView.open();
        
	});     
	win.add(tableview);
}


// Create our HTTP Client
var loader = Titanium.Network.createHTTPClient();

Ti.API.info( "Making ajax call for data to: " + win.site_url + "data/index/class/GetGiftRegistry/method/getInfo/id/" + win.idKey );

// Sets the HTTP request method, and the URL to get data from
loader.open( "GET", win.site_url + "data/index/class/GetGiftRegistry/method/getInfo/id/" + win.idKey );

loader.onload = function() 
{
    Ti.API.info( "Gift Registry Data: " + this.responseText );

    results = eval('('+this.responseText+')');
    
	dynTable(results);
    
};
        
// Send the HTTP request
loader.send();
