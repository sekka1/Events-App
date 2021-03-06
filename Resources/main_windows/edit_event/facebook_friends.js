var win = Titanium.UI.currentWindow;  
win.setBackgroundImage('../../images/background.jpg');

var nav_bar = Titanium.UI.createImageView({
        image:'../../images/templates/1/nav-bar-blank.png',
        top:0,
        left:0,
        height:40,
        //width:480,
	    borderWidth: 0,
	    borderRadius: 0
});
win.add(nav_bar);

//var btnBack = Titanium.UI.createButton({  
var btnBack = Titanium.UI.createButton({  
    title:'',  
    backgroundImage:'../../images/templates/1/back.png',
    backgroundSelectedImage: '../../images/templates/1/back_over.png',
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
   Ti.API.info( "Event info back button pressed..." );
   win.backWindow.open();
   win.close();
});

var titleName = Titanium.UI.createLabel({  
        text:'Facebook Invite',  
        top:10,  
        left:125,  
        borderRadius:0,  
        height:'auto',
        color:'white'
}); 
win.add(titleName);

// Create Activity Indicator object
var actInd = Titanium.UI.createActivityIndicator({
	top:50,
	right:150,
	height:50,
	width:10,
	font:{fontFamily:'Helvetica Neue', fontSize:20,fontWeight:'bold'},
	color: 'white',
	message:'Loading...'
});

// Search bar on top of the table view
var search = Titanium.UI.createSearchBar({
	showCancel:false
});

// create table view
var tableview = Titanium.UI.createTableView({
    top:40,
    search:search,
    filterAttribute:'title'
});

// Variable to set what onload section todo.  Setting the text field info or saving
var onloadType = 'getting_invited_list';

// Get a list of users that is invited to this event
var invitedList = '';

// Event Info results
var event_info_results = '';

// Create our HTTP Client
var loader = Titanium.Network.createHTTPClient();

loader.open( "GET", win.site_url + "data/index/class/InvitedList/method/getAllInvitedUsersToThisEvent/id/" + win.idKey );

loader.onload = function() 
{
	if( onloadType == 'getting_invited_list' ){
	
		invitedList = eval('('+this.responseText+')');
		
		onloadType = 'getting_event_info_data';
		
		// Need to get this data so we can get the Event Info Name for posting to the user's FB Status page
		loader.open( "GET", win.site_url + "data/index/class/GetEventInfo/method/getInfo/id/" + win.idKey );
		
		loader.send();
	}
	if( onloadType == 'getting_event_info_data' ){
	
		event_info_results = eval('('+this.responseText+')');
	
		//alert('got event_info data: ' + event_info_results[0].name );
		//alert('app_url: ' + event_info_results[1].app_url );
		
	}
};

// Send the HTTP request
loader.send();

win.add(actInd);
actInd.show();

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

			tableview.appendRow( row );
        }
        
        win.add(tableview);
        actInd.hide();
        
    } else if (e.error) {
        alert(e.error);
    } else {
        alert('Unknown response');
    }
});


tableview.addEventListener('click', function(e){

	//alert( 'in tableview click event listener' + e.row.id );
	
	if( e.row.hasCheck == true ){
	// Un-inviting the user

		onloadType = "check";
	
		loader.open( "GET", win.site_url + "data/index/class/Facebook/method/unInviteOneUser/new_fb_id/"+e.source.id+"/event_id/" + win.idKey );
	
		loader.send();
		
		e.row.hasCheck = false;
		
	} else {
	// Inviting the user

		onloadType = "check";
	
		loader.open( "GET", win.site_url + "data/index/class/Facebook/method/inviteOneUser/new_fb_id/"+e.source.id+"/user_id/"+Titanium.Facebook.uid+"/event_id/" + win.idKey );
	
		loader.send();
		
		e.row.hasCheck = true;
		
		// Now create the status message after you've confirmed that authorize() succeeded
		Titanium.Facebook.requestWithGraphPath(e.source.id+'/feed', {message: event_info_results[0].name + " has invited you to their WedVite mobile wedding app.  Go here " + event_info_results[1].app_url +" to download it and either login with Facebook or use their wedding id " + win.idKey + " to view their wedding"}, "POST", function(e) {
			if (e.success) {
				//alert("Success!  From FB: " + e.result);
			} else {
				if (e.error) {
					//alert(e.error);
				} else {
					//alert("Unkown result");
				}
			}
		});
							
		
	}
});


