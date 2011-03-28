var win = Titanium.UI.currentWindow;
win.setBackgroundImage('../images/background.jpg');

var titlebar_logo = Titanium.UI.createImageView({
        image:'../images/wedvite_logo.png',
        top:160,
        left:72,
        width: 176,
        height:60,
	    borderWidth: 0,
	    borderRadius: 0
});
win.add(titlebar_logo);

var idKey = Titanium.UI.createTextField({  
    color:'#336699',  
    bottom:60,  
    left:10,  
    width:300,  
    height:40,  
    hintText:'ID',
    value: '20',  
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

////////////////////////////////////////////
// Facebook login button
////////////////////////////////////////////

Titanium.Facebook.appid = '197440486945083';
Titanium.Facebook.permissions = ['user_status,publish_stream', 'user_photos', 'friends_photos', 'friends_status', 'user_videos', 'friends_videos', 'read_stream', 'read_friendlists', 'manage_friendlists', 'read_requests']; // Permissions your app needs
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


if( Titanium.Facebook.loggedIn ){
    displayInvitedToWeddingList();
}

function displayInvitedToWeddingList(){
// Displays the list of weddings this user is invited to after logging into facebook

    if( Titanium.Facebook.loggedIn ){    
    
        // Perform Ajax call to get the list this user is invited to
        // Create our HTTP Client
        var loader = Titanium.Network.createHTTPClient();
        
        Ti.API.info( "Invited list URL: " + win.site_url + "data/index/class/InvitedList/method/getFacebookInvitedList/uid/" + Titanium.Facebook.uid );
        
        // Sets the HTTP request method, and the URL to get data from
        loader.open( "GET", win.site_url + "data/index/class/InvitedList/method/getFacebookInvitedList/uid/" + Titanium.Facebook.uid );
        
        
        loader.onload = function() 
        {
            // Display that list in a scroll view
        
            Ti.API.info( "Invited List: " + this.responseText );

            results = eval('('+this.responseText+')');
            
            var scrollView1 = Titanium.UI.createScrollView({
                contentWidth:'auto',
                contentHeight:'auto',
                top:40,
                left:0,
                //width:300,
                height:300,
                borderRadius:0,
                //backgroundColor:'#336699',
                showVerticalScrollIndicator:true,
                showHorizontalScrollIndicator:false
            });
            
            var top_alignment = 10;

            // Loop through and display a button for each wedding this user is invited to
            for( var i = 0; i < results.length; i++ ){
            
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
                
                top_alignment += 40;
            
            }
            
            win.add(scrollView1);
            
        };
        
        // Send the HTTP request
        loader.send();

    }
}

