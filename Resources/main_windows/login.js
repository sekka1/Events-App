var win = Titanium.UI.currentWindow;
win.setBackgroundImage('../images/background.jpg');

// Pin orientation
win.orientationModes = [Titanium.UI.PORTRAIT];

var titlebar_logo = Titanium.UI.createImageView({
        image:'../images/wedvite_logo.png',
        top:0,
        left:72,
        width: 176,
        height:60,
	    borderWidth: 0,
	    borderRadius: 0
});
win.add(titlebar_logo);

var labelOr = Titanium.UI.createLabel({  
	text:'Or enter a Wedding ID to view it', 
	bottom:85,  
	left:40,
	height:35,
	color:'white',
	borderRadius:0,  
	height:'auto'
});
win.add(labelOr);

var idKey = Titanium.UI.createTextField({  
    color:'#336699',  
    bottom:40,  
    left:10,  
    width:250,  
    height:40,  
    hintText:'Wedding ID or 27 for Demo',
    //value: '27',  
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
});  
win.add(idKey);
  
var loginBtn = Titanium.UI.createButton({  
    title:'Go',  
    bottom:40,  
    width:40,
    right:10,
    height:40,  
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
        var alertDialog = Titanium.UI.createAlertDialog({
				title: '',
				message: 'A Wedding ID is required or login via Facebook',
				buttonNames: ['OK']
			});
			alertDialog.show();
    }  
});  

// ScrollView for the list of events this user is invited to
var scrollView1 = Titanium.UI.createScrollView({
	contentWidth:'auto',
	contentHeight:'auto',
	top:40,
	left:0,
	//width:300,
	height:250,
	borderRadius:0,
	//backgroundColor:'#336699',
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:false
});



function displayInvitedToWeddingList(){
// Displays the list of weddings this user is invited to after logging into facebook

    if( Titanium.Facebook.loggedIn ){
    
        // Perform Ajax call to get the list this user is invited to
        // Create our HTTP Client
        
        Ti.API.info( "Titanium.Facebook.accessToken: " + Titanium.Facebook.accessToken );
        Ti.API.info( "Titanium.Facebook.expirationDate: " + Titanium.Facebook.expirationDate );
        Ti.API.info( "Titanium.Facebook: " + Titanium.Facebook );
        Ti.API.info( "Invited list URL: " + win.site_url + "data/index/class/InvitedList/method/getLoginEventList/uid/" + Titanium.Facebook.uid );
        
        // Sets the HTTP request method, and the URL to get data from
        win.loader.open( "GET", win.site_url + "data/index/class/InvitedList/method/getLoginEventList/uid/" + Titanium.Facebook.uid );
        
        
        win.loader.onload = function() 
        {
            // Display that list in a scroll view
        
            Ti.API.info( "Invited List: " + this.responseText );

            results = eval('('+this.responseText+')');
            
            var top_alignment = 10;
            
            // Display button to create a new wedding
            var createNewWedding = Titanium.UI.createButton({  
                    title:'Create New Wedding',  
                    top:top_alignment,  
                    width:180,  
                    height:35,  
                    borderRadius:1,  
                    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
            });  
            scrollView1.add(createNewWedding);
            
            createNewWedding.addEventListener('click',function(e)  
            {  
                var windowCreateEvent = Titanium.UI.createWindow({
					title:'Create Event',
					url:'createEvent.js'
				});
           
				windowCreateEvent.site_url = win.site_url;
				windowCreateEvent.backWindow = win;
				windowCreateEvent.loader = win.loader;
				
				windowCreateEvent.open();
            }); 
            
            top_alignment += 40;

            // Loop through and display a button for each wedding this user is invited to
            for( var i = 0; i < results.length; i++ ){
            
            	// Create button that user can click and goto the event
                var event = Titanium.UI.createButton({  
                    title:results[i].name,  
                    top:top_alignment,  
                    width:180,  
                    height:35,  
                    borderRadius:1,  
                    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
                });  
                scrollView1.add(event);
                
                event.event_name = results[i].name;
                event.idKey = results[i].event_id_seq;
                
                event.addEventListener('click',function(e)  
                {  
                
                    Ti.API.info( "event listener: " + e.source.idKey );
                
                    if ( e.source.idKey != '' )  
                    {  
                        win.idKey = e.source.idKey;
                        win.windowHome.idKey = e.source.idKey;
                        win.windowHome.open();
                        win.close();
                    }  

                }); 
                
                // Create edit button if the user owns this event
                if( results[i].user_id_seq == Titanium.Facebook.uid ){
                
                	var event_edit = Titanium.UI.createButton({  
						title:'Edit',  
						top:top_alignment,  
						left:260,
						width:50,  
						height:35,  
						borderRadius:1,  
						font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
                	});  
                	scrollView1.add(event_edit);
                	
                	event_edit.event_name = results[i].name;
					event_edit.idKey = results[i].event_id_seq;
					
					event_edit.addEventListener('click',function(e)  
					{  
					
						Ti.API.info( "event listener: " + e.source.idKey );

						if ( e.source.idKey != '' )  
						{  
							// Create the window here that will show options to edit this event
							var windowEditEvent = Titanium.UI.createWindow({
								title:'Edit Event',
								//Android seems to want this path
								//url:'main_windows/edit_event/main.js'
								url:'edit_event/main.js'
								
							});

							windowEditEvent.idKey = e.source.idKey;
							windowEditEvent.site_url = win.site_url;
							windowEditEvent.backWindow = win;
							windowEditEvent.loader = win.loader;
							windowEditEvent.open();
							
							//win.close();
						}  
	
					});
                	
                }
                
                top_alignment += 40;
            
            }
            
            win.add(scrollView1);
            
        };
        
        // Send the HTTP request
        win.loader.send();

    }
}

////////////////////////////////////////////
// Facebook login button
////////////////////////////////////////////

Titanium.Facebook.appid = '197440486945083';
Titanium.Facebook.permissions = ['user_status' ,'publish_stream', 'user_photos', 'friends_photos', 'friends_status', 'user_videos', 'friends_videos', 'read_stream', 'read_friendlists', 'manage_friendlists', 'read_requests']; // Permissions your app needs
//Titanium.Facebook.authorize(); // If this is uncommented the facebook login would automatically pop up
Titanium.Facebook.addEventListener('login', function(e) {
    if (e.success) {
        Ti.API.info( 'Logged In as: ' + Titanium.Facebook.uid );
        displayInvitedToWeddingList();
    } else if (e.error) {
        alert(e.error);
    } else if (e.cancelled) {
        Ti.API.info( 'Cancelled Facebook Login' );
    }
});

Titanium.Facebook.addEventListener('logout', function(e) {
    Titanium.API.log("User logged out.");
});

win.add(Titanium.Facebook.createLoginButton({ top: 325, 'style': 'wide' }));

////////////////////////////////////////////
// Facebook login button End
////////////////////////////////////////////



// Display the wedding list options if the user is logged into facebook
win.addEventListener('focus',function(e)  
{  
    if( Titanium.Facebook.loggedIn ){
    	displayInvitedToWeddingList();
	}
});  
