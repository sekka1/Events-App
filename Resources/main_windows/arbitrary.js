var win = Titanium.UI.currentWindow;  

var btnBack = Titanium.UI.createButton({  
    title:'Back',  
    top:10,  
    left:20,
    width:75,  
    height:20,
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(btnBack);

btnBack.addEventListener('click', function()
{
   win.windowHome.open();
   win.close();
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
        backgroundColor:'red',
        showVerticalScrollIndicator:true,
        showHorizontalScrollIndicator:false
    });
    
    var eventName = Titanium.UI.createLabel({  
        text:textName,  
        top:10,  
        left:0,  
        //width:300,  
        height:'auto',
        backgroundColor:'#336699'  
    });  
    scrollView1.add(eventName);  
        
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






