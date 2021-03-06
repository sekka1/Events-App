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
    backgroundImage: '../images/templates/'+templateUsed+'/event.png',
    backgroundSelectedImage: '../images/templates/'+templateUsed+'/event_dwn.png',
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnEventInfo);

var lblEventInfo = Titanium.UI.createLabel({
	text:'Invitation',
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
    backgroundImage: '../images/templates/'+templateUsed+'/map.png', 
    backgroundSelectedImage: '../images/templates/'+templateUsed+'/map_dwn.png', 
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

/*  Removing this functionality for now.  It is not fully implemented so for
this first round we will take it out.

var btnRsvp = Titanium.UI.createButton({  
    title:'',  
    top:49,  
    left:225,
    width:60,  
    height:61,
    backgroundImage: '../images/templates/'+templateUsed+'/rsvp.png', 
    backgroundSelectedImage: '../images/templates/'+templateUsed+'/rsvp_dwn.png', 
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnRsvp);

var lblRsvp = Titanium.UI.createLabel({
	text:'RSVP',
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
win.add(lblRsvp);
*/

//
// Row 2 - there are 2 other arbitrary window button in this row
//
//See arbitraryButtons.js 

// There are 2 arbitrary buttons

// 1 - Family
var btnArbitraryTwo = Titanium.UI.createButton({  
    title:'',  
    // Moving lower b/c we moved the Gift Registry Button
    //top:140,  
    top:140,
    left:35,
    width:60,  
    height:62,
    backgroundImage: '../images/templates/'+templateUsed+'/fam.png',
    backgroundSelectedImage: '../images/templates/'+templateUsed+'/fam_dwn.png',    
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});
win.add(btnArbitraryTwo);

var lblFamily = Titanium.UI.createLabel({
	text:'About Us',
	width:'auto',
	height:'auto',
	font:{fontFamily:'Arial',fontSize:14},
	left:135,
	//top:205,
	top:245,
	color:'white',
	shadowColor:'#aaa',
	shadowOffset:{x:1,y:1},
	zIndex:99
});
win.add(lblFamily);

// 2 - About Us
var btnArbitraryOne = Titanium.UI.createButton({  
    title:'',  
    top:180,  
    left:130,
    width:60,  
    height:62,
    backgroundImage: '../images/templates/'+templateUsed+'/us.png',
    backgroundSelectedImage: '../images/templates/'+templateUsed+'/us_dwn.png',  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});
win.add(btnArbitraryOne);

var lblAboutUs = Titanium.UI.createLabel({
	text:'Our Family',
	width:'auto',
	height:'auto',
	font:{fontFamily:'Arial',fontSize:14},
	left:30,
	top:205,
	color:'white',
	shadowColor:'#aaa',
	shadowOffset:{x:1,y:1},
	zIndex:99
});
win.add(lblAboutUs);

// 3 - Wedding Comment Page
var btnWeddingComment = Titanium.UI.createButton({  
    title:'',  
    top:140,  
    left:225,
    width:60,  
    height:61,
    backgroundImage: '../images/templates/'+templateUsed+'/comments.png', 
    backgroundSelectedImage: '../images/templates/'+templateUsed+'/comments_dwn.png',
    //backgroundImage: '/main_windows/Home_Icons/photos1.png',  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});
win.add(btnWeddingComment);

var lblWeddingComment = Titanium.UI.createLabel({
	text:'Wall',
	width:'auto',
	height:'auto',
	font:{fontFamily:'Arial',fontSize:14},
	left:240,
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
    backgroundImage: '../images/templates/'+templateUsed+'/photo.png', 
    backgroundSelectedImage: '../images/templates/'+templateUsed+'/photo_dwn.png', 
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
    // Moving up to the top right corner b/c we took out the RSVP button
    //top:235,  
    //left:130,
    top:49,
    left:225,
    width:60,  
    height:61,
    backgroundImage: '../images/templates/'+templateUsed+'/registry.png', 
    backgroundSelectedImage: '../images/templates/'+templateUsed+'/registry_dwn.png', 
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnRegistry);

var lblRegistry = Titanium.UI.createLabel({
	text:'Registry',
	width:'auto',
	height:'auto',
	font:{fontFamily:'Arial',fontSize:14},
	// Moving up to the top right corner b/c we took out the RSVP button
	//left:135,
	//top:300,
	left:235,
	top:110,
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
    backgroundImage: '../images/templates/'+templateUsed+'/location.png',
    backgroundSelectedImage: '../images/templates/'+templateUsed+'/location_dwn.png', 
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
