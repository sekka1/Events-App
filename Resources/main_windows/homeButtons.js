//
// Buttons on the home screen
// 

Ti.API.info( "homeButtons.js - focus" );

//
// Row 1
//
var btnEventInfo = Titanium.UI.createButton({  
    title:'',  
    top:49,  
    left:35,
    width:60,  
    height:61,
    backgroundImage: '../images/templates/multi-color/event.png',
    backgroundSelectedImage: '../images/templates/multi-color/event.png',
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnEventInfo);

var lblEventInfo = Titanium.UI.createLabel({
	text:'Event Info',
	width:'auto',
	height:'auto',
	font:{fontFamily:'Arial',fontSize:14},
	left:35,
	top:110,
	color:'white',
	shadowColor:'#aaa',
	shadowOffset:{x:1,y:1},
	zIndex:99
});
win.add(lblEventInfo);

var btnMap = Titanium.UI.createButton({  
    title:'',  
    top:49,  
    left:130,
    width:60,  
    height:61,
    backgroundImage: '../images/templates/multi-color/map.png', 
    backgroundSelectedImage: '../images/templates/multi-color/map.png', 
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnMap);

var lblMap = Titanium.UI.createLabel({
	text:'Map',
	width:'auto',
	height:'auto',
	font:{fontFamily:'Arial',fontSize:14},
	left:145,
	top:110,
	color:'white',
	shadowColor:'#aaa',
	shadowOffset:{x:1,y:1},
	zIndex:99
});
win.add(lblMap);

/*
var btnOwnersPhotos = Titanium.UI.createButton({  
    title:'',  
    top:49,  
    left:225,
    width:60,  
    height:61,
    backgroundImage: '../images/png/photos_new_small.png',
    backgroundSelectedImage: '../images/png/photos_new_small_down.png',
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnOwnersPhotos);

var lblOwnersPhotos = Titanium.UI.createLabel({
	text:'Photos',
	width:'auto',
	height:'auto',
	font:{fontFamily:'Arial',fontSize:14},
	left:235,
	top:110,
	color:'white',
	shadowColor:'#aaa',
	shadowOffset:{x:1,y:1},
	zIndex:99
});
win.add(lblOwnersPhotos);
*/

//
// Row 2 - there are 2 other arbitrary window button in this row
//
//See arbitraryButtons.js 

// There are 2 arbitrary buttons

// 1 - About Us
var btnArbitraryOne = Titanium.UI.createButton({  
    title:'',  
    top:140,  
    left:35,
    width:60,  
    height:62,
    backgroundImage: '../images/templates/multi-color/aboutus.png',
    backgroundSelectedImage: '../images/templates/multi-color/aboutus.png',  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});
win.add(btnArbitraryOne);

// 2 - Family
var btnArbitraryTwo = Titanium.UI.createButton({  
    title:'',  
    top:140,  
    left:130,
    width:60,  
    height:62,
    backgroundImage: '../images/templates/multi-color/family.png',
    backgroundSelectedImage: '../images/templates/multi-color/family.png',    
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});
win.add(btnArbitraryTwo)

// 3 - Wedding Comment Page
var btnWeddingComment = Titanium.UI.createButton({  
    title:'',  
    top:140,  
    left:225,
    width:60,  
    height:61,
    backgroundImage: '../images/templates/multi-color/comments.png', 
    backgroundSelectedImage: '../images/templates/multi-color/comments.png',
    //backgroundImage: '/main_windows/Home_Icons/photos1.png',  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});
win.add(btnWeddingComment);

var lblWeddingComment = Titanium.UI.createLabel({
	text:'Comments',
	width:'auto',
	height:'auto',
	font:{fontFamily:'Arial',fontSize:14},
	left:225,
	top:205,
	color:'white',
	shadowColor:'#aaa',
	shadowOffset:{x:1,y:1},
	zIndex:99
});
win.add(lblWeddingComment);


//
// Row 3
//
var btnGuestPhotos = Titanium.UI.createButton({  
    title:'',  
    top:235,  
    left:35,
    width:60,  
    height:61,
    backgroundImage: '../images/templates/multi-color/photo.png', 
    backgroundSelectedImage: '../images/templates/multi-color/photo.png', 
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnGuestPhotos);

var lblGuestPhotos = Titanium.UI.createLabel({
	text:'Photos',
	width:'auto',
	height:'auto',
	font:{fontFamily:'Arial',fontSize:14},
	left:40,
	top:300,
	color:'white',
	shadowColor:'#aaa',
	shadowOffset:{x:1,y:1},
	zIndex:99
});
win.add(lblGuestPhotos);

var btnRegistry = Titanium.UI.createButton({  
    title:'',  
    top:235,  
    left:130,
    width:60,  
    height:61,
    backgroundImage: '../images/templates/multi-color/registry.png', 
    backgroundSelectedImage: '../images/templates/multi-color/registry.png', 
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnRegistry);

var lblRegistry = Titanium.UI.createLabel({
	text:'Registry',
	width:'auto',
	height:'auto',
	font:{fontFamily:'Arial',fontSize:14},
	left:135,
	top:300,
	color:'white',
	shadowColor:'#aaa',
	shadowOffset:{x:1,y:1},
	zIndex:99
});
win.add(lblRegistry);

var btnLBS = Titanium.UI.createButton({  
    title:'',  
    top:235,  
    left:225,
    width:60,  
    height:61,
    backgroundImage: '../images/templates/multi-color/location.png',
    backgroundSelectedImage: '../images/templates/multi-color/location.png', 
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnLBS);

var lblLBS = Titanium.UI.createLabel({
	text:'Shop Local',
	width:'auto',
	height:'auto',
	font:{fontFamily:'Arial',fontSize:14},
	left:220,
	top:300,
	color:'white',
	shadowColor:'#aaa',
	shadowOffset:{x:1,y:1},
	zIndex:99
});
win.add(lblLBS);
