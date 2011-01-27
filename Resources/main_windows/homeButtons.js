//
// Buttons on the home screen
// 

Ti.API.info( "homeButtons.js win.addEventListener - focus" );

var btnEventInfo = Titanium.UI.createButton({  
    title:'',  
    top:10,  
    left:20,
    width:82,  
    height:80,
    backgroundImage: 'Home_Icons/event1.png',
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
    backgroundImage: 'Home_Icons/maps1.png',
    //backgroundImage: '/main_windows/Home_Icons/maps1.png',  
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
    backgroundImage: 'Home_Icons/photos1.png',
    //backgroundImage: '/main_windows/Home_Icons/photos1.png',  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnOwnersPhotos);

