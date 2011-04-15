var win = Titanium.UI.currentWindow;  

loader = Titanium.Network.createHTTPClient();

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

var titleName = Titanium.UI.createLabel({  
        text:'Photos',  
        top:10,  
        left:150,  
        borderRadius:0,  
        height:'auto'
}); 
win.add(titleName);
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
   win.backWindow.open();
   win.close();
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
    backgroundColor:'white',
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:true,
    verticalBounce:true
});

win.addEventListener('focus',function(){

	loadPhotos();
});

function loadPhotos(){

	var photoList = [];
	
	// Variable to set what onload section todo.  Setting the text field info or saving
	var onloadType = 'setting';
	
	//
	// Get image list from server
	//
	// Create our HTTP Client
	//var loader = Titanium.Network.createHTTPClient();
	
	Ti.API.info( "Making ajax call for data to: " + win.site_url + "data/index/class/GetPhotos/method/getAllEventPhotos/id/" + win.idKey );
	
	win.loader.open( "GET", win.site_url + "data/index/class/GetPhotos/method/getAllEventPhotos/id/" + win.idKey );
	
	win.loader.onload = function() 
	{
	
		if( onloadType == 'setting' ){
	
			//Ti.API.info( "Event Info: " + this.responseText );
		
			results = eval('('+this.responseText+')');
			
			var data = [];
		
			var dashboardList = [];
			
			for (var c=0;c<results.length;c++)
			{
				var item = Titanium.UI.createImageView({
				image:'http://'+results[c].server_location+results[c].thumb_url,
				width: 70,
				height: 80,
				//borderWidth:1,
				//borderColor: "#AAAAAA",
				//borderRadius:3,
				visibile: true
				//title:labels[c]
				});
				dashboardList.push(item);
				
				// Pass the url to the event listener
				item.photo_url = 'http://'+results[c].server_location+results[c].image_url;
				item.server_location = results[c].server_location;
				item.image_url = results[c].image_url;
				item.back_location = 'photos';
				item.photos_id_seq = results[c].photos_id_seq;
						
				// Event listener when the user clicks on the photo in the slider
				item.addEventListener('click',function(e)  
				{   
					Ti.API.info( "User deleted photo: " + e.source.photo_url );
					
					onloadType = 'deleting';
							
					win.loader.open( "GET", win.site_url + "data/index/class/Photos/method/delete/id/" + win.idKey + "/photo_id/" + e.source.photos_id_seq );
		
					win.loader.send();	
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
		}
		if( onloadType == 'deleting' ){
			alert( "Deleted" );
		}
	};
	
	
	// Send the HTTP request
	win.loader.send();

}