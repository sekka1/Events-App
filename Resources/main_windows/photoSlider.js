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
	borderRadius:10,
	backgroundColor:'#ff99000',
	showVerticalScrollIndicator:false,
	showHorizontalScrollIndicator:true
});


var view1 = Ti.UI.createView({
	backgroundColor:'#336699',
	borderRadius:10,
	width:500,
	height:200,
	top:10
});


var av_image1 = Titanium.UI.createImageView({
    image:'../images/png/Cake.png', // the image for the image view
    top:10,
    left:10,
    height:82,
    width:80
});
view1.add(av_image1);

//
// Add images to the bottom scrolling area
var av_image2 = Titanium.UI.createImageView({
    image:'../images/png/Cake.png', // the image for the image view
    top:10,
    left:100,
    height:82,
    width:80
});
view1.add(av_image2);

var av_image3 = Titanium.UI.createImageView({
    image:'../images/png/Cake.png', // the image for the image view
    top:10,
    left:200,
    height:82,
    width:80
});
view1.add(av_image3);

var av_image4 = Titanium.UI.createImageView({
    image:'../images/png/Cake.png', // the image for the image view
    top:10,
    left:300,
    height:82,
    width:80
});
view1.add(av_image4);

var av_image5 = Titanium.UI.createImageView({
    image:'../images/png/Cake.png', // the image for the image view
    top:10,
    left:400,
    height:82,
    width:80
});
view1.add(av_image5);

var av_image6 = Titanium.UI.createImageView({
    image:'../images/png/Cake.png', // the image for the image view
    top:10,
    left:500,
    height:82,
    width:80
});
view1.add(av_image6);

scrollView1.add(view1);

win.add(scrollView1);
