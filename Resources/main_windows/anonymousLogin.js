var win = Titanium.UI.currentWindow;
win.setBackgroundImage('../images/background.jpg');

// Pin orientation
win.orientationModes = [Titanium.UI.PORTRAIT];

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

var titleName = Titanium.UI.createLabel({  
        text:'Goto A Wedding',  
        top:10,  
        left:125,  
        borderRadius:0,  
        height:'auto',
        color:'white'
}); 
win.add(titleName);

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
   win.windowLogin.open();
   win.close();
});





var labelDescription = Titanium.UI.createLabel({  
	text:'You can enter a wedding ID below that someone has given to you or enter the number 27 in the text field below to goto a demo wedding that we have setup to show you what the app can do.',  
	font:{fontFamily:'Arial',fontSize:20},  
	top:55,  
	left:10,
	//borderColor:'black',
	//backgroundColor:'white',
	//borderWidth:1,
	//borderRadius:4,
	height:'auto'
});
win.add( labelDescription );


var textFieldEventID = Titanium.UI.createTextField({  
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:20},  
	top:205,  
	left:10,  
	height:40,
	width:245,
	backgroundColor:'white',
	hintText:'Wedding ID',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
});  
win.add( textFieldEventID );




var loginBtn = Titanium.UI.createButton({  
    title:'Go',  
    top:205,  
    width:50,
    right:10,
    height:40,  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(loginBtn);  

loginBtn.addEventListener('click',function(e)  
{  
	textFieldEventID.blur()
	win.win_idKey = textFieldEventID.value;
	//win.windowHome.anonymousLogin = true;
	//win.windowHome.backWindow = win;
    win.windowHome.idKey = textFieldEventID.value;
    win.windowHome.open();
    win.close();

});  














