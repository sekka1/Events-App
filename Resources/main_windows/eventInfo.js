var win = Titanium.UI.currentWindow;  

var actInd = Titanium.UI.createActivityIndicator({
    height:50,
    width:10,
    message:'Retrieving Data'
});

//
// Puts the Event info data into the page.  This function is here so that when the user
// revisits this page.  It does not have to go back to the server
// to re-fetch the data then display it.
//
// hasData: boolean
// dataSet: the json array with the Arbitrary Page Data
//
function addData( hasData, dataSet ){

    var results = '';
        
    Ti.API.info( "Data: " + dataSet );
    
    if( ! hasData ){
        // This is the first time it fetch the data
            
        Ti.API.info( "First Fetch: Event Info Data" );
        
        results = eval('('+dataSet+')');
        
        // Set global var with this new data
        win.event_info_results = dataSet;
        
        Ti.API.info( "From eventInfo.js - win.event_info_results: " + win.event_info_results );
        
    } else {
        // The data is already been fetch from a previous run
          
        Ti.API.info( "Second Fetch: Event Info Data" );
          
        results = eval('('+dataSet+')');
    }
        
    var eventName = Titanium.UI.createLabel({  
        text:results[0]['name'],  
        top:10,  
        left:10,  
        width:300,  
        height:'auto'  
    });  
    win.add(eventName);  
        
    var eventDescription = Titanium.UI.createLabel({  
        text:results[0]['description'],  
        top:30,  
        left:10,  
        width:300,  
        height:'auto'  
    });  
    win.add(eventDescription);  
        
        
    // Hide Activity indicator
    actInd.hide();    
        
}

function loadEventInfo()
{
    var hasData = false;

    if( win.event_info_results == '' ){

        // Show Activity indicator
        actInd.show();
    
        // Create our HTTP Client and name it "loader"
        var loader = Titanium.Network.createHTTPClient();
    
        Ti.API.info( "Making ajax call for data to: " + win.site_url + "data/index/class/GetEventInfo/method/getInfo/id/" + win.idKey );

        // Sets the HTTP request method, and the URL to get data from
        loader.open( "GET", win.site_url + "data/index/class/GetEventInfo/method/getInfo/id/" + win.idKey );
    
        loader.onload = function() 
        {
            addData( hasData, this.responseText )
        };
    
        // Send the HTTP request
        loader.send();
    
    } else {
        // Data is already there
        hasData = true;

        addData( hasData, win.event_info_results );
    }

}

// Run Function
loadEventInfo()



  

