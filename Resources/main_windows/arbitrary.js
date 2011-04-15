var win = Titanium.UI.currentWindow;  

var nav_bar = Titanium.UI.createImageView({
        image:'../images/templates/multi-color/nav-bar-blank.png',
        top:0,
        left:0,
        height:40,
        width:480,
	    borderWidth: 0,
	    borderRadius: 0
});
win.add(nav_bar);

var btnBack = Titanium.UI.createButton({  
    title:'',  
    backgroundImage:'../images/templates/multi-color/back.png',
    top:5,  
    left:2,
    width:35,  
    height:35,
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnBack);

btnBack.addEventListener('click', function()
{
   win.windowHome.open();
   win.close();
});

var actInd = Titanium.UI.createActivityIndicator({
    height:50,
    width:10
});

Ti.API.info( "arbitraryWinID: " + win.arbitraryWinID  );

var textName = '';
var textDescription = '';

// Create our HTTP Client and name it "loader"
//var loader = Titanium.Network.createHTTPClient();

Ti.API.info( "Fetching Arbitrary Data from: " + win.site_url + "data/index/class/GetArbitraryInfo/method/getInfo/id/" + win.idKey);

// Sets the HTTP request method, and the URL to get data from
win.loader.open( "GET", win.site_url + "data/index/class/GetArbitraryInfo/method/getInfo/id/" + win.idKey );

win.loader.onload = function() 
{
	Ti.API.info( this.responseText );
	
	results = eval('('+this.responseText+')');
	
	var scrollView1 = Titanium.UI.createScrollView({
		contentWidth:'auto',
		contentHeight:'auto',
		top:40,
		left:0,
		//width:300,
		//height:600,
		borderRadius:0,
		backgroundColor:'#336699',
		showVerticalScrollIndicator:true,
		showHorizontalScrollIndicator:false
	});

	if( win.arbitraryWinID == 0 ){
		// About Us Section
	  
		//Ti.API.info( "textAboutUs: " + win.textAboutUs  );
		
		var questionsAnswers = results[0].description;
		var qa = questionsAnswers.split("+-+-+-+-+-+-");
		
		textName = 'About Us';
		
		// Question 1
		var q1 = Titanium.UI.createLabel({  
			text:qa[0],  
			top:30,  
			//left:0,  
			//width:300,  
			//height:'auto',
			backgroundColor:'#336699'  
		});  
		scrollView1.add(q1); 
		
		var a1 = Titanium.UI.createLabel({  
			text:qa[1],  
			//top:q1.height + 20,  
			//left:0,  
			//width:300,  
			//height:'auto',
			backgroundColor:'#336699'  
		});  
		scrollView1.add(a1); 
		
		// Line 1
		var line1 = Ti.UI.createLabel({
			//height:2,
			//width:300,
			//top:q1.height + a1.height + 10,
			//left:1,
			backgroundColor:'#000'
		});
		//scrollView1.add(line1); 
		
		Ti.API.info( "heights: " + q1.height + " - " + a1.height );
	
	}
	if( win.arbitraryWinID == 1 ){
		// Family Section
	
		//Ti.API.info( "textWeddingParty: " + win.textWeddingParty  );
	
		textName = 'Family';
		textDescription = results[1].description;;
	}
	

		var eventName = Titanium.UI.createLabel({  
			text:textName,  
			top:10,  
			left:125,  
			//width:300,  
			height:'auto' 
		});  
		win.add(eventName);  
/*			
		var eventDescription = Titanium.UI.createLabel({  
			text:textDescription,  
			top:30,  
			left:0,  
			//width:300,  
			height:'auto',
			backgroundColor:'#336699'  
		});  
		scrollView1.add(eventDescription); 
*/	
		win.add( scrollView1 );

}

// Send the HTTP request
win.loader.send();



