var win = Titanium.UI.currentWindow;  

var nav_bar = Titanium.UI.createImageView({
        image:'../../images/templates/multi-color/nav-bar-blank.png',
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
    backgroundImage:'../../images/templates/multi-color/back.png',
    backgroundSelectedImage: '../../images/templates/multi-color/back_over.png',
    top:2,  
    left:2,
    width:65,  
    height:40,
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

var titleName = Titanium.UI.createLabel({  
        text:'About Us',  
        top:10,  
        left:125,  
        borderRadius:0,  
        height:'auto',
        color:'white'
}); 
win.add(titleName);



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
		//hintText:'ID',
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


    var questionThree = Titanium.UI.createTextField({  
		color:'#336699',  
		top:400,  
		left:10,  
		width:300,  
		height:40,  
		//hintText:'ID',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
    });  
    
    var questionThreeAnswer = Titanium.UI.createTextArea({  
    	//font:{fontFamily:'Arial',fontWeight:'bold',fontSize:10},  
        top:450,  
        left:10,  
        height:70,
	width:300,
        backgroundColor:'white',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
	});

    var questionFour = Titanium.UI.createTextField({  
		color:'#336699',  
		top:520,  
		left:10,  
		width:300,  
		height:40,  
		//hintText:'ID',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
    });  
    
    var questionFourAnswer = Titanium.UI.createTextArea({  
    	//font:{fontFamily:'Arial',fontWeight:'bold',fontSize:10},  
        top:570,  
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
		top:660,  
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
		var questionsAnswers = results[0].description;
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
		scrollView1.add(questionThree);
		scrollView1.add(questionThreeAnswer);
		scrollView1.add(questionFour);
		scrollView1.add(questionFourAnswer);
		scrollView1.add(btnSave);
		questionOne.value = qa[0];
		questionOneAnswer.value = qa[1];
		questionTwo.value = qa[2];
		questionTwoAnswer.value = qa[3];
		questionThree.value = qa[4];
		questionThreeAnswer.value = qa[5];
		questionFour.value = qa[6];
		questionFourAnswer.value = qa[7];
		win.add( scrollView1 );
		
		// Setting the arbitrary_id_seq
		win.arbitrary_id_seq = results[0].arbitrary_page_id_seq;
		
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
		type:'aboutus',
		q1:questionOne.value,
		q2:questionTwo.value,
		q3:questionThree.value,
		q4:questionFour.value,
		a1:questionOneAnswer.value,
		a2:questionTwoAnswer.value,
		a3:questionThreeAnswer.value,
		a4:questionFourAnswer.value
	};  
	
	// Changing onloadType so that the onload function does not run
	onloadType = 'save';
	
	// Send the HTTP request
	win.loader.send( params );
	
});

// Send the HTTP request
win.loader.send();




