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
    left:20,
    width:82,  
    height:80,
    backgroundImage: '../images/png/Cake.png',
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnEventInfo);

var btnLocation = Titanium.UI.createButton({  
    title:'',  
    top:10,  
    left:130,
    width:82,  
    height:80,
    backgroundImage: '../images/png/Invitation.png', 
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnLocation);

var btnOwnersPhotos = Titanium.UI.createButton({  
    title:'',  
    top:10,  
    left:225,
    width:82,  
    height:80,
    backgroundImage: '../images/png/Champagne.png', 
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnOwnersPhotos);

//
// Row 2 - there are 2 other arbitrary window button in this row
//
var btnMap = Titanium.UI.createButton({  
    title:'',  
    top:105,  
    left:225,
    width:82,  
    height:80,
    backgroundImage: '../images/map-pin.png', 
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnMap);


//
// Row 3
//
var btnOwnersPhotos = Titanium.UI.createButton({  
    title:'',  
    top:200,  
    left:20,
    width:82,  
    height:80,
    backgroundImage: '../images/png/Bouquet.png',
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnOwnersPhotos);

var btnGuestPhotos = Titanium.UI.createButton({  
    title:'',  
    top:200,  
    left:130,
    width:82,  
    height:80,
    backgroundImage: '../images/png/DoubleHappiness.png', 
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnGuestPhotos);