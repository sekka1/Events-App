//
// This view shows the channel list of the aggregate count of
// what state all channels are in
//

// Create variable "win" to refer to current window
var win = Titanium.UI.currentWindow;


function loadIvmsAvailability()
{
	// Empty array "rowData" for our tableview
	var rowData = [];
    
	// Create our HTTP Client and name it "loader"
	var loader = Titanium.Network.createHTTPClient();

	// Sets the HTTP request method, and the URL to get data from
	loader.open("GET","http://" + win.ip + ":" + win.port + "/IQVMSWebApp/state/getProgramAggregateStateUpdates.action");

    // Session Cookies should be sent back in this format
    loader.setRequestHeader( "Cookie", win.session_name + "=" + win.session_value );
    
	// Runs the function when the data is ready for us to process
	loader.onload = function() 
	{
		var ivms_events = eval('('+this.responseText+')');
        
        var vms_ec = ivms_events.counts.ec;
        var vms_gc = ivms_events.counts.gc;
        var vms_hc = ivms_events.counts.hc;
        var vms_oc = ivms_events.counts.oc;
        var vms_pc = ivms_events.counts.pc;
        var vms_wc = ivms_events.counts.wc;
        
        // Loop around and place the above 6 values into one row each.  With different colors
        // representing their states
        for( var i = 0; i < 6; i++ ){
            
            var background_color = '';
            var text_label = '';
            var text_value = '';
            
            if( i == 0 ){ background_color='#00FFFF'; text_label='Total'; text_value=vms_pc; }
            if( i == 1 ){ background_color='#00FF00'; text_label='Good'; text_value=vms_gc; }
            if( i == 2 ){ background_color='#000000'; text_label='Outage'; text_value=vms_oc; }
            if( i == 3 ){ background_color='#FF0000'; text_label='Error'; text_value=vms_ec; }
            if( i == 4 ){ background_color='#F88017'; text_label='Warning'; text_value=vms_wc; }
            if( i == 5 ){ background_color='#EAC117'; text_label='History'; text_value=vms_hc; }

            // Create a row and set its height to auto
            var row = Titanium.UI.createTableViewRow({height:'auto'});
        
            // Create the view that will contain the text and avatar
			var post_view = Titanium.UI.createView({
				height:'auto', 
				layout:'vertical',
				top:5,
				right:5,
				bottom:5,
				left:5,
                backgroundColor: background_color
			});
          
            // Create the label to hold the screen name
			var event_post = Titanium.UI.createLabel({
				text: text_label + ": " + text_value,
				left:0,
				width:'auto',
				top:0,
				bottom:0,
				height:'auto',
                width:'auto',
				textAlign:'left',
				color:'#444444',
                //backgroundColor: '#FF0000',
				font:{fontFamily:'Trebuchet MS',fontSize:14,fontWeight:'bold'}
			});
            
			post_view.add(event_post);
            
            // Add the post view to the row
			row.add(post_view);
            
			// Give each row a class name
			row.className = "item" + i;
            
            // Add the right arrow to this row
            row.hasChild='true';
            
            // THis dont seem to do anything when clicked?!?!
            row.addEventListener('click',function(e){
                alert( "hi from: " + text_label );
                
                var newwin = Titanium.UI.createWindow();
                
                Titanium.UI.currentTab.open(newwin,{animated:true});
            });
            
            // Debug info
            //Titanium.API.info(e.rowData);
            
			// Add row to the rowData array
			rowData[i] = row;
            
        //}
            
        // Create the table view and set its data source to "rowData" array
		var tableView = Titanium.UI.createTableView({data:rowData});
        
		//Add the table view to the window
		win.add(tableView);

	};
    
	// Send the HTTP request
	loader.send();
}

//loginVMS();

loadIvmsAvailability();




