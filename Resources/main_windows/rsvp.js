var win = Titanium.UI.currentWindow;  

var nav_bar = Titanium.UI.createImageView({
        image:'../images/templates/multi-color/nav-bar-blank.png',
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
    backgroundImage:'../images/templates/multi-color/back.png',
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
   win.windowHome.open();
   win.close();
});

// Variable to set what onload section todo.  Setting the text field info or saving
var onloadType = 'setting_text_field';

//////////////////////////////////////////////////////////
// Text input fields
//////////////////////////////////////////////////////////

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

    var label_rsvp_response = Titanium.UI.createLabel({  
        text:'RSVP Response', 
        top:10,  
        left:10,  
        //width:300,
        borderRadius:0,  
        height:'auto'
    });  

	var rsvp_response = Titanium.UI.createButton({  
		title:'Yes',  
		//backgroundImage:'../images/navigation/back.png',
		top:10,  
		left:200,
		width:35,  
		height:35,
		borderRadius:1,  
		font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
	});  
	
    var label_guest_count = Titanium.UI.createLabel({  
        text:'Number of Guests', 
        top:100,  
        left:10,  
        //width:300,
        borderRadius:0,  
        height:'auto'
    });  

    var guest_count = Titanium.UI.createTextField({  
        top:100,  
        left:200,  
        height:40,
		width:50,
        backgroundColor:'white',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
	});

    var label_message = Titanium.UI.createLabel({  
        text:'Message to the Couple', 
        top:200,  
        left:10,  
        borderRadius:0,  
        height:'auto'
    });  
    
    var message = Titanium.UI.createTextArea({  
		color:'#336699',  
		top:240,  
		left:10,  
		width:300,  
		height:70,  
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
    });

	// Save Button
	var btnSave = Titanium.UI.createButton({  
		title:'Save',  
		top:340,  
		left:10,
		width:50,  
		height:28,
		borderRadius:1,  
		font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
	}); 

	// Post to Facebook button
	var btnPostToFacebook = Titanium.UI.createButton({  
		title:'Post to Facebook',  
		top:340,  
		right:10,
		width:140,  
		height:28,
		borderRadius:1,  
		font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
	}); 
	

//////////////////////////////////////////////////////////
// Displaying Edit Area
//////////////////////////////////////////////////////////

function showPage(){

	Ti.API.info( "Making ajax call for data to: " + win.site_url + "data/index/class/Rsvp/method/getone/id/" + win.idKey + "/guest_id/" + Titanium.Facebook.uid );
	
	// Sets the HTTP request method, and the URL to get data from
	win.loader.open( "GET", win.site_url + "data/index/class/Rsvp/method/getone/id/" + win.idKey + "/guest_id/" + Titanium.Facebook.uid );
	
	win.loader.onload = function() 
	{
		if( Titanium.Facebook.loggedIn ){
	
			if( onloadType == 'setting_text_field' ){
			
				Ti.API.info( "Response: " + this.responseText );
			
				if( results != '' ){
				// User has been invited to this event.  Show the RSVP input fields
				
					results = eval('('+this.responseText+')');
					
					scrollView1.add(label_rsvp_response);
					scrollView1.add(rsvp_response);
					scrollView1.add(label_guest_count);
					scrollView1.add(guest_count);
					scrollView1.add(label_message);
					scrollView1.add(message);
			
					scrollView1.add(btnSave);
					
					rsvp_response.title = results[0].response;
					guest_count.value = results[0].guests;
					message.value = results[0].message;
					
					// Pass rsvp_id_seq to the save button
					btnSave.rsvp_id = results[0].rsvp_id_seq;
					
					if( Titanium.Facebook.loggedIn ){
					
						scrollView1.add( btnPostToFacebook );
					}
			
					win.add( scrollView1 );
				}
				if( results == '' ){
				// User has not been invited to this event.  Show the repost to facebook only
				
					win.add( scrollView1 );
				}
		
			}
			if( onloadType == 'save' ){
				alert( 'Saved' );
			}
		} else {
		// User is not logged into Facebook
		
			var label_login_to_facebook = Titanium.UI.createLabel({  
				text:'Login to Facebook and Post this Wedding to your Wall!', 
				top:100,  
				left:10,  
				//width:300,
				borderRadius:0,  
				height:'auto'
			});  
			scrollView1.add( label_login_to_facebook );			
		
			// Show the facebook login button
			Titanium.Facebook.appid = '197440486945083';
			Titanium.Facebook.permissions = ['user_status,publish_stream', 'user_photos', 'friends_photos', 'friends_status', 'user_videos', 'friends_videos', 'read_stream', 'read_friendlists', 'manage_friendlists', 'read_requests']; // Permissions your app needs
			Titanium.Facebook.addEventListener('login', function(e) {
				if (e.success) {
					Ti.API.info( 'Logged In as: ' + Titanium.Facebook.uid );
					showPage();
				} else if (e.error) {
					alert(e.error);
				} else if (e.cancelled) {
					Ti.API.info( 'Cancelled Facebook Login' );
				}
			});
			
			Titanium.Facebook.addEventListener('logout', function(e) {
				Titanium.API.log("User logged out.");
			});
			
			scrollView1.add(Titanium.Facebook.createLoginButton({ top: 325, 'style': 'wide' }));
			
			win.add( scrollView1 );
		
		}
	};
	
	// Send the HTTP request
	win.loader.send();

}

////////////////////////////////////
// Buttons Event Listeners
////////////////////////////////////

rsvp_response.addEventListener('click', function(e)
{
	if( rsvp_response.title == 'yes' ){
		rsvp_response.title = 'no';
	} else {
		rsvp_response.title = 'yes';
	}

});

btnSave.addEventListener('click', function(e)
{
	Ti.API.info( "Saving...." );
	
	// Sets the HTTP request method, and the URL to get data from
	win.loader.open( "POST" , win.site_url + "data/index/class/Rsvp/method/edit" );
	Titanium.API.info( "POST " + win.site_url + "data/index/class/Rsvp/method/edit" );
	
	// Post Values
	var params = {  
	    id:win.idKey,
	    guest_id:Titanium.Facebook.uid,
	    rsvp_id:e.source.rsvp_id,
		response:rsvp_response.title,
		guests:guest_count.value,
		message:message.value
	};  
	
	// Changing onloadType so that the onload function does not run
	onloadType = 'save';
	
	// Send the HTTP request
	win.loader.send( params );
	
});

btnPostToFacebook.addEventListener('click', function(e)
{
	Ti.API.info( "Post to Facebook" );
	
	var windowPostToFacebook = Titanium.UI.createWindow({
		title:'Post To Facebok',
		url:'postToFacebook.js',
		backgroundColor:'white'
	});
	
	//window variables 
	windowPostToFacebook.backWindow = win;
	
	windowPostToFacebook.open();
});

////////////////////////////////////
// Windows Focus
////////////////////////////////////
win.addEventListener('focus',function(e)  
{  
	showPage();
});  


