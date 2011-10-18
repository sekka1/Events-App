var win = Titanium.UI.currentWindow;  

var nav_bar = Titanium.UI.createImageView({
        image:'../images/templates/multi-color/nav-bar-blank.png',
        top:0,
        left:0,
        height:40,
        //width:480,
	    borderWidth: 0,
	    borderRadius: 0
});
win.add(nav_bar);

var titleName = Titanium.UI.createLabel({  
        text:'Local Search',  
        top:10,  
        left:125,  
        borderRadius:0,  
        height:'auto',
        color:'white'
}); 
win.add(titleName);
var btnBack = Titanium.UI.createButton({  
    title:'',  
    backgroundImage:'../images/templates/multi-color/back.png',
    backgroundSelectedImage: '../images/templates/multi-color/back_over.png',
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
   win.windowHome.show();
   win.close();
});

// create table view data object
// type - can be either: q or category
// searchTerm - is the term that will be in the value field of the type
var data = [
	{title:'Accommodations', hasChild:true, type:'category', searchTerm:'Travel', header:'A'},
	{title:'Bridal Fashions', hasChild:true, type:'category', searchTerm:'Bridal', header:'B'},
	{title:'Cakes & Candies', hasChild:true, type:'q', searchTerm:'cake pastry', header:'C'},
	{title:'Catering', hasChild:true, type:'q', searchTerm:'Catering'},
	{title:'Ceremony Sites', hasChild:true, type:'q', searchTerm:'wedding location'},
	{title:'Counseling', hasChild:true, type:'q', searchTerm:'Counseling'},
	{title:'Dance Instruction', hasChild:true, type:'q', searchTerm:'dance school', header:'D'},
	{title:'Decorations', hasChild:true, type:'category', searchTerm:'Party Supplies'},
	{title:'Disc Jockeys', hasChild:true, type:'q', searchTerm:'disc jockey'},
	{title:'Favors', hasChild:true, type:'category', searchTerm:'Party Supplies', header:'F'},
	{title:'Flowers', hasChild:true, type:'category', searchTerm:'Florist'},
	{title:'For the Men', hasChild:true, type:'q', searchTerm:'groomsmen'},
	{title:'Gifts', hasChild:true, type:'category', searchTerm:'Shopping', header:'G'},
	{title:'Health & Beauty', hasChild:true, type:'category', searchTerm:'Beauty Salon', header:'H'},
	{title:'Honeymoons', hasChild:true, type:'category', searchTerm:'Travel'},
	{title:'Invitations', hasChild:true, type:'category', searchTerm:'Party Supplies', header:'I'},
	{title:'Jewelers', hasChild:true, type:'category', searchTerm:'Jewelry', header:'J'},
	{title:'Live Music', hasChild:true, type:'q', searchTerm:'live music', header:'L'},
	{title:'Officiants', hasChild:true, type:'category', searchTerm:'Church', header:'O'},
	{title:'Photographers', hasChild:true, type:'q', searchTerm:'Photographers', header:'P'},
    {title:'Pre-wedding Events', hasChild:true, type:'category', searchTerm:'Bars & Pubs'},
    {title:'Reception Facilities', hasChild:true, type:'q', searchTerm:'Reception Facilities', header:'R'},
    {title:'Registries', hasChild:true, type:'category', searchTerm:'Shopping'},
    {title:'Rehearsal Dinner', hasChild:true, type:'category', searchTerm:'Restaurant'},
    {title:'Rental Services', hasChild:true, type:'category', searchTerm:'Equipment Rental'},
    {title:'Transportation', hasChild:true, type:'category', searchTerm:'Transportation', header:'T'},
    {title:'Tuxedos', hasChild:true, type:'q', searchTerm:'Tuxedos'},
	{title:'Videographers', hasChild:true, type:'q', searchTerm:'Videographers', header:'V'},
    {title:'Wedding Planners', hasChild:true, type:'q', searchTerm:'Wedding coordinator', header:'W'}
];

var search = Titanium.UI.createSearchBar({
	showCancel:false
});
// create table view
var tableview = Titanium.UI.createTableView({
    top:40,
	data:data,
	search:search,
	filterAttribute:'title'
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	// event data
	var index = e.index;
	var section = e.section;
	var row = e.row;
	var rowdata = e.rowData;
	
	//e.section.headerTitle = e.section.headerTitle + ' section has been clicked';
	//Titanium.UI.createAlertDialog({title:'Table View',message:'row ' + row + ' index ' + index + ' section ' + section  + ' row data ' + rowdata + ' type ' + row.type + ' searchTerm ' + row.searchTerm }).show();
   
    win.windowLocationList.mapview = win.mapview; 
    win.windowLocationList.previousWin = win;
    //windowLocationList.windowHome = win.windowHome;
    win.windowLocationList.type = row.type;
    win.windowLocationList.searchTerm = row.searchTerm;
    
    win.windowLocationList.open();
    
    //win.close();
    
});

win.add(tableview);
win.add(btnBack);
