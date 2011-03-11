//
// Setup Scrollable view.  Want to make the bottom portion of the
// screen that fits thumbnails to be horizontally scrollable.
//

var scrollView1 = Titanium.UI.createScrollView({
	contentWidth:'auto',
	contentHeight:'auto',
	bottom:10,
	left:10,
	width:300,
	height:150,
	borderRadius:0,
	//backgroundColor:'blue',
    backgroundImage:'../images/png/corkboard.jpg',
	showVerticalScrollIndicator:false,
	showHorizontalScrollIndicator:true
});


var view1 = Ti.UI.createView({
    //backgroundImage:'../images/png/corkboard.jpg',
	//backgroundColor:'green',
	borderRadius:0,
	width:700,
	height:150,
	top:0
});

//
// Get image list from server
//
// Create our HTTP Client
var loader = Titanium.Network.createHTTPClient();

Ti.API.info( "Making ajax call for data to: " + win.site_url + "data/index/class/GetPhotos/method/getAllOwnersPhotos/id/" + win.idKey );

//loader.open( "GET", win.site_url + "data/index/class/GetPhotos/method/getPhotoDummyOwners/id/" + win.idKey );
loader.open( "GET", win.site_url + "data/index/class/GetPhotos/method/getAllOwnersPhotos/id/" + win.idKey );

loader.onload = function() 
{
    
//    Ti.API.info( "Event Info: " + this.responseText );

    results = eval('('+this.responseText+')');
    
    var widthCounter = 5;
    
    // Set max number of photos in slider
    var maxPhotos = 7;
    
    if( results.length < maxPhotos ){
        maxPhotos = results.length
    }
    
    // Only show 7 images here
    for(var i=0; i<maxPhotos; i++){
    
        Ti.API.info( "i: " + i );
    
        var av_image = Titanium.UI.createImageView({
            image:'http://'+results[i].server_location+results[i].image_url, // the image for the image view
            top:10,
            left:widthCounter,
            height:82,
            borderColor: "#FF0000",
            borderWidth: 1,
            borderRadius: 3,
            width:70
        });
        
        // Pass the url to the event listener
        av_image.photo_url = 'http://'+results[i].server_location+results[i].image_url;
        av_image.server_location = results[i].server_location;
        av_image.image_url = results[i].image_url;
        av_image.back_location = 'home';
        
        // Event listener when the user clicks on the photo in the slider
        av_image.addEventListener('click',function(e)  
        {   
            // Open photo to full page
            Ti.API.info( "User clicked on photo: " + e.source.photo_url );
            
            // Variables passed into this event listener
            win.windowFullPhoto.back_location = e.source.back_location;
            win.windowFullPhoto.photo_url = e.source.photo_url;
            win.windowFullPhoto.image_url = e.source.image_url;
            win.windowFullPhoto.server_location = e.source.server_location;
            
            win.windowFullPhoto.open();
            win.close();
            
    
        });
        
        view1.add(av_image);
    
        widthCounter = widthCounter + 80;
    }
};


// Send the HTTP request
loader.send();

scrollView1.add(view1);

win.add(scrollView1);


