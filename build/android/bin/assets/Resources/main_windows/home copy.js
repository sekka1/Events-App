var win = Titanium.UI.currentWindow;

var actInd = Titanium.UI.createActivityIndicator({
    height:50,
    width:10,
    message:'Retrieving Data'
});

//
// Setup tab groups
//
var tabGroupHome = Titanium.UI.createTabGroup();// Activity Event window
var tabGroupArbitrary = Titanium.UI.createTabGroup();// Arbitrary  window

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
// Arbitrary view that is scrollable
// 
var arbitrary = Titanium.UI.createWindow({  
    title:'',  
    url:'main_windows/arbitrary.js'  
});  

var arbitraryTab = Titanium.UI.createTab({  
//    title:'arbitrary',
    window:arbitrary
});  

var scrollViewArbitraryPage = Titanium.UI.createScrollView({
    contentWidth:'auto',
    contentHeight:'auto',
    top:0,
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true,
    verticalBounce:true
});

var arbitraryTextLabel = Titanium.UI.createLabel({  
        top:30,  
        left:10,  
        width:300,  
        height:'auto',
});  
scrollViewArbitraryPage.add(arbitraryTextLabel);


//
// Buttons on the home screen
// 

var btnEventInfo = Titanium.UI.createButton({  
    title:'',  
    top:10,  
    left:20,
    width:128,  
    height:128,
    backgroundImage: '/main_windows/Home_Icons/event1.png',  
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
    backgroundImage: '/main_windows/Home_Icons/maps1.png',  
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
    backgroundImage: '/main_windows/Home_Icons/photos1.png',  
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
    backgroundImage: '/main_windows/Home_Icons/photos1.png',  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});
var btnArbitraryTwo = Titanium.UI.createButton({  
    title:'',  
    top:300,  
    left:20,
    width:128,  
    height:128,
    backgroundImage: '/main_windows/Home_Icons/photos1.png',  
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
            arbitrary.results = dataSet;
            
        } else {
          // The data is already been fetch from a previous run
          
          Ti.API.info( "Second Fetch: Arbitrary Data" );
          
          results = eval('('+dataSet+')');
        }
        
        Ti.API.info( "Arbitrary Info Result Length: " + results.length );
        Ti.API.info( "Arbitrary Info Data: " + arbitrary.results );
    
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

    if( true ){
    //if( win.arbitrary_page_results == '' ){

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

// Decalaring vars for caching
eventInfo.event_info_results = '';
arbitrary.results = '';


// Run the Home Page Function
loadHomePage();

//
// Action Events for the buttons on the home screen
//

btnEventInfo.addEventListener('click',function(e)  
{     

    Ti.API.info( "event_info_results: " + eventInfo.event_info_results );

    // Set Window Variables    
    eventInfo.idKey = win.idKey;
    eventInfo.site_url = win.site_url;
    
    tabGroupHome.addTab( eventInfoTab );
    tabGroupHome.open();
    
});

btnLocation.addEventListener('click',function(e)  
{  
    location.idKey = win.idKey;
    location.site_url = win.site_url;
    
    tabGroupHome.addTab( locationTab );
    tabGroupHome.open();
    
});

btnArbitraryOne.addEventListener('click',function(e)  
{  
    tabGroupArbitrary.close();

    // Get the title for this arbitrary page
    tmp_results = eval('('+arbitrary.results+')');
    
    arbitrary.id = '0';  // Tells this window which one the user slected
    arbitraryTab.title = tmp_results[arbitrary.id]['name'];
    
    arbitrary.arbitraryTextLabel = arbitraryTextLabel;
    
    arbitraryTextLabel.text = tmp_results[0]['description'];
    
    arbitrary.scrollView = scrollViewArbitraryPage;
    
    tabGroupArbitrary.addTab( arbitraryTab );
    tabGroupArbitrary.open();
    
});

btnArbitraryTwo.addEventListener('click',function(e)  
{  
    tabGroupArbitrary.close();

    // Get the title for this arbitrary page
    tmp_results = eval('('+arbitrary.results+')');
    
    arbitrary.id = '1'; // Tells this window which one the user slected
    arbitraryTab.title = tmp_results[arbitrary.id]['name'];
    
    arbitrary.arbitraryTextLabel = arbitraryTextLabel;
    
    arbitraryTextLabel.text = tmp_results[1]['description'];
    
    arbitrary.scrollView = scrollViewArbitraryPage;
    
    tabGroupArbitrary.addTab( arbitraryTab );
    tabGroupArbitrary.open();
    
});


win.addEventListener('focus',function(e)  
{  
    Ti.API.info( "home.js win.addEventListener - focus new" );
    
    // Close the arbitrary tabs
    //tabGroupArbitrary.close( arbitraryTab );
});
