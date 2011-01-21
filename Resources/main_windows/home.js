var win = Titanium.UI.currentWindow;

var actInd = Titanium.UI.createActivityIndicator({
    height:50,
    width:10,
    message:'Retrieving Data'
});

//
// Setup tab groups
//
var tabGroupActivity = Titanium.UI.createTabGroup();// Activity Event window

//
// Setup the windows that the home screen will be able to open
//

var eventInfo = Titanium.UI.createWindow({  
    title:'',  
    url:'main_windows/eventInfo.js'  
});  

var eventInfoTab = Titanium.UI.createTab({  
    title:'Event Info',  
    window:eventInfo
});  

var location = Titanium.UI.createWindow({  
    title:'',  
    url:'main_windows/location.js'  
});  

var locationTab = Titanium.UI.createTab({  
    title:'Location',
    window:location
});  

//
// Buttons on the home screen
// 

var btnEventInfo = Titanium.UI.createButton({  
    title:'',  
    top:10,  
    left:20,
    width:128,  
    height:128,
    backgroundImage: '/main_windows/Home_Icons/event.png',  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnEventInfo);

var btnLocation = Titanium.UI.createButton({  
    title:'',  
    top:10,  
    left:150,
    width:128,  
    height:128,
    backgroundImage: '/main_windows/Home_Icons/maps.png',  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnLocation);

var btnOwnersPhotos = Titanium.UI.createButton({  
    title:'',  
    top:150,  
    left:20,
    width:128,  
    height:128,
    backgroundImage: '/main_windows/Home_Icons/photos.png',  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnOwnersPhotos);

var btnArbitraryOne = Titanium.UI.createButton({  
    title:'',  
    top:150,  
    left:150,
    width:128,  
    height:128,
    backgroundImage: '/main_windows/Home_Icons/photos.png',  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});
var btnArbitraryTwo = Titanium.UI.createButton({  
    title:'',  
    top:300,  
    left:20,
    width:128,  
    height:128,
    backgroundImage: '/main_windows/Home_Icons/photos.png',  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});

//
// Puts the Arbitrary Icons into the Home Page depending if the user
// choose to add any.  This function is here so that when the user
// revisits this page.  It does not have to go back to the server
// to re-fetch the data then display it.
//
// hasData: boolean
// dataSet: the json array with the Arbitrary Page Data
//
function addData( hasData, dataSet ){

    var results = '';
    
        if( ! hasData ){
            // This is the first time it fetch the data
            
            Ti.API.info( "First Fetch: Arbitrary Data" );
        
            results = eval('('+dataSet+')');
        
            // Set global var with this new data
            win.arbitrary_page_results = dataSet;
        } else {
          // The data is already been fetch from a previous run
          
          Ti.API.info( "Second Fetch: Arbitrary Data" );
          
          results = eval('('+dataSet+')');
        }
        
        Ti.API.info( "Arbitrary Info Result Length: " + results.length );
        Ti.API.info( "Arbitrary Info Data: " + win.arbitrary_page_results );
    
        // For each arbitrary Info pages.  Create an icon on the 
        // Home page for it
        for( var i = 0; i < results.length; i++ )
        {
            if( i == 0 ){
                Ti.API.info( "Arbitrary Info One: " + results[i]['name'] );
            
                btnArbitraryOne.title = results[i]['name'];
                //btnArbitraryOne.backgroundImage = something;
                
                win.add(btnArbitraryOne);
            }
            if( i == 1 ){
                Ti.API.info( "Arbitrary Info Two: " + results[i]['name'] );
            
                btnArbitraryTwo.title = results[i]['name'];
                //btnArbitraryTwo.backgroundImage = something;
                
                win.add(btnArbitraryTwo);
            }
        }
        
        // Hide Activity indicator
        actInd.hide();
}

function loadHomePage()
{
    var hasData = false;

    if( win.arbitrary_page_results == '' ){

        // Show Activity indicator
        actInd.show();

        // Create our HTTP Client and name it "loader"
        var loader = Titanium.Network.createHTTPClient();
        
        Ti.API.info( "Fetching Arbitrary Data" );
    
        // Sets the HTTP request method, and the URL to get data from
        loader.open( "GET", win.site_url + "data/index/class/GetArbitraryInfo/method/getInfo/id/" + win.idKey )

        // Runs the function when the data is ready for us to process
        loader.onload = function() 
        {
            addData( hasData, this.responseText );
        };

        // Send the HTTP request
        loader.send();
        
    } else {
        // Data is already there
        hasData = true;

        addData( hasData, win.arbitrary_page_results );
    }

}

// Run the Home Page Function
loadHomePage();


//
// Action Events for the buttons on the home screen
//

btnEventInfo.addEventListener('click',function(e)  
{     
    Ti.API.info( "From home.js - win.event_info_results: " + win.event_info_results );

    eventInfo.idKey = win.idKey;
    eventInfo.site_url = win.site_url;
    eventInfo.event_info_results  = win.event_info_results;
    
    tabGroupActivity.addTab( eventInfoTab );
    tabGroupActivity.open();
    
});

btnLocation.addEventListener('click',function(e)  
{  
    location.idKey = win.idKey;
    location.site_url = win.site_url;
    
    tabGroupActivity.addTab( locationTab );
    tabGroupActivity.open();
    
});

btnArbitraryOne.addEventListener('click',function(e)  
{  
    location.idKey = win.idKey;
    location.site_url = win.site_url;
    
    tabGroupActivity.addTab( locationTab );
    tabGroupActivity.open();
    
});

btnArbitraryTwo.addEventListener('click',function(e)  
{  
    location.idKey = win.idKey;
    location.site_url = win.site_url;
    
    tabGroupActivity.addTab( locationTab );
    tabGroupActivity.open();
    
});
