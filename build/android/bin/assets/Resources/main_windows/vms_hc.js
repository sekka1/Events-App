////////////////////////////////////////////////////
// This view shows the program in histor state
////////////////////////////////////////////////////

// Create variable "win" to refer to current window
var win = Titanium.UI.currentWindow;

var actInd = Titanium.UI.createActivityIndicator({
    height:50,
    width:10,
    message:'Retrieving Data'
});

// Show Activity indicator
actInd.show();

    var json_array = eval('('+win.ivms_json+')');

    // iVMS URL for the channel pictures
    var channel_url = "http://" + win.ip + ":" + win.port + "/images/programs/";

	// Empty array "rowData" for our tableview
	var rowData = [];

//////////////////////////////////////////////////////////////////////
// Creating sub menu item - to show what probes are in what state for this channel

var tabGroup_sub_probes = Titanium.UI.createTabGroup();

var sub_win_probes = Titanium.UI.createWindow({  
    title:'Probes',
    url:'main_windows/probes.js'  
});  

var subTabProbes = Titanium.UI.createTab({  
//    title:"Probes1",  
    window:sub_win_probes 
});  

// End of sub menu item

    var alt_counter = 0; // This counter is used for the index b/c we are skipping over certain
                         // spots depending on the state

// Loop through the currentProgramStates array and find programs
// in the state for this view
    for (var i = 0; ( i < json_array.currentProgramStates.length ) && ( i < 29 ); i++)
    {
        // Only show vars that are in good state
        if( json_array.currentProgramStates[i].h > 0 ){
        
            // Vars used for this view
            var vms_pn = json_array.currentProgramStates[i].pn; // Picture URL
            var vms_g = json_array.currentProgramStates[i].h;  // State
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
                text: vms_g + " out of " + vms_i + " are in History state",  
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
			row.className = "item"+alt_counter;
            // Put the program name into the row data so we can pull it out later
            row.vms_pn = vms_pn;
			// Add row to the rowData array
			rowData[alt_counter] = row;
            
            alt_counter++; // Increment this b/c we added to it

        }
        
    } 
    
    // Create the table view and set its data source to "rowData" array
    var tableView = Titanium.UI.createTableView({data:rowData});

tableView.addEventListener('click',function(e)
{
    Ti.API.info("vms_ip: " + win.ip); // works
    Ti.API.info("e.index: " + e.index ); // Get the index number that the user clicked on
    Ti.API.info("program name: " + rowData[e.index].vms_pn ); // program the user clicked on
    
    sub_win_probes.ip = win.ip; // Pass in the vms ip address
    sub_win_probes.port = win.port; // Pass in the vms port
    sub_win_probes.vms_pn = rowData[e.index].vms_pn; // Pass in the vms_pn that the user clicked on
    sub_win_probes.session_name = win.session_name;
    sub_win_probes.session_value = win.session_value;
    subTabProbes.title = rowData[e.index].vms_pn;
    tabGroup_sub_probes.close();
    tabGroup_sub_probes.addTab( subTabProbes );
    tabGroup_sub_probes.open();
});
        
    //Add the table view to the window
    win.add(tableView);
    
// Hide Activity indicator
actInd.hide();
    
    