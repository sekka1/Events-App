var btnArbitraryOne = Titanium.UI.createButton({  
    title:'',  
    top:105,  
    left:20,
    width:82,  
    height:80,
    backgroundImage: '../images/png/Cake.png',
    //backgroundImage: '/main_windows/Home_Icons/photos1.png',  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});
var btnArbitraryTwo = Titanium.UI.createButton({  
    title:'',  
    top:105,  
    left:130,
    width:82,  
    height:80,
    backgroundImage: '../images/png/Cake.png', 
    //backgroundImage: '/main_windows/Home_Icons/photos1.png',  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});

// Create our HTTP Client and name it "loader"
var loader = Titanium.Network.createHTTPClient();

Ti.API.info( "Fetching Arbitrary Data" );

// Sets the HTTP request method, and the URL to get data from
loader.open( "GET", win.site_url + "data/index/class/GetArbitraryInfo/method/getInfo/id/" + win.idKey );


loader.onload = function() 
{
    results = eval('('+this.responseText+')');

    Ti.API.info( "Arbitrary Data length: " + results.length );

    // For each arbitrary Info pages.  Create an icon on the 
    // Home page for it
    for( var i = 0; i < results.length; i++ )
        {
            if( i == 0 ){
                // This is the About Us info
            
                Ti.API.info( "Arbitrary Info One: " + results[i].name );
            
                btnArbitraryOne.title = results[i].name;
                //btnArbitraryOne.backgroundImage = something;
                
                // Save Results
                win.textAboutUs = results[i].description;
                
                win.add(btnArbitraryOne);
            }
            if( i == 1 ){
                // This is the Wedding Party info
            
                Ti.API.info( "Arbitrary Info Two: " + results[i].name );
            
                btnArbitraryTwo.title = results[i].name;
                //btnArbitraryTwo.backgroundImage = something;
                
                // Save Results
                win.textWeddingParty = results[i].description;
                
                win.add(btnArbitraryTwo);
            }
        }


};

// Send the HTTP request
loader.send();
