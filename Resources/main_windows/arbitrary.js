var win = Titanium.UI.currentWindow;  
win.setBackgroundImage('../images/background.jpg');

var nav_bar = Titanium.UI.createImageView({
        image:'../images/templates/multi-color/nav-bar-blank.png',
        top:0,
        left:0,
        height:40,
        //width:480,
	    borderWidth: 0,
	    borderRadius: 0
});
win.add(nav_bar);

var btnBack = Titanium.UI.createButton({  
    title:'',  
    backgroundImage:'../images/templates/multi-color/back.png',
    backgroundSelectedImage: '../images/templates/multi-color/back_over.png',
    top:2,  
    left:2,
    width:65,  
    height:40,
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:17}  
});  
win.add(btnBack);

var actInd = Titanium.UI.createActivityIndicator({
    height:50,
    width:10
});

var scrollView1 = Titanium.UI.createScrollView({
	contentWidth:'auto',
	contentHeight:'auto',
	layout:'vertical',
	top:40,
	left:5,
	width:300,
	borderRadius:4,
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:false
});

btnBack.addEventListener('click', function()
{
	win.remove( scrollView1 );

   win.windowHome.show();
   win.close();
});

Ti.API.info( "arbitraryWinID: " + win.arbitraryWinID  );

var textName = '';
var textDescription = '';

// Create our HTTP Client and name it "loader"
//var loader = Titanium.Network.createHTTPClient();

Ti.API.info( "Fetching Arbitrary Data from: " + win.site_url + "data/index/class/GetArbitraryInfo/method/getInfo/id/" + win.idKey);

// Create our HTTP Client
var loader = Titanium.Network.createHTTPClient();

// Sets the HTTP request method, and the URL to get data from
loader.open( "GET", win.site_url + "data/index/class/GetArbitraryInfo/method/getInfo/id/" + win.idKey );

loader.onload = function() 
{
	Ti.API.info( this.responseText );
	
	win.actInd.hide();
	
	results = eval('('+this.responseText+')');

	if( win.arbitraryWinID == 0 ){
		// About Us Section
	  
		//Ti.API.info( "textAboutUs: " + win.textAboutUs  );
		
		var questionsAnswers = results[0].description;
		var qa = questionsAnswers.split("+-+-+-+-+-+-");
		
		textName = 'About Us';
		
		// Question 1
		var q1 = Titanium.UI.createLabel({  
			text:qa[0], 
			top:10,  
			font:{fontFamily:'HenryMorganHand',fontSize:60,fontWeight: 'bold'},  
			textAlign: 'center',
			borderWidth:0,
			borderRadius:4,  
			height:'auto'
    	});  
    	scrollView1.add(q1);
		
		var a1 = Titanium.UI.createLabel({  
			text:qa[1], 
			top:2,  
			font:{fontFamily:'Daisy Script',fontSize:40},  
			textAlign: 'center',
			borderWidth:0,
			borderRadius:4,  
			height:'auto'
    	});  
    	scrollView1.add(a1);
    	
    	// Question 2
		var q2 = Titanium.UI.createLabel({  
			text:qa[2], 
			top:40,  
			font:{fontFamily:'HenryMorganHand',fontSize:60,fontWeight: 'bold'},  
			textAlign: 'center',
			borderWidth:0,
			borderRadius:4,  
			height:'auto'
    	});  
    	scrollView1.add(q2);
		
		var a2 = Titanium.UI.createLabel({  
			text:qa[3], 
			top:2,  
			font:{fontFamily:'Daisy Script',fontSize:50},  
			textAlign: 'center',
			borderWidth:0,
			borderRadius:4,  
			height:'auto'
    	});  
    	scrollView1.add(a2);

    	// Question 3
		var q3 = Titanium.UI.createLabel({  
			text:qa[4], 
			top:40,  
			font:{fontFamily:'HenryMorganHand',fontSize:60,fontWeight: 'bold'},  
			textAlign: 'center',
			borderWidth:0,
			borderRadius:4,  
			height:'auto'
    	});  
    	scrollView1.add(q3);
		
		var a3 = Titanium.UI.createLabel({  
			text:qa[5], 
			top:2,  
			font:{fontFamily:'Daisy Script',fontSize:40},  
			textAlign: 'center',
			borderWidth:0,
			borderRadius:4,  
			height:'auto'
    	});  
    	scrollView1.add(a3);
	
    	// Question 4
		var q4 = Titanium.UI.createLabel({  
			text:qa[6], 
			top:40,  
			font:{fontFamily:'HenryMorganHand',fontSize:60,fontWeight: 'bold'},  
			textAlign: 'center',
			borderWidth:0,
			borderRadius:4,  
			height:'auto'
    	});  
    	scrollView1.add(q4);
		
		var a4 = Titanium.UI.createLabel({  
			text:qa[7], 
			top:2,  
			font:{fontFamily:'Daisy Script',fontSize:40},  
			textAlign: 'center',
			borderWidth:0,
			borderRadius:4,  
			height:'auto'
    	});  
    	scrollView1.add(a4);
	}
	if( win.arbitraryWinID == 1 ){
		// Family Section
	
		//Ti.API.info( "textWeddingParty: " + win.textWeddingParty  );
		
		var questionsAnswers = results[1].description;
		var qa = questionsAnswers.split("+-+-+-+-+-+-");
	
		textName = 'Family';
		textDescription = results[1].description;
		
    	// Family 1
		var q1 = Titanium.UI.createLabel({  
			text:qa[0], 
			top:20,  
			font:{fontFamily:'HenryMorganHand',fontSize:60,fontWeight: 'bold'},  
			textAlign: 'center',
			borderWidth:0,
			borderRadius:4,  
			height:'auto'
    	});  
    	scrollView1.add(q1);
		
		var a1 = Titanium.UI.createLabel({  
			text:qa[1], 
			top:2,  
			font:{fontFamily:'Daisy Script',fontSize:40},  
			textAlign: 'center',
			borderWidth:0,
			borderRadius:4,  
			height:'auto'
    	});  
    	scrollView1.add(a1);
    	
    	// Family 2
		var q2 = Titanium.UI.createLabel({  
			text:qa[2], 
			top:40,  
			font:{fontFamily:'HenryMorganHand',fontSize:60,fontWeight: 'bold'},  
			textAlign: 'center',
			borderWidth:0,
			borderRadius:4,  
			height:'auto'
    	});  
    	scrollView1.add(q2);
		
		var a2 = Titanium.UI.createLabel({  
			text:qa[3], 
			top:2,  
			font:{fontFamily:'Daisy Script',fontSize:40},  
			textAlign: 'center',
			borderWidth:0,
			borderRadius:4,  
			height:'auto'
    	});  
    	scrollView1.add(a2);
		
	}
	

		var eventName = Titanium.UI.createLabel({  
			text:textName,  
			top:10,  
			left:125,  
			//width:300,  
			height:'auto',
			color:'white'
		});  
		win.add(eventName);  

		win.add( scrollView1 );

};

// Send the HTTP request
loader.send();

// Activity Indicator
win.add(win.actInd);
win.actInd.show();

