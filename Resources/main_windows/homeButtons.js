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

var lblMap = Titanium.UI.createLabel({
	text:'Map',
	width:'auto',
	height:'auto',
	font:{fontFamily:'Courier',fontSize:14},
	left:145,
	top:75,
	color:'white',
	shadowColor:'#aaa',
	shadowOffset:{x:1,y:1},
	zIndex:99
});
win.add(lblMap);

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

var lblOwnersPhotos = Titanium.UI.createLabel({
	text:'Photos',
	width:'auto',
	height:'auto',
	font:{fontFamily:'Courier',fontSize:14},
	left:235,
	top:75,
	color:'white',
	shadowColor:'#aaa',
	shadowOffset:{x:1,y:1},
	zIndex:99
});
win.add(lblOwnersPhotos);

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

var lblGuestPhotos = Titanium.UI.createLabel({
	text:'Photos',
	width:'auto',
	height:'auto',
	font:{fontFamily:'Courier',fontSize:14},
	left:40,
	top:265,
	color:'white',
	shadowColor:'#aaa',
	shadowOffset:{x:1,y:1},
	zIndex:99
});
win.add(lblGuestPhotos);

var btnRegistry = Titanium.UI.createButton({  
    title:'',  
    top:200,  
    left:130,
    width:60,  
    height:62,
    backgroundImage: '../images/png/registry_new.png', 
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnRegistry);

var lblRegistry = Titanium.UI.createLabel({
	text:'Registry',
	width:'auto',
	height:'auto',
	font:{fontFamily:'Courier',fontSize:14},
	left:135,
	top:265,
	color:'white',
	shadowColor:'#aaa',
	shadowOffset:{x:1,y:1},
	zIndex:99
});
win.add(lblRegistry);

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

var lblLBS = Titanium.UI.createLabel({
	text:'LBS',
	width:'auto',
	height:'auto',
	font:{fontFamily:'Courier',fontSize:14},
	left:240,
	top:265,
	color:'white',
	shadowColor:'#aaa',
	shadowOffset:{x:1,y:1},
	zIndex:99
});
win.add(lblLBS);
