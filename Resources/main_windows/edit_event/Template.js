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

//var btnBack = Titanium.UI.createButton({  
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
   Ti.API.info( "Template Edit back button pressed..." );
   win.backWindow.open();
   win.close();
});

var titleName = Titanium.UI.createLabel({  
        text:'Tempates',  
        top:10,  
        left:125,  
        borderRadius:0,  
        height:'auto',
        color:'white'
}); 
win.add(titleName);


// Variable to set what onload section todo.  Setting the text field info or saving
var onloadType = 'text_field';


var pickerLabel = Titanium.UI.createLabel({
	text:'Please select a template',
	height:'auto',
	width:'auto',
	font:{fontSize:18},
	color:'#900',
	top:65,
	left:70

});
win.add(pickerLabel);
// create picker and data outside of function since I need to make 2 calls in order to get the list and which one you already selected
var picker = Ti.UI.createPicker();
var column = Ti.UI.createPickerColumn();

	// Save Button
	var btnSave = Titanium.UI.createButton({  
		title:'Save',  
		top:400,  
		left:10,
		width:50,  
		height:28,
		borderRadius:1,  
		font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
	}); 
	

//////////////////////////////////////////////////////////
// Displaying Edit Area
//////////////////////////////////////////////////////////


// Sets the HTTP request method, and the URL to get data from
//Make first call to get 

var sites = [ 
	win.site_url + "data/index/class/GetTemplate/method/GetAvailableTemplates/id/" + win.idKey,
	win.site_url + "data/index/class/GetTemplate/method/GetTemplateUsed/id/" + win.idKey
];


var httprequestCounter = 0;
var pickerData = [];
var pickerSelect = -99;
var picker= Titanium.UI.createPicker();
var selectedTemplate = -99


/////////////////////////////////////////////
// Since you can't make multiple GET requests with the same HTTPClient you gotta do this
///////////////////////////////////////////
for (var i in sites) {
    var inline_function = function(i) {
	var returnString ="";
        var xhr = Ti.Network.createHTTPClient();
        xhr.onload = function() {
	   httprequestCounter++;
	   var passData = [];
            var results = eval('('+this.responseText+')');
            Ti.API.info(results);
            for(var j=0;j< results.length;j++) { 
		//we gotta stuff everthing into one return since more than one onLoad() will break stuff
		passData.push({title:results[j].description,seq:results[j].template_available_page_id_seq,user_id:results[j].user_id_seq,template_used_id:results[j].template_available_page_id_seq});
            }
		//parse the results
	   receiver(passData);
		//since the HTTPclient is the last VERY thing to execute 
		// if you try to display data before you're DONE it breaks
	   displayPicker();
        };// end onLoad function
        xhr.open("GET", sites[i]);
        xhr.send();
    };
    inline_function(i);
	

}//end for loop


function receiver(params) { 
	//input will take the values from the HTTP client and make sense of them
	for(var i = 0; i < params.length; i++) {
		if(params[i].user_id > 0 ) { 
            		//picker.setSelectedRow(0,params[i].template_used_id,true);        
			// The numbering for the templates started at 1 and the picker returns value from zero
			pickerSelect = (params[i].template_used_id - 1);
		}
		var matchRegex = /undefined/;
		var testMatch = matchRegex.test(params[i].title);
		//when I first wrote this I would get "undefined" as a returned value from the httpCllient
		if(!testMatch) { 
			pickerData.push({title:params[i].title,templateValue:params[i].seq});
			//Ti.API.warn("The title will be: " + params[i].title);	
		}
		//Ti.API.warn("The value of the ID is: " + params[i].seq);
	//	Ti.API.warn("I have received the value: " + string) ;
	}
}// 


Ti.API.info("The http request couner is: " + httprequestCounter);
function displayPicker() { 
	//since we make multiple HTTP requests we need to wait 
	// until we have made the last request to do something with the results
	if( httprequestCounter == sites.length ) {
		picker.add(pickerData);
		Ti.API.info("The value of Picker select is: " + pickerSelect);
		picker.setSelectedRow(0,pickerSelect,true);
		picker.selectionIndicator = true;
		win.add(picker);
		win.add( btnSave);
		picker.addEventListener('change',function(e)
		{
			Ti.API.info("The value of the picker is: " + e.row.templateValue);
			selectedTemplate = e.row.templateValue;
		});//end picker listener
	}//endIF
	btnSave.addEventListener('click', function()
	{
		Ti.API.info( "Saving...." );
		// Sets the HTTP request method, and the URL to get data from
       		var xhr = Ti.Network.createHTTPClient();
		xhr.open("POST", win.site_url + "data/index/class/GetTemplate/method/edit"); 
		//win.loader.open( "POST" , win.site_url + "data/index/class/GetArbitraryInfo/method/edit" );
		Titanium.API.info( "POST " + win.site_url + "data/index/class/GetTemplate/method/edit" );
		// Post Values
		var params = {  
	    		id:win.idKey,
	    		user_id:Titanium.Facebook.uid,
	    		used:selectedTemplate
		};  
	
		// Send the HTTP request
		//var httpResponse = win.loader.send( params );
		var httpResponse = xhr.send(params);
		Ti.API.info("Parsing results " + xhr.send.responseText );
	});

}//end displayPicker function








