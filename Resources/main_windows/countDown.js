
var display_label =  Titanium.UI.createLabel({
        text: "Countdown Till Wedding Day",
	height:15,
        width:320,
        top:420,
        left:0,
        color:'#ff0000',
        borderRadius:0,
        font:{
                fontSize:15,
                fontWeight:'bold'
        },
        textAlign:'center'
});


var display_cntdwn_label =  Titanium.UI.createLabel({
        height:30,
        width:320,
        top:430,
        left:0,
        color:'#ff0000',
        borderRadius:0,
        font:{
                fontSize:15,
                fontWeight:'bold'
        },
        textAlign:'center'
});



// NOTE: month entered = one less than current month like 0=January, 11=December
// NOTE: hour is 24 hour format. 0=12am, 15=3pm etc
// format: futureDate = new Date(year,month-1,day,hour,min,sec)
// example: futureDate = new Date(2011,03,11,13,00,00) = March 11, 2011 - 2:00:00 pm

futureDate = new Date(2011,1,25,11,7,16);

function countDown(){

	dateNow = new Date();									//grab current date
	milisecs = futureDate.getTime() - dateNow.getTime();		//calc milliseconds between dates
	delete dateNow;

	// time is already past
	if(milisecs < 0){
		display_cntdwn_label.text = "Its Wedding Day!!!";
	}
	// date is still good
	else{
		days=0;
		hours=0;
		mins=0;
		secs=0;
		newDate="";

		milisecs = Math.floor(milisecs/1000);//kill the "milliseconds" so just secs

		days=Math.floor(milisecs/86400);//days
		milisecs=milisecs%86400;

		hours=Math.floor(milisecs/3600);//hours
		milisecs=milisecs%3600;

		mins=Math.floor(milisecs/60);//minutes
		milisecs=milisecs%60;

		secs=Math.floor(milisecs);//seconds

		if(days != 0){newDate += days +" day"+((days!=1)?"s":"")+", ";}
		if(days != 0 || hours != 0){newDate += hours +" hour"+((hours!=1)?"s":"")+", ";}
		if(days != 0 || hours != 0 || mins != 0){newDate += mins +" minute"+((mins!=1)?"s":"")+", ";}
		newDate += secs +" seconds";
		display_cntdwn_label.text=newDate;

		setInterval(function() { countDown() }, 1000);
	}
}








win.add(display_cntdwn_label);
win.add(display_label);

countDown();
