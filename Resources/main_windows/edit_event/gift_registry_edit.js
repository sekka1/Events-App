var win = Titanium.UI.currentWindow;  

var nav_bar = Titanium.UI.createImageView({
        image:'../../images/templates/multi-color/nav-bar-blank.png',
        top:0,
        left:0,
        height:40,
        width:480,
	    borderWidth: 0,
	    borderRadius: 0
});
win.add(nav_bar);

//var btnBack = Titanium.UI.createButton({  
var btnBack = Titanium.UI.createButton({  
    title:'',  
    backgroundImage:'../../images/templates/multi-color/back.png',
    top:5,  
    left:2,
    width:35,  
    height:35,
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnBack);

btnBack.addEventListener('click', function()
{
   win.backWindow.open();
   win.close();
});

// Variable to set what onload section todo.  Setting the text field info or saving
var onloadType = 'setting_text_field';

win.arbitrary_page_id_seq = '';

//////////////////////////////////////////////////////////
// Text input fields
//////////////////////////////////////////////////////////

	var labelGiftName = Titanium.UI.createLabel({  
        text:'Name', 
        top:50,  
        left:10,  
        //width:300,
        borderRadius:0,  
        height:'auto'
    });
    win.add(labelGiftName);
    
    var giftName = Titanium.UI.createTextField({  
		color:'#336699',
		value:win.name,
		top:70,  
		left:10,  
		width:300,  
		height:40,  
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
    });  
    win.add(giftName);

	var labelGiftURL = Titanium.UI.createLabel({  
        text:'URL', 
        top:120,  
        left:10,  
        //width:300,
        borderRadius:0,  
        height:'auto'
    });
    win.add(labelGiftURL);
    
    
    var giftURL = Titanium.UI.createTextArea({  
    	//font:{fontFamily:'Arial',fontWeight:'bold',fontSize:10},  
    	value:win.url_link,
        top:140,  
        left:10,  
        height:100,
		width:300,
    	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    	keyboardToolbarColor: '#999',   
    	keyboardToolbarHeight: 40,
    	backgroundColor:'#336699'
	});
	win.add(giftURL);

	// Save Button
	var btnSave = Titanium.UI.createButton({  
		title:'Save',  
		top:380,  
		left:10,
		width:50,  
		height:28,
		borderRadius:1,  
		font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
	}); 
	win.add(btnSave);
	
	// Delete Button
	var btnDelete = Titanium.UI.createButton({  
		title:'Delete',  
		top:380,  
		right:10,
		width:50,  
		height:28,
		borderRadius:1,  
		font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
	}); 
	win.add(btnDelete);
	

//////////////////////////////////////////////////////////
// Displaying Edit Area
//////////////////////////////////////////////////////////

Ti.API.info( "Making ajax call for data to: " + win.site_url + "data/index/class/GetArbitraryInfo/method/getInfo/id/" + win.idKey );

win.loader.onload = function() 
{
	if( onloadType == 'save' ){
		alert( 'Saved' );
		win.backWindow.open();
   		win.close();
    }
	if( onloadType == 'delete' ){
		alert( 'Deleted' );
		win.backWindow.open();
   		win.close();
    }
};

btnSave.addEventListener('click', function(e)
{
	Ti.API.info( "Saving...." );
	
	// Sets the HTTP request method, and the URL to get data from
	win.loader.open( "POST" , win.site_url + "data/index/class/GetGiftRegistry/method/edit" );

	// Post Values
	var params = {  
	    id:win.idKey,
	    gift_id:win.gift_registry_id_seq,
	    user_id:Titanium.Facebook.uid,
	    name:giftName.value,
		url:giftURL.value
	};  
	
	// Changing onloadType so that the onload function does not run
	onloadType = 'save';
	
	// Send the HTTP request
	win.loader.send( params );
	
});

btnDelete.addEventListener('click', function(e)
{
	Ti.API.info( "Deleting..." );
	
	// Sets the HTTP request method, and the URL to get data from
	win.loader.open( "POST" , win.site_url + "data/index/class/GetGiftRegistry/method/delete" );

	// Post Values
	var params = {  
	    id:win.idKey,
	    gift_id:win.gift_registry_id_seq,
	    user_id:Titanium.Facebook.uid
	};  
	
	// Changing onloadType so that the onload function does not run
	onloadType = 'delete';
	
	// Send the HTTP request
	win.loader.send( params );
	
});



