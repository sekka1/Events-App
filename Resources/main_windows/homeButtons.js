//
// Buttons on the home screen
// 

Ti.API.info( "homeButtons.js - focus" );

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