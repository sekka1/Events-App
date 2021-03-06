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
            
                //btnArbitraryOne.title = results[i].name;
                //btnArbitraryOne.backgroundImage = something;
                
                var lblArbitrary1 = Titanium.UI.createLabel({
                    text:results[i].name,
                    width:'auto',
                    height:'auto',
                    font:{fontFamily:'Arial',fontSize:14},
                    left:40,
                    top:205,
                    color:'white',
                    shadowColor:'#aaa',
                    shadowOffset:{x:1,y:1},
                    zIndex:99
                });
                win.add(lblArbitrary1);
                
                // Save Results
                win.textAboutUs = results[i].description;
                
                //win.add(btnArbitraryOne);
            }
            if( i == 1 ){
                // This is the Wedding Party info
            
                Ti.API.info( "Arbitrary Info Two: " + results[i].name );
            
                //btnArbitraryTwo.title = results[i].name;
                //btnArbitraryTwo.backgroundImage = something;
                
                var lblArbitrary2 = Titanium.UI.createLabel({
                    text:results[i].name,
                    width:'auto',
                    height:'auto',
                    font:{fontFamily:'Arial',fontSize:14},
                    left:130,
                    top:205,
                    color:'white',
                    shadowColor:'#aaa',
                    shadowOffset:{x:1,y:1},
                    zIndex:99
                });
                win.add(lblArbitrary2);
                
                // Save Results
                win.textWeddingParty = results[i].description;
                
                //win.add(btnArbitraryTwo);
            }
        }

};

// Send the HTTP request
loader.send();
