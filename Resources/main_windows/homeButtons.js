//
// Buttons on the home screen
// 

Ti.API.info( "homeButtons.js - focus" );


var nav_bar = Titanium.UI.createImageView({
        image:'../images/navigation/nav-bar-3.png',
        top:0,
        left:0,
        height:39,
        //width:330,
	    borderColor: "#3F5696",
            borderWidth: 1,
            borderRadius: 0
});
win.add(nav_bar);

//
// Row 1
//
var btnEventInfo = Titanium.UI.createButton({  
    title:'',  
    top:49,  
    left:35,
    width:60,  
    height:61,
    backgroundImage: '../images/png/event_info_new_small.png',
    backgroundSelectedImage: '../images/png/event_info_new_small_down.png',
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
    backgroundImage: '../images/png/map_new_small.png', 
    backgroundSelectedImage: '../images/png/map_new_small_down.png', 
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
	font:{fontFamily:'Courier',fontSize:14},
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

// 1 - Family

// 2 - About Us

// 3 - Wedding Comment Page
var btnWeddingComment = Titanium.UI.createButton({  
    title:'',  
    top:140,  
    left:225,
    width:60,  
    height:62,
    backgroundImage: '../images/png/comment.png', 
    //backgroundImage: '/main_windows/Home_Icons/photos1.png',  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});
win.add(btnWeddingComment);

var lblWeddingComment = Titanium.UI.createLabel({
	text:'Comments',
	width:'auto',
	height:'auto',
	font:{fontFamily:'Courier',fontSize:14},
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
    backgroundImage: '../images/png/photos_new_small.png', 
    backgroundSelectedImage: '../images/png/photos_new_small_down.png', 
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
    backgroundImage: '../images/png/registry_new.png', 
    backgroundSelectedImage: '../images/png/registry_new_down.png', 
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
    left:235,
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
	top:300,
	color:'white',
	shadowColor:'#aaa',
	shadowOffset:{x:1,y:1},
	zIndex:99
});
win.add(lblLBS);
