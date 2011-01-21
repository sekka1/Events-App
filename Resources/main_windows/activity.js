//
//  This view shows raw events that are coming into the iVMS
//

// Create variable "win" to refer to current window
var win = Titanium.UI.currentWindow;

var actInd = Titanium.UI.createActivityIndicator({
    height:50,
    width:10,
    message:'Retrieving Data'
});

// Function loadTweets()
function loadIvmsEvents()
{
    // Show Activity indicator
    actInd.show();

	// Empty array "rowData" for our tableview
	var rowData = [];
    
	// Create our HTTP Client and name it "loader"
	var loader = Titanium.Network.createHTTPClient();

	// Sets the HTTP request method, and the URL to get data from
	loader.open("GET","http://" + win.ip + "/IQBasketList.do?profile=1&start=0&basketType=0&limit=20");
    
	// Runs the function when the data is ready for us to process
	loader.onload = function() 
	{
		var ivms_events = eval('('+this.responseText+')');
        
		for (var i = 0; i < ivms_events.baskets.length; i++)
		{
            // iVMS Vars
            var vms_id = ivms_events.baskets[i].id
            var vms_tat = ivms_events.baskets[i].tat
            var vms_ts = ivms_events.baskets[i].ts
            var vms_pgm = ivms_events.baskets[i].pgm
            var vms_tran = ivms_events.baskets[i].tran
            var vms_msg = ivms_events.baskets[i].msg
            var vms_pat = ivms_events.baskets[i].pat
            
			// Create a row and set its height to auto
			var row = Titanium.UI.createTableViewRow({height:'auto'});

			// Create the view that will contain the text and avatar
			var post_view = Titanium.UI.createView({
				height:'auto', 
				layout:'vertical',
				top:5,
				right:5,
				bottom:5,
				left:5
			});
            
			// Create image view to hold profile pic
			/*var av_image = Titanium.UI.createImageView({
				url:avatar, // the image for the image view
				top:0,
				left:0,
				height:48,
				width:48
			});
			post_view.add(av_image);
            */
            
			// Create the label to hold the screen name
			var event_tran = Titanium.UI.createLabel({
				text:vms_tran,
				left:0,
				width:'auto',
				top:0,
				bottom:0,
				height:'auto',
                width:'auto',
				textAlign:'left',
				color:'#444444',
				font:{fontFamily:'Trebuchet MS',fontSize:14,fontWeight:'bold'}
			});
			post_view.add(event_tran);
            
			// Create the label to hold the tweet message
			var event_ts = Titanium.UI.createLabel({
				text:vms_ts,
				left:0,
				top:0,
				bottom:0,
				height:'auto',
				width:'auto',
				textAlign:'left',
				font:{fontSize:14}
			});
			post_view.add(event_ts);
            
            // Create the label to hold the tweet message
			var event_msg = Titanium.UI.createLabel({
				text:vms_msg,
				left:0,
				top:0,
				bottom:2,
				height:'auto',
				width:'auto',
				textAlign:'left',
				font:{fontSize:14}
			});
			post_view.add(event_msg);
            
            
			// Add the post view to the row
			row.add(post_view);
			// Give each row a class name
			row.className = "item"+i;
			// Add row to the rowData array
			rowData[i] = row;
		}
        
		// Create the table view and set its data source to "rowData" array
		var tableView = Titanium.UI.createTableView({data:rowData});
        
		//Add the table view to the window
		win.add(tableView);
        
        // Hide Activity indicator
        actInd.hide();
	};
    
	// Send the HTTP request
	loader.send();

}

//loginVMS();

loadIvmsEvents();




