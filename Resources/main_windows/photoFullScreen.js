/////////////////////////////////////////////////////
//  Standard Window and Nav layout
/////////////////////////////////////////////////////
var win = Titanium.UI.currentWindow;  

var nav_bar = Titanium.UI.createImageView({
        image:'../images/templates/'+win.templateUsed+'/nav-bar-blank.png',
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
    backgroundImage:'../images/templates/'+win.templateUsed+'/back.png',
    backgroundSelectedImage: '../images/templates/'+win.templateUsed+'/back_over.png',
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
    // This page is used multiple times.  Call this window you
    // need to set the back_location to tell it where to go
    // when the back button is hit
    
    win.remove( image );
    
    if( didAddScrollView )
    	win.remove( scrollView );
    
    if( win.back_location == 'home' ){
        win.windowHome.show();
        win.close();
    }
    
    if( win.back_location == 'photos' ){
        win.windowPhotos.open();
        win.close();
    }
   
});

var titleName = Titanium.UI.createLabel({  
        text:'Photo',  
        top:10,  
        left:125,  
        borderRadius:0,  
        height:'auto',
        color:'white'
}); 
win.add(titleName);

// Create Activity Indicator object
var actInd = Titanium.UI.createActivityIndicator({
	top:50,
	right:150,
	height:50,
	width:10,
	font:{fontFamily:'Helvetica Neue', fontSize:20,fontWeight:'bold'},
	color: 'white',
	message:'Loading...'
});
win.add( actInd );
actInd.show();
/////////////////////////////////////////////////////
//  Start of page content
/////////////////////////////////////////////////////



/////////////////////////////////////////////////////
//  New Native window for Photos
/////////////////////////////////////////////////////
Ti.API.info( win.photo_url );

var image = Titanium.UI.createImageView({
		image:win.photo_url,
		top:40,
		//width: 70,
		//height: 80,
		//borderWidth:1,
		//borderColor: "#AAAAAA",
		//borderRadius:3,
		visibile: true
		//title:labels[c]
});
image.addEventListener('load', function()
{
	actInd.hide();
});
win.add( image );

var swipeDirection = '';

image.addEventListener('swipe', function(e)
{
	swipeDirection = e.direction;
	
	win.remove(actInd);
	win.add(actInd);
	actInd.show();

});
image.addEventListener('touchend', function(e)
{
	// Swipe left and right functionality to load the next/previous picture

	if( swipeDirection == 'right' ){
		// Change image to be minus 1	

		if( win.currentLocation == 0 ){
			// This is the first picture.  So goto the end
			
			win.currentLocation = win.results.length-1;
			
			image.image = 'http://'+win.results[win.currentLocation].server_location+win.results[win.currentLocation].image_url;
			
		} else {
			// Not first pic.  Just subtract one and show that
		
			win.currentLocation -= 1;
		
			image.image = 'http://'+win.results[win.currentLocation].server_location+win.results[win.currentLocation].image_url;
		}
		
		win.image_url = win.results[win.currentLocation].image_url;
	}
	if( swipeDirection == 'left' ){
		// Change image to be plus 1
	
		if( win.currentLocation == win.results.length-1 ){
			// This is the last picture.  So goto the first
			
			win.currentLocation = 0;
			
			image.image = 'http://'+win.results[win.currentLocation].server_location+win.results[win.currentLocation].image_url;
			
		} else {
			// Not first pic.  Just subtract one and show that
		
			win.currentLocation += 1;
		
			image.image = 'http://'+win.results[win.currentLocation].server_location+win.results[win.currentLocation].image_url;
		}
		
		win.image_url = win.results[win.currentLocation].image_url;	
	}
});

/////////////////////////////////////////////////////
//  Options to perform on this picture
/////////////////////////////////////////////////////
var didAddScrollView = false;

var scrollView = Titanium.UI.createScrollView({
	//contentWidth:'auto',
	//contentHeight:'auto',
    bottom:100,
	left:50,
	width:200,
	height:200,
	borderRadius:10,
	opacity:0.7,
    backgroundColor:'#000',
    layout:'vertical',
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:true,
    verticalBounce:true
});

// Main button options
var btnOptions = Titanium.UI.createButton({  
    title:'Options',  
    bottom:30,  
    left:20,
    width:75,  
    height:20,
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add( btnOptions );

var btnComment = Titanium.UI.createButton({  
    title:'Comment',  
    top:30,  
    left:35,
    width:125,  
    height:20,
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});

var btnSavePhoto = Titanium.UI.createButton({  
    title:'Save Photo',  
    top:20,  
    left:35,
    width:125,  
    height:20,
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  

var btnSendPhoto = Titanium.UI.createButton({  
    title:'Send Photo',  
    top:20,  
    left:35,
    width:125,  
    height:20,
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  

var btnCancel = Titanium.UI.createButton({  
    title:'Cancel',  
    top:20,  
    left:35,
    width:125,  
    height:20,
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  

btnCancel.addEventListener('click', function()
{
	scrollView.hide();
	btnOptions.show();
	
	// Add back swipe eventlisteners
	// ....
	
});

// Add all buttons to the scrollview
scrollView.add( btnComment );
//scrollView.add( btnSavePhoto );
//scrollView.add( btnSendPhoto );
scrollView.add( btnCancel );

btnOptions.addEventListener('click', function()
{
	btnOptions.hide();

	if( ! didAddScrollView ){
		win.add( scrollView );
		didAddScrollView = true;	
	} else {
		scrollView.show();
	}
});


/////////////////////////////////////////////////////
//  Comment Action
/////////////////////////////////////////////////////
btnComment.addEventListener('click', function()
{
	//if( didAddScrollView )
    	//win.remove( scrollView );

	win.windowComments.image_url = win.image_url;
	win.windowComments.server_location = win.server_location;
	win.windowComments.lastWindow = win;
	win.windowComments.templateUsed = win.templateUsed;
	
	// Remove swipe event listener
	//image.removeEventListener('swipe',function(){});
	//image.removeEventListener('touchend',function(){});
	
	win.windowComments.open();
});

