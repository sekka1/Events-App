var win = Titanium.UI.currentWindow;  

var actInd = Titanium.UI.createActivityIndicator({
    height:50,
    width:10,
    message:'Logging In'
});

var idKey = Titanium.UI.createTextField({  
    color:'#336699',  
    top:10,  
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
    top:60,  
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
        // Show Activity indicator
        //actInd.show();
        
        Ti.App.fireEvent('grantEntrance', {  
            idKey:idKey.value
        });           
    }  
    else  
    {  
        alert("The ID is required");  
    }  
});  
