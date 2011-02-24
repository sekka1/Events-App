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

var btnMap = Titanium.UI.createButton({  
    title:'',  
    top:10,  
    left:130,
    width:82,  
    height:80,
    backgroundImage: '../images/map-pin.png', 
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnMap);

var btnOwnersPhotos = Titanium.UI.createButton({  
    title:'',  
    top:10,  
    left:225,
    width:82,  
    height:80,
    backgroundImage: '../images/png/Bouquet.png',
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnOwnersPhotos);


//
// Row 2 - there are 2 other arbitrary window button in this row
//



//
// Row 3
//
var btnGuestPhotos = Titanium.UI.createButton({  
    title:'',  
    top:200,  
    left:20,
    width:82,  
    height:80,
    backgroundImage: '../images/png/DoubleHappiness.png', 
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnGuestPhotos);

var btnRegistry = Titanium.UI.createButton({  
    title:'',  
    top:200,  
    left:130,
    width:82,  
    height:80,
    backgroundImage: '../images/png/Invitation.png', 
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnRegistry);

var btnLBS = Titanium.UI.createButton({  
    title:'',  
    top:200,  
    left:225,
    width:82,  
    height:80,
    backgroundImage: '../images/png/Champagne.png',
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnLBS);