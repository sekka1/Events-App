var win = Titanium.UI.currentWindow;  

var nav_bar = Titanium.UI.createImageView({
        image:'../../images/navigation/nav-bar-blank.png',
        top:0,
        left:0,
        //height:40,
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

// create table view
var tableview = Titanium.UI.createTableView({
    top:40
});

// Variable to set what onload section todo.  Setting the text field info or saving
var onloadType = 'getting_invited_list';

// Get a list of users that is invited to this event
var invitedList = '';

win.loader.open( "GET", win.site_url + "data/index/class/InvitedList/method/getAllInvitedUsersToThisEvent/id/" + win.idKey );

win.loader.onload = function() 
{
	if( onloadType == 'getting_invited_list' ){
		invitedList = eval('('+this.responseText+')');
	}
}

// Send the HTTP request
win.loader.send();

Titanium.Facebook.requestWithGraphPath('me/friends', {}, 'GET', function(e) {
    if (e.success) {
        Ti.API.info(e.result);
        
        results = eval('('+e.result+')');
        
        Ti.API.info( results.data.length );
        
        for (var i=0;i<results.data.length;i++){
        	
        	// The left image doesn not work right now.  It is a titanium bug where it wont
        	// show a remote url in the left image.
        	var row = Ti.UI.createTableViewRow({
  				title:results.data[i].name,
  				leftImage:"https://graph.facebook.com/" + results.data[i].id + "/picture"
			});
			
			for(var n=0;n<invitedList.length;n++){
				if( invitedList[n].invited_user_fb_uid == results.data[i].id ){
					row.hasCheck = true;
				}
			}
			
			row.id = results.data[i].id;
			
			row.addEventListener('click', function(e)
			{
			   
			   if( e.row.hasCheck == true ){
			   		
			   		onloadType = "check";
			   	
			   		win.loader.open( "GET", win.site_url + "data/index/class/Facebook/method/unInviteOneUser/new_fb_id/"+e.source.id+"/event_id/" + win.idKey );

					win.loader.send();
					
			   		e.row.hasCheck = false;
			   		
			   } else {
			   
			   		onloadType = "check";
			   	
			   		win.loader.open( "GET", win.site_url + "data/index/class/Facebook/method/inviteOneUser/new_fb_id/"+e.source.id+"/user_id/"+Titanium.Facebook.uid+"/event_id/" + win.idKey );

					win.loader.send();
					
			   		e.row.hasCheck = true;
			   }

			});
			
			tableview.appendRow( row );
        }
        
        win.add(tableview);
        
    } else if (e.error) {
        alert(e.error);
    } else {
        alert('Unknown response');
    }
});





