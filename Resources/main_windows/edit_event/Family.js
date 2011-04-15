var win = Titanium.UI.currentWindow;  

var nav_bar = Titanium.UI.createImageView({
        image:'../../images/templates/multi-color/nav-bar-blank.png',
        top:0,
        left:0,
        height:40,
        width:480,
	    borderWidth: 0,
	    borderRadius: 0
});
win.add(nav_bar);

//var btnBack = Titanium.UI.createButton({  
var btnBack = Titanium.UI.createButton({  
    title:'',  
    backgroundImage:'../../images/templates/multi-color/back.png',
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
   Ti.API.info( "About Us Edit back button pressed..." );
   win.backWindow.open();
   win.close();
});

// Variable to set what onload section todo.  Setting the text field info or saving
var onloadType = 'setting_text_field';

win.arbitrary_page_id_seq = '';

//////////////////////////////////////////////////////////
// Text input fields
//////////////////////////////////////////////////////////

    var questionOne = Titanium.UI.createTextField({  
		color:'#336699',  
		top:50,  
		left:10,  
		width:300,  
		height:40,  
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
    });  

    var questionOneAnswer = Titanium.UI.createTextArea({  
    	//font:{fontFamily:'Arial',fontWeight:'bold',fontSize:10},  
        top:100,  
        left:10,  
        height:70,
		width:300,
        backgroundColor:'white',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
	});
	
    var questionTwo = Titanium.UI.createTextField({  
		color:'#336699',  
		top:240,  
		left:10,  
		width:300,  
		height:40,  
		//hintText:'ID',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
    });  

    var questionTwoAnswer = Titanium.UI.createTextArea({  
    	//font:{fontFamily:'Arial',fontWeight:'bold',fontSize:10},  
        top:290,  
        left:10,  
        height:70,
		width:300,
        backgroundColor:'white',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
	});

	// Save Button
	var btnSave = Titanium.UI.createButton({  
		title:'Save',  
		top:380,  
		left:10,
		width:50,  
		height:28,
		borderRadius:1,  
		font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
	}); 
	

//////////////////////////////////////////////////////////
// Displaying Edit Area
//////////////////////////////////////////////////////////

Ti.API.info( "Making ajax call for data to: " + win.site_url + "data/index/class/GetArbitraryInfo/method/getInfo/id/" + win.idKey );

// Sets the HTTP request method, and the URL to get data from
win.loader.open( "GET", win.site_url + "data/index/class/GetArbitraryInfo/method/getInfo/id/" + win.idKey );

win.loader.onload = function() 
{
	if( onloadType == 'setting_text_field' ){
	
		//Ti.API.info( "About us Page: " + this.responseText );
	
		results = eval('('+this.responseText+')');
		var questionsAnswers = results[1].description;
		var qa = questionsAnswers.split("+-+-+-+-+-+-");
		
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
	
		
		scrollView1.add(questionOne);
		scrollView1.add(questionOneAnswer);
		scrollView1.add(questionTwo);
		scrollView1.add(questionTwoAnswer);

		scrollView1.add(btnSave);
		
		questionOne.value = qa[0];
		questionOneAnswer.value = qa[1];
		questionTwo.value = qa[2];
		questionTwoAnswer.value = qa[3];

		win.add( scrollView1 );
		
		// Setting the arbitrary_id_seq
		win.arbitrary_id_seq = results[1].arbitrary_page_id_seq;
		
		Ti.API.info( "arbitrary_id_seq: " + win.arbitrary_id_seq );
	}
	if( onloadType == 'save' ){
		alert( 'Saved' );
    }
};

btnSave.addEventListener('click', function(e)
{
	Ti.API.info( "Saving...." );
	
	// Sets the HTTP request method, and the URL to get data from
	win.loader.open( "POST" , win.site_url + "data/index/class/GetArbitraryInfo/method/edit" );
	Titanium.API.info( "POST " + win.site_url + "data/index/class/GetArbitraryInfo/method/edit" );


	// Post Values
	//var descriptionString = questionOne.value + "+-+-+-+-+-+-" + questionOneAnswer.value + "+-+-+-+-+-+-" + questionTwo.value + "+-+-+-+-+-+-" + questionTwoAnswer.value + "+-+-+-+-+-+-" + questionThree.value + "+-+-+-+-+-+-" + questionThreeAnswer.value; 
	//var tempString = "About Us";
	var params = {  
	    event_id:win.idKey,
	    user_id:Titanium.Facebook.uid,
	    id:win.arbitrary_id_seq,
		type:'family',
		q1:questionOne.value,
		q2:questionTwo.value,
		a1:questionOneAnswer.value,
		a2:questionTwoAnswer.value
	};  
	
	// Changing onloadType so that the onload function does not run
	onloadType = 'save';
	
	// Send the HTTP request
	win.loader.send( params );
	
});

// Send the HTTP request
win.loader.send();




