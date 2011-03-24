var win = Titanium.UI.currentWindow;  

var nav_bar = Titanium.UI.createImageView({
        image:'../images/navigation/nav-bar-blank.png',
        top:0,
        left:0,
        height:40,
        //width:330,
	    borderWidth: 0,
	    borderRadius: 0
});
win.add(nav_bar);

var btnBack = Titanium.UI.createButton({  
    title:'',  
    backgroundImage:'../images/navigation/back.png',
    top:5,  
    left:2,
    width:50,  
    height:28,
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


if( win.arbitraryWinID == 0 ){
  
    //Ti.API.info( "textAboutUs: " + win.textAboutUs  );
    
    textName = 'About Us';
    textDescription = win.textAboutUs;

}
if( win.arbitraryWinID == 1 ){
    //Ti.API.info( "textWeddingParty: " + win.textWeddingParty  );

    textName = 'Wedding Party';
    textDescription = win.textWeddingParty;
}


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
    
    var eventName = Titanium.UI.createLabel({  
        text:textName,  
        top:10,  
        left:125,  
        //width:300,  
        height:'auto' 
    });  
    win.add(eventName);  
        
    var eventDescription = Titanium.UI.createLabel({  
        text:textDescription,  
        top:30,  
        left:0,  
        //width:300,  
        height:'auto',
        backgroundColor:'#336699'  
    });  
    scrollView1.add(eventDescription); 
    
    win.add( scrollView1 );






