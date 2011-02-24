var win = Titanium.UI.currentWindow;  

var nav_bar = Titanium.UI.createImageView({
        image:'../images/navigation/nav-bar-3.png',
        top:0,
        left:0,
        height:40,
        //width:330,
	    borderWidth: 0,
	    borderRadius: 0
});
win.add(nav_bar);

var titleName = Titanium.UI.createLabel({  
        text:'Guests Photos',  
        top:10,  
        left:150,  
        borderRadius:0,  
        height:'auto',
}); 
win.add(titleName);

var btnBack = Titanium.UI.createButton({  
    title:'Back',  
    top:10,  
    left:20,
    width:75,  
    height:20,
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  

btnBack.addEventListener('click', function()
{
   win.windowHome.open();
   win.close();
});


var uploadButton = Titanium.UI.createButton({
    title:'Add Photo',
    top:10,
    left:100,
    width:100,
    height:20,
    borderRadius:1,
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});

uploadButton.addEventListener('click', function()
{
	Titanium.Media.openPhotoGallery({
		success: function(event) { 
			var image = event.media;
			var tempFile = Titanium.Filesystem.createTempFile();
			tempFile.write(image);
			var contents = tempFile.read();
			 
			var upload = Titanium.Network.createHttpClient();
			upload.onload = function() {
			    Ti.API.info("success");
			};
			upload.open("POST",Titanium.App.Properties.getString("postPhotoURL"));
			upload.send({ dataLength: tempFile.size, fileData: contents, id: win.idKey });
		},
		error: function() { Ti.API.info("Error Occured during upload process." + event); alert('An error occured during upload please try again!'); },
		cancel: function() { alert('cancel');}

	});	

});

//
// Setup Scrollable view.  Want to make the bottom portion of the
// screen that fits thumbnails to be horizontally scrollable.
//

var view = Titanium.UI.createScrollView({
	contentWidth:'auto',
	contentHeight:'auto',
    top:40,
	bottom:10,
	left:10,
	//width:300,
	//height:300,
	borderRadius:0,
	//backgroundImage:'../images/wedding.png', // Looks real busy with a background image
    backgroundColor:'#000',
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:true,
    verticalBounce:true
});

var photoList = [];


//
// Get image list from server
//
// Create our HTTP Client
var loader = Titanium.Network.createHTTPClient();

Ti.API.info( "Making ajax call for data to: " + win.site_url + "data/index/class/GetPhotos/method/getPhotoDummyOwners/id/" + win.idKey );

loader.open( "GET", win.site_url + "data/index/class/GetPhotos/method/getPhotoDummyOwners/id/" + win.idKey );

loader.onload = function() 
{
    //Ti.API.info( "Event Info: " + this.responseText );

    results = eval('('+this.responseText+')');
    
    var data = [];

    var dashboardList = [];
    
    for (var c=0;c<results.length;c++)
    {
        var item = Titanium.UI.createImageView({
		image:results[c].photo_url,
		width: 70,
		height: 80,
		borderWidth:1,
		borderColor: "#AAAAAA",
		borderRadius:3,
		visibile: true
		//title:labels[c]
        });
        dashboardList.push(item);
        
        // Pass the url to the event listener
        item.photo_url = results[c].photo_url;
        item.back_location = 'guestsPhotos';
        
        // Event listener when the user clicks on the photo in the slider
        item.addEventListener('click',function(e)  
        {   
            // Open photo to full page
            Ti.API.info( "User clicked on photo: " + e.source.photo_url );
            
            // Variables passed into this event listener
            win.windowFullPhoto.back_location = e.source.back_location;
            win.windowFullPhoto.photo_url = e.source.photo_url;
            
            win.windowFullPhoto.open();
            win.close();
            
    
        });
    }


    var colLength = 4; //Android dont support win.width // Math.round(win.width / 80);
    Ti.API.info("ColLength" + colLength);

    var rowTop = 10;
    for(var i=0; i<dashboardList.length; i++) {
        var prevLeft = 0;
        for(var x=0; x<=colLength-1; x++) {
            var itemNum = i + x;
            if(dashboardList[itemNum]) {
                //Ti.API.info('i=' + itemNum);
                //Ti.API.info('dashboardList=' + dashboardList[itemNum].title);
                dashboardList[itemNum].top = rowTop;
                dashboardList[itemNum].left = (x==0)? 3 : prevLeft + 75;
                //Ti.API.info('dashboardItemTop: X:' + x + "ITEM_NUM:" + itemNum + "TOP:" + dashboardList[itemNum].top + " LEFT:" + dashboardList[itemNum].left);
                prevLeft = dashboardList[itemNum].left + 3;
                view.add(dashboardList[itemNum]);
            }
        }
        //Ti.API.info("rowTop" + rowTop);	
        rowTop += 85;
        //Ti.API.info("rowTop" + rowTop);	
        i += colLength-1;	
    }

    win.add(view);
    
    win.add(btnBack);
    win.add(uploadButton);
    
};


// Send the HTTP request
loader.send();

