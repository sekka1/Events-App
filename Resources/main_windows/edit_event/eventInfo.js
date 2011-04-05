var win = Titanium.UI.currentWindow;  

var nav_bar = Titanium.UI.createImageView({
        image:'../../images/navigation/nav-bar-blank.png',
        top:0,
        left:0,
        height:40,
        //width:330,
	    borderWidth: 0,
	    borderRadius: 0
});
win.add(nav_bar);

//var btnBack = Titanium.UI.createButton({  
var btnBack = Titanium.UI.createButton({  
    title:'',  
    backgroundImage:'../../images/navigation/back.png',
    top:5,  
    left:2,
    width:50,  
    height:28,
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnBack);

btnBack.addEventListener('click', function()
{
   Ti.API.info( "Event info back button pressed..." );
   win.backWindow.open();
   win.close();
});

// Variable to set what onload section todo.  Setting the text field info or saving
var onloadType = 'text_field';

//////////////////////////////////////////////////////////
// Text input fields
//////////////////////////////////////////////////////////

	var labelEventName = Titanium.UI.createLabel({  
        text:'Event Name', 
        top:20,  
        left:10,  
        //width:300,
        borderRadius:0,  
        height:'auto'
    });
    
    var eventName = Titanium.UI.createTextField({  
		color:'#336699',  
		top:50,  
		left:10,  
		width:300,  
		height:40,  
		//hintText:'ID',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
    });  

	var labelEventDescription = Titanium.UI.createLabel({  
        text:'Event Description', 
        top:100,  
        left:10,  
        //width:300,
        borderRadius:0,  
        height:'auto'
    });
    
    var eventDescription = Titanium.UI.createTextArea({  
    	//font:{fontFamily:'Arial',fontWeight:'bold',fontSize:10},  
        top:130,  
        left:10,  
        height:70,
		width:300,
        backgroundColor:'white',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
	});
	
	var labelEventHost = Titanium.UI.createLabel({  
        text:'Event Host', 
        top:210,  
        left:10,  
        //width:300,
        borderRadius:0,  
        height:'auto'
    });
    
    var eventHost = Titanium.UI.createTextField({  
		color:'#336699',  
		top:240,  
		left:10,  
		width:300,  
		height:40,  
		//hintText:'ID',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
    });  

	var labelEventPhone = Titanium.UI.createLabel({  
        text:'Event Phone Number', 
        top:290,  
        left:10,  
        //width:300,
        borderRadius:0,  
        height:'auto'
    });
    
    var eventPhone = Titanium.UI.createTextField({  
		color:'#336699',  
		top:320,  
		left:10,  
		width:300,  
		height:40,  
		//hintText:'ID',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
    });  


	var labelEventLocation = Titanium.UI.createLabel({  
        text:'Event Location', 
        top:370,  
        left:10,  
        //width:300,
        borderRadius:0,  
        height:'auto'
    });
    
    var eventLocation = Titanium.UI.createTextField({  
    	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:10},  
        top:400,  
        left:10, 
        height:40,
        width:300,
        backgroundColor:'white',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
    });
    
	var labelEventAddress = Titanium.UI.createLabel({  
        text:'Address', 
        top:450,  
        left:10,  
        //width:300,
        borderRadius:0,  
        height:'auto'
    });
    
    var eventAddress = Titanium.UI.createTextField({  
		color:'#336699',  
		top:480,  
		left:10,  
		width:300,  
		height:40,  
		//hintText:'ID',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
    });  

	var labelEventCity = Titanium.UI.createLabel({  
        text:'City', 
        top:530,  
        left:10,  
        //width:300,
        borderRadius:0,  
        height:'auto'
    });
    
    var eventCity = Titanium.UI.createTextField({  
		color:'#336699',  
		top:560,  
		left:10,  
		width:300,  
		height:40,  
		//hintText:'ID',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
    });  

	var labelEventState = Titanium.UI.createLabel({  
        text:'State', 
        top:610,  
        left:10,  
        //width:300,
        borderRadius:0,  
        height:'auto'
    });
    
    var eventState = Titanium.UI.createTextField({  
		color:'#336699',  
		top:640,  
		left:10,  
		width:300,  
		height:40,  
		//hintText:'ID',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
    });  

	var labelEventZip = Titanium.UI.createLabel({  
        text:'Zip', 
        top:690,  
        left:10,  
        //width:300,
        borderRadius:0,  
        height:'auto'
    });
    
    var eventZip = Titanium.UI.createTextField({  
		color:'#336699',  
		top:720,  
		left:10,  
		width:300,  
		height:40,  
		//hintText:'ID',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
    });  
 
	var labelEventWhen = Titanium.UI.createLabel({  
        text:'Event Date', 
        top:770,  
        left:10,  
        //width:300,
        borderRadius:0,  
        height:'auto'
    });
    
    var eventWhen = Titanium.UI.createTextField({  
    	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:10},  
        top:800,  
        left:10,  
        height:40,
        width:300,
        backgroundColor:'white',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
    });  

	var labelEventTo = Titanium.UI.createLabel({  
        text:'Event End Date', 
        top:850,  
        left:10,  
        //width:300,
        borderRadius:0,  
        height:'auto'
    });
    
    var eventTo = Titanium.UI.createTextField({  
		color:'#336699',  
		top:880,  
		left:10,  
		width:300,  
		height:40,  
		//hintText:'ID',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
    });  
 
	var labelEventMessage = Titanium.UI.createLabel({  
        text:'Event Message', 
        top:930,  
        left:10,  
        //width:300,
        borderRadius:0,  
        height:'auto'
    });
    
    var eventMessage = Titanium.UI.createTextField({  
    	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:10},  
        top:960,  
        left:10,  
        height:40,
        width:300,
        backgroundColor:'white',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
    });  

	// Save Button
	var btnSave = Titanium.UI.createButton({  
		title:'Save',  
		top:1010,  
		left:10,
		width:50,  
		height:28,
		borderRadius:1,  
		font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
	}); 
	
	//var picker = Ti.UI.createPicker({
    //	top:800,
    //	type: Titanium.UI.PICKER_TYPE_DATE_AND_TIME
	//});

//////////////////////////////////////////////////////////
// Displaying Edit Area
//////////////////////////////////////////////////////////

Ti.API.info( "Making ajax call for data to: " + win.site_url + "data/index/class/GetEventInfo/method/getInfo/id/" + win.idKey );

// Sets the HTTP request method, and the URL to get data from
win.loader.open( "GET", win.site_url + "data/index/class/GetEventInfo/method/getInfo/id/" + win.idKey );

win.loader.onload = function() 
{
	if( onloadType == 'text_field' ){
		Ti.API.info( "Event Info: " + this.responseText );
	
		results = eval('('+this.responseText+')');
		
		var scrollView1 = Titanium.UI.createScrollView({
			contentWidth:'auto',
			contentHeight:'auto',
			top:40,
			left:0,
			//width:300,
			//height:600,
			borderRadius:0,
			backgroundColor:'#336699',
			showVerticalScrollIndicator:true,
			showHorizontalScrollIndicator:false
		});
	
		scrollView1.add(labelEventName);
		eventName.value = results[0].name;
		scrollView1.add(eventName);  
		
		scrollView1.add(labelEventDescription);
		eventDescription.value = results[0].description;
		scrollView1.add(eventDescription);
		
		scrollView1.add(labelEventHost);
		eventHost.value = results[0].host;
		scrollView1.add(eventHost);
		
		scrollView1.add(labelEventPhone);
		eventPhone.value = results[0].phone;
		scrollView1.add(eventPhone);
		
		scrollView1.add(labelEventLocation);
		eventLocation.value = results[0].location;
		scrollView1.add(eventLocation); 
		
		scrollView1.add(labelEventAddress);
		eventAddress.value = results[0].address;
		scrollView1.add(eventAddress); 
		
		scrollView1.add(labelEventCity);
		eventCity.value = results[0].city;
		scrollView1.add(eventCity); 
		
		scrollView1.add(labelEventState);
		eventState.value = results[0].state;
		scrollView1.add(eventState); 
		
		scrollView1.add(labelEventZip);
		eventZip.value = results[0].zip;
		scrollView1.add(eventZip); 
		
		scrollView1.add(labelEventWhen);
		eventWhen.value = results[0].when;
		scrollView1.add(eventWhen); 
		
		scrollView1.add(labelEventTo);
		eventTo.value = results[0].to;
		scrollView1.add(eventTo);
		
		scrollView1.add(labelEventMessage);
		eventMessage.value = results[0].message;
		scrollView1.add(eventMessage); 
		
		scrollView1.add(btnSave);
		
		//scrollView1.add(picker);
		
		win.add( scrollView1 );
		
    }
    if( onloadType == 'save' ){
		alert( 'Saved' );
    }
};

btnSave.addEventListener('click', function()
{
	Ti.API.info( "Saving...." );
	
	onloadType = 'save';
	
	// Sets the HTTP request method, and the URL to get data from
	win.loader.open( "POST", win.site_url + "data/index/class/GetEventInfo/method/edit" );

	// Post Values
	var params = {  
	    id:win.idKey,
	    user_id:Titanium.Facebook.uid,
		name:eventName.value,
		description:eventDescription.value,
		host:eventHost.value,
		phone:eventPhone.value,
		location_name:eventLocation.value,
		address:eventAddress.value,
		city:eventCity.value,
		state:eventState.value,
		zip:eventZip.value,
		when:eventWhen.value,
		to:eventTo.value,
		message:eventMessage.value
	};  
	
	// Send the HTTP request
	win.loader.send( params );
});

// Send the HTTP request
win.loader.send();




