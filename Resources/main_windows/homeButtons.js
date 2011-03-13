//
// Buttons on the home screen
// 

Ti.API.info( "homeButtons.js - focus" );

//
// Row 1
//
var btnEventInfo = Titanium.UI.createButton({  
    title:'',  
    top:10,  
    left:35,
    width:60,  
    height:62,
    backgroundImage: '../images/png/event_info_new_small.png',
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnEventInfo);

var lblEventInfo = Titanium.UI.createLabel({
	text:'Event Info',
	width:'auto',
	height:'auto',
	font:{fontFamily:'Courier',fontSize:14},
	left:20,
	top:75,
	color:'white',
	shadowColor:'#aaa',
	shadowOffset:{x:1,y:1},
	zIndex:99
});
win.add(lblEventInfo);
	
	

var btnMap = Titanium.UI.createButton({  
    title:'',  
    top:10,  
    left:130,
    width:60,  
    height:62,
    backgroundImage: '../images/png/map_new_small.png', 
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnMap);

var btnOwnersPhotos = Titanium.UI.createButton({  
    title:'',  
    top:10,  
    left:225,
    width:60,  
    height:62,
    backgroundImage: '../images/png/photos_new_small.png',
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnOwnersPhotos);


//
// Row 2 - there are 2 other arbitrary window button in this row
//
//See arbitraryButtons.js 


//
// Row 3
//
var btnGuestPhotos = Titanium.UI.createButton({  
    title:'',  
    top:200,  
    left:35,
    width:60,  
    height:62,
    backgroundImage: '../images/png/photos_new_small.png', 
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnGuestPhotos);

var btnRegistry = Titanium.UI.createButton({  
    title:'',  
    top:200,  
    left:130,
    width:60,  
    height:62,
    backgroundImage: '../images/png/registry_new_small.png', 
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnRegistry);

var btnLBS = Titanium.UI.createButton({  
    title:'',  
    top:200,  
    left:225,
    width:60,  
    height:62,
    backgroundImage: '../images/png/Champagne.png',
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnLBS);
