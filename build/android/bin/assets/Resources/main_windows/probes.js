var win = Titanium.UI.currentWindow;  

var actInd = Titanium.UI.createActivityIndicator({
    height:50,
    width:10,
    message:'Retrieving Data'
});

//
//
// Load function to go get the current data        
function loadAllProgramInstancesWithState()
{

    // Show Activity indicator
    actInd.show();
    
	// Empty array "rowData" for our tableview
	var rowData = [];
    
	// Create our HTTP Client and name it "loader"
	var loader = Titanium.Network.createHTTPClient();

	// Sets the HTTP request method, and the URL to get data from
	loader.open("GET","http://" + win.ip + ":" + win.port + "/IQVMSWebApp/state/getAllProgramInstancesWithState.action?programName=" + win.vms_pn );
    
    Ti.API.info( "Cookie " + win.session_name + "=" + win.session_value );

    // Session Cookies should be sent back in this format
    loader.setRequestHeader( "Cookie", win.session_name + "=" + win.session_value );

    // Runs the function when the data is ready for us to process
	loader.onload = function() 
	{
    
        //Ti.API.info( this.responseText );
    
        // JSON repsonse from the http request
		ivms_json = eval('('+this.responseText+')');
        
        Ti.API.info( "ivms_json.length: " + ivms_json.programInstances.length );
        
        for( var i=0; i < ivms_json.programInstances.length; i++ ){
        
            var probe_name = ivms_json.programInstances[i].pbnm;
            var probe_state = ivms_json.programInstances[i].flst; // state of what this probe is in
            var flow_name = ivms_json.programInstances[i].flnm;
            var flow_tuple = ivms_json.programInstances[i].tds;
            
            var background_color = '#CC00FF';
            
            if( probe_state == 1 ){ background_color = '#00FF00'; } // Good - Green
            if( probe_state == 2 ){ background_color = '#FF0000'; } // Error - Red
            if( probe_state == 3 ){ background_color = '#F88017'; } // Histor - Yellow
            if( probe_state == 4 ){ background_color = '#000000'; } // Outage - Black????
            if( probe_state == 5 ){ background_color = '#EAC117'; } // Histor - Orange????
            
            // Create a row and set its height to auto
			var row = Titanium.UI.createTableViewRow({height:'auto',backgroundColor:background_color});
            
            // Create the view that will contain the text and avatar
			var post_view = Titanium.UI.createView({
				height:'auto', 
				layout:'vertical',
				top:5,
				right:5,
				bottom:5,
				left:5
			});
            
            var label_probe_name = Titanium.UI.createLabel({  
                text:"Probe: " + probe_name,  
                left:0,  
                width:'auto',  
                top:0,  
                bottom:2,  
                height:'auto',  
                textAlign:'left',
                color:'#444444',  
                font:{  
                    fontFamily:'Trebuchet MS',fontSize:14,fontWeight:'bold'  
                }  
            });  
            post_view.add(label_probe_name);
            
            var label_flow_name = Titanium.UI.createLabel({  
                text:"Flow: " + flow_name,  
                left:0,  
                width:'auto',  
                top:0,  
                bottom:2,  
                height:'auto',  
                textAlign:'left',
                color:'#444444',  
                font:{  
                    fontFamily:'Trebuchet MS',fontSize:14,fontWeight:'bold'  
                }  
            });  
            post_view.add(label_flow_name);
            
            var label_flow_tuple = Titanium.UI.createLabel({  
                text:"Tuple: " + flow_tuple,  
                left:0,  
                width:'auto',  
                top:0,  
                bottom:2,  
                height:'auto',  
                textAlign:'left',
                color:'#444444',  
                font:{  
                    fontFamily:'Trebuchet MS',fontSize:14,fontWeight:'bold'  
                }  
            });  
            post_view.add(label_flow_tuple);
         
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
    }
    
    // Send the HTTP request
	loader.send();
    
}

loadAllProgramInstancesWithState();



