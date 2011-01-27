var win = Titanium.UI.currentWindow;
win.backgroundColor = '#13386c';

var view = Titanium.UI.createScrollView({
   borderRadius:0,
   backgroundImage:'Default.png',
contentWidth:'auto',
contentHeight:'auto',
top:0,
showVerticalScrollIndicator:true,
showHorizontalScrollIndicator:true,
verticalBounce:true

});



var data = [];
var labels = ['calls','cases','calls','contacts','emps','leads','meetings','opps','tasks','cases','tasks','opps','cases','calls','cases','contacts'];
var dashboardList = [];
for (var c=0;c<labels.length;c++)
{
	var item = Titanium.UI.createButton({
		backgroundImage:'./images/dashboard/'+labels[c]+'_off.png',
		backgroundSelectedImage:'./images/dashboard/'+labels[c]+'_on.png',
		width: 75,
		height: 80,
		borderWidth:0,
		borderRadius:0,
		visibile: true
		//title:labels[c]
	});
	dashboardList.push(item);
}


var colLength = Math.round(win.width / 80);
Ti.API.info("ColLength" + colLength);

var rowTop = 10;
for(var i=0; i<dashboardList.length; i++) {
	var prevLeft = 0;
	for(var x=0; x<=colLength-1; x++) {
		var itemNum = i + x;
		if(dashboardList[itemNum]) {
			Ti.API.info('i=' + itemNum);
			Ti.API.info('dashboardList=' + dashboardList[itemNum].title);
			dashboardList[itemNum].top = rowTop;
			dashboardList[itemNum].left = (x==0)? 5 : prevLeft + 75;
			Ti.API.info('dashboardItemTop: X:' + x + "ITEM_NUM:" + itemNum + "TOP:" + dashboardList[itemNum].top + " LEFT:" + dashboardList[itemNum].left);
			prevLeft = dashboardList[itemNum].left + 5;
			view.add(dashboardList[itemNum]);
		}
	}
	Ti.API.info("rowTop" + rowTop);	
	rowTop += 85;
	Ti.API.info("rowTop" + rowTop);	
	i += colLength-1;	
}


win.add(view);





