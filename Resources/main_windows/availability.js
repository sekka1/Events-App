//
// This view shows the channel list of the aggregate count of
// what state all channels are in
//

// Create variable "win" to refer to current window
var win = Titanium.UI.currentWindow;

// This will hold the json array that is returned by the http call
var ivms_json_return = '';

var actInd = Titanium.UI.createActivityIndicator({
    height:50,
    width:10,
    message:'Retrieving Data'
});

//////////////////////////////////////////////////////////////////////
// Declaring this here so that we dont have to put the event listener
// inside the onload function
//////////////////////////////////////////////////////////////////////

// Creating sub1 menu item - vms_pc
var tabGroup_sub_win1 = Titanium.UI.createTabGroup();

var sub_win1 = Titanium.UI.createWindow({  
    title:'Total Channels',
    url:'main_windows/vms_pc.js'  
});  

var sub1Tab = Titanium.UI.createTab({  
    title:"Total Channels",  
    window:sub_win1  
});  

var firstItemRow_vms_pc = Ti.UI.createTableViewRow({  
        hasChild: true,
        backgroundColor: '#00FFFF',
}); 
// End of sub1 menu item

//////////////////////////////////////////////////////////////////////
// Creating sub2 menu item - vms_gc
var tabGroup_sub_win2 = Titanium.UI.createTabGroup();

var sub_win2 = Titanium.UI.createWindow({  
    title:'Good Channels',
    url:'main_windows/vms_gc.js'  
});  

var sub2Tab = Titanium.UI.createTab({  
    title:"Good Channels",  
    window:sub_win2  
});  

var firstItemRow_vms_gc = Ti.UI.createTableViewRow({  
        hasChild: true,
        backgroundColor: '#00FF00',
}); 
// End of sub2 menu item

//////////////////////////////////////////////////////////////////////
// Creating sub3 menu item - vms_oc
var tabGroup_sub_win3 = Titanium.UI.createTabGroup();

var sub_win3 = Titanium.UI.createWindow({  
    title:'Outage Channels',
    url:'main_windows/vms_oc.js'  
});  

var sub3Tab = Titanium.UI.createTab({  
    title:"Outage Channels",  
    window:sub_win3  
});  

var firstItemRow_vms_oc = Ti.UI.createTableViewRow({  
        hasChild: true,
        backgroundColor: '#000000',
}); 
// End of sub3 menu item

//////////////////////////////////////////////////////////////////////
// Creating sub4 menu item - vms_ec
var tabGroup_sub_win4 = Titanium.UI.createTabGroup();

var sub_win4 = Titanium.UI.createWindow({  
    title:'Error Channels',
    url:'main_windows/vms_ec.js'  
});  

var sub4Tab = Titanium.UI.createTab({  
    title:"Error Channels",  
    window:sub_win4  
});  

var firstItemRow_vms_ec = Ti.UI.createTableViewRow({  
        hasChild: true,
        backgroundColor: '#FF0000',
}); 
// End of sub4 menu item

//////////////////////////////////////////////////////////////////////
// Creating sub5 menu item - vms_wc
var tabGroup_sub_win5 = Titanium.UI.createTabGroup();

var sub_win5 = Titanium.UI.createWindow({  
    title:'Warning Channels',
    url:'main_windows/vms_wc.js'  
});  

var sub5Tab = Titanium.UI.createTab({  
    title:"Warning Channels",  
    window:sub_win5  
});  

var firstItemRow_vms_wc = Ti.UI.createTableViewRow({  
        hasChild: true,
        backgroundColor: '#F88017',
}); 
// End of sub5 menu item

//////////////////////////////////////////////////////////////////////
// Creating sub6 menu item - vms_hc
var tabGroup_sub_win6 = Titanium.UI.createTabGroup();

var sub_win6 = Titanium.UI.createWindow({  
    title:'History Channels',
    url:'main_windows/vms_hc.js'  
});  

var sub6Tab = Titanium.UI.createTab({  
    title:"History Channels",  
    window:sub_win6  
});  

var firstItemRow_vms_hc = Ti.UI.createTableViewRow({  
        hasChild: true,
        backgroundColor: '#EAC117',
}); 
// End of sub6 menu item

//////////////////////////////////////////////////////////////////////
// End of Declaring this here so that we dont have to put the event listener
//////////////////////////////////////////////////////////////////////


//
//
// Load function to go get the current data        
function loadIvmsAvailability()
{
    // Show Activity indicator
    actInd.show();
    
	// Empty array "rowData" for our tableview
	var rowData = [];
    
	// Create our HTTP Client and name it "loader"
	var loader = Titanium.Network.createHTTPClient();

	// Sets the HTTP request method, and the URL to get data from
	loader.open("GET","http://" + win.ip + ":" + win.port + "/IQVMSWebApp/state/getProgramAggregateStateUpdates.action?_dc=" + Math.ceil(10000*Math.random()));

    // Session Cookies should be sent back in this format
    loader.setRequestHeader( "Cookie", win.session_name + "=" + win.session_value );
    
	// Runs the function when the data is ready for us to process
	loader.onload = function() 
	{
        Ti.API.info( "Loading loadIvmsAvailability" );
    
        // JSON repsonse from the http request
        ivms_json_return = this.responseText;
		ivms_json = eval('('+this.responseText+')');

        // Pulling out the variables that we want for this view
        var vms_ec = ivms_json.counts.ec;
        var vms_gc = ivms_json.counts.gc;
        var vms_hc = ivms_json.counts.hc;
        var vms_oc = ivms_json.counts.oc;
        var vms_pc = ivms_json.counts.pc;
        var vms_wc = ivms_json.counts.wc;

        // Create this main container
        var main_menu = Ti.UI.createTableView({  
            //style:Titanium.UI.iPhone.TableViewStyle.GROUPED,  
            //scrollable:true  
        });
        
        //////////////////////////////////////////////////////////////////////
        // Start of First Row - pc 
        var firstItemLabel_vms_pc = Ti.UI.createLabel({
            color: '#000000',
            left: 9,  
            text: "Total: " + vms_pc
        });  
        //firstItemLabel_vms_gc.text = vms_gc;

        firstItemRow_vms_pc.add( firstItemLabel_vms_pc );
        
        main_menu.appendRow( firstItemRow_vms_pc );
        // End of First option row: vms_pc - total channels monitored
        
        //////////////////////////////////////////////////////////////////////
        // Start of First Row - gc 
        var firstItemLabel_vms_gc = Ti.UI.createLabel({
            color: '#000000',
            left: 9,  
            text: "Good: " + vms_gc
        });  
        //firstItemLabel_vms_gc.text = vms_gc;

        firstItemRow_vms_gc.add( firstItemLabel_vms_gc );
        
        main_menu.appendRow( firstItemRow_vms_gc );
        // End of row: vms_pc - total channels monitored
        
        //////////////////////////////////////////////////////////////////////
        // Start of First Row - oc 
        var firstItemLabel_vms_oc = Ti.UI.createLabel({
            color: '#FFFFFF',
            left: 9,  
            text: "Outage: " + vms_oc
        });  
        //firstItemLabel_vms_oc.text = vms_oc;

        firstItemRow_vms_oc.add( firstItemLabel_vms_oc );
        
        main_menu.appendRow( firstItemRow_vms_oc );
        // End of row: vms_oc - total channels monitored
        
        //////////////////////////////////////////////////////////////////////
        // Start of First Row - ec 
        var firstItemLabel_vms_ec = Ti.UI.createLabel({
            color: '#000000',
            left: 9,  
            text: "Error: " + vms_ec
        });  
        //firstItemLabel_vms_ec.text = vms_ec;

        firstItemRow_vms_ec.add( firstItemLabel_vms_ec );
        
        main_menu.appendRow( firstItemRow_vms_ec );
        // End of row: vms_ec - total channels monitored
        
        //////////////////////////////////////////////////////////////////////
        // Start of First Row - wc 
        var firstItemLabel_vms_wc = Ti.UI.createLabel({
            color: '#000000',
            left: 9,  
            text: "Warning: " + vms_oc
        });  
        //firstItemLabel_vms_wc.text = vms_wc;

        firstItemRow_vms_wc.add( firstItemLabel_vms_wc );
        
        main_menu.appendRow( firstItemRow_vms_wc );
        // End of row: vms_wc - total channels monitored
        
        //////////////////////////////////////////////////////////////////////
        // Start of First Row - hc 
        var firstItemLabel_vms_hc = Ti.UI.createLabel({
            color: '#000000',
            left: 9,  
            text: "History: " + vms_hc
        });  
        //firstItemLabel_vms_hc.text = vms_hc;

        firstItemRow_vms_hc.add( firstItemLabel_vms_hc );
        
        main_menu.appendRow( firstItemRow_vms_hc );
        // End of row: vms_hc - total channels monitored
        
        
        
        // Add all this to the current view
        win.add( main_menu );
        
        // Hide Activity indicator
        actInd.hide();
	};
    
	// Send the HTTP request
	loader.send();
    
}

loadIvmsAvailability();
//setInterval(loadIvmsAvailability,90000);

//////////////////////////////////////////////////////////////////////
// Event listener for each of the rows
//////////////////////////////////////////////////////////////////////

// add the event to the first item: vms_pc  
        firstItemRow_vms_pc.addEventListener('click', function (e) {
            sub_win1.ivms_json = ivms_json_return; // Passing the json array to the new window
            sub_win1.ip = win.ip;
            sub_win1.port = win.port;
            sub_win1.session_name = win.session_name;
            sub_win1.session_value = win.session_value;
            tabGroup_sub_win1.addTab( sub1Tab );
            tabGroup_sub_win1.open();
        });  


// add the event to the first item: vms_gc  
        firstItemRow_vms_gc.addEventListener('click', function (e) {
            sub_win2.ivms_json = ivms_json_return; // Passing the json array to the new window
            sub_win2.ip = win.ip;
            sub_win2.port = win.port;
            sub_win2.session_name = win.session_name;
            sub_win2.session_value = win.session_value;
            tabGroup_sub_win2.addTab( sub2Tab );
            tabGroup_sub_win2.open();
        });  
        
        
// add the event to the first item: vms_oc  
        firstItemRow_vms_oc.addEventListener('click', function (e) {
            sub_win3.ivms_json = ivms_json_return; // Passing the json array to the new window
            sub_win3.ip = win.ip;
            sub_win3.port = win.port;
            sub_win3.session_name = win.session_name;
            sub_win3.session_value = win.session_value;
            tabGroup_sub_win3.addTab( sub3Tab );
            tabGroup_sub_win3.open();
        });  

// add the event to the first item: vms_ec  
        firstItemRow_vms_ec.addEventListener('click', function (e) {  
            sub_win4.ivms_json = ivms_json_return; // Passing the json array to the new window
            sub_win4.ip = win.ip;
            sub_win4.port = win.port;
            sub_win4.session_name = win.session_name;
            sub_win4.session_value = win.session_value;
            tabGroup_sub_win4.addTab( sub4Tab );
            tabGroup_sub_win4.open();
        });  
        
// add the event to the first item: vms_wc  
        firstItemRow_vms_wc.addEventListener('click', function (e) { 
            sub_win5.ivms_json = ivms_json_return; // Passing the json array to the new window
            sub_win5.ip = win.ip;
            sub_win5.port = win.port;
            sub_win5.session_name = win.session_name;
            sub_win5.session_value = win.session_value;
            tabGroup_sub_win5.addTab( sub5Tab );
            tabGroup_sub_win5.open();
        });  
        
// add the event to the first item: vms_hc  
        firstItemRow_vms_hc.addEventListener('click', function (e) {  
            sub_win6.ivms_json = ivms_json_return; // Passing the json array to the new window
            sub_win6.ip = win.ip;
            sub_win6.port = win.port;
            sub_win6.session_name = win.session_name;
            sub_win6.session_value = win.session_value;
            tabGroup_sub_win6.addTab( sub6Tab );
            tabGroup_sub_win6.open();
        });  
        
    
        