////////////////////////////////////////////////////
// This view shows the program in good state
////////////////////////////////////////////////////

// Create variable "win" to refer to current window
var win = Titanium.UI.currentWindow;

    var json_array = eval('('+win.ivms_json+')');

    // iVMS URL for the channel pictures
    var channel_url = "http://" + win.ip + ":" + win.port + "/images/programs/";

	// Empty array "rowData" for our tableview
	var rowData = [];

// Loop through the currentProgramStates array and find programs
// in the state for this view
    for (var i = 0; ( i < json_array.currentProgramStates.length ) && ( i < 29 ); i++)
    {
        // Only show vars that are in good state
        if( json_array.currentProgramStates[i].g > 0 ){
        
            // Vars used for this view
            
            var vms_pn = json_array.currentProgramStates[i].pn; // Program Name
            var vms_g = json_array.currentProgramStates[i].g;  // State
            var vms_i = json_array.currentProgramStates[i].i;  // Total instances
            
            var vms_gif = '/main_windows/ch_icon.png';
            
            // Doing it this way b/c 'in' is a keyword - This is the image name
            // This value dont show up if there are no image assign to it..blah
            if( json_array.currentProgramStates[i]['in'] != undefined ){
                    vms_gif = channel_url + json_array.currentProgramStates[i]['in'];
            }
            
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
			var av_image = Titanium.UI.createImageView({
				image:vms_gif, // the image for the image view
				top:0,
				left:0,
				height:48,
				width:48
			});
			post_view.add(av_image);
            
            var label_program_name = Titanium.UI.createLabel({  
                text:vms_pn,  
                left:54,  
                width:120,  
                top:-48,  
                bottom:2,  
                height:16,  
                textAlign:'left',
                color:'#444444',  
                font:{  
                    fontFamily:'Trebuchet MS',fontSize:14,fontWeight:'bold'  
                }  
            });  
            post_view.add(label_program_name);
  
            // Create the label to hold the tweet message  
            var label_count_info = Titanium.UI.createLabel({  
                text: vms_g + " out of " + vms_i + " are in Good state",  
                left: 54,  
                top: 0,  
                bottom: 2,  
                height: 'auto',  
                width: 236,  
                textAlign: 'left',  
                font:{ fontSize:14 }  
            });  
            post_view.add(label_count_info);  
            
            
            // Add the post view to the row
			row.add(post_view);
			// Give each row a class name
			row.className = "item"+i;
			// Add row to the rowData array
			rowData[i] = row;
        }
        
    } 
    
    // Create the table view and set its data source to "rowData" array
    var tableView = Titanium.UI.createTableView({data:rowData});
        
    //Add the table view to the window
    win.add(tableView);
    