var win = Titanium.UI.currentWindow;  

var actInd = Titanium.UI.createActivityIndicator({
    height:50,
    width:10,
    message:'Retrieving Data'
});

function loadEventInfo()
{
    // Show Activity indicator
    actInd.show();
    
	// Create our HTTP Client and name it "loader"
	var loader = Titanium.Network.createHTTPClient();
    
    Ti.API.info( "Making ajax call for data to: " + win.site_url + "data/index/class/GetEventInfo/method/getInfo/id/" + win.idKey );

	// Sets the HTTP request method, and the URL to get data from
	loader.open( "GET", win.site_url + "data/index/class/GetEventInfo/method/getInfo/id/" + win.idKey );
    
    loader.onload = function() 
	{
        Ti.API.info( "Data: " + this.responseText );
    
        var results = eval('('+this.responseText+')');
        
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
    
    };
    
    // Send the HTTP request
	loader.send();

}

// Run Function
loadEventInfo()



  

