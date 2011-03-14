var win = Titanium.UI.currentWindow;
win.setBackgroundImage('../images/background.jpg');

var idKey = Titanium.UI.createTextField({  
    color:'#336699',  
    bottom:60,  
    left:10,  
    width:300,  
    height:40,  
    hintText:'ID',
    value: '14',  
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
});  
win.add(idKey);  
  
var loginBtn = Titanium.UI.createButton({  
    title:'Login',  
    bottom:10,  
    width:90,  
    height:35,  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(loginBtn);  

loginBtn.addEventListener('click',function(e)  
{  
    if ( idKey.value != '' )  
    {  
        win.idKey = idKey.value;
        win.windowHome.idKey = idKey.value;
        win.windowHome.open();
        win.close();
    }  
    else  
    {  
        alert("The ID is required");  
    }  
});  

