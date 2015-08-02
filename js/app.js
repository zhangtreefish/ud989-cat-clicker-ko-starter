var initialCats = [
	{
		clickCount:0,
		name:'CutiePie',
		imgSrc:'http://placekitten.com/g/200/300',
		nickNames:[{nickname:'maomao'},{nickname:'snow-shoes'}]
	},
	{
		name:'Zoro',
		imgSrc: "http://i110.photobucket.com/albums/n114/corsiphoto/tumblr_m00l5xLSbi1qjc1a7o1_500.jpg",
		clickCount:0,
		nickNames:[{nickname:'MAOMI'},{nickname:'FURRY'}]
	},
	{
		name:'Strider',
		imgSrc: 'https://www.kasandbox.org/programming-images/misc/cat-walk.gif',
		clickCount:0,
		nickNames:[{nickname:'dark night'},{nickname:'speed'}]
	}
];

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nickNames = ko.observableArray(data.nickNames);

	this.title = ko.computed(function() {
		var title;
		var clicks = this.clickCount();
		switch(true) {
		case(clicks>12):
			title='teenager';
			break;
		case(clicks>9):
			title='tween';
			break;
			case(clicks>2):
			title='munchkin';
			break;
		default:
			title='baby';
		}
		return title;
	},this); //need to pass 'this' in to evaluate this.clickCount()
};
var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);
	initialCats.forEach(function(catEl) {
		self.catList.push(new Cat(catEl));
	});

	this.currentCat = ko.observable(this.catList()[0]);//need()
	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount()+1);
	};
	this.catClicked = function(theClicked) {
		self.currentCat(theClicked);
	};
};

ko.applyBindings(new ViewModel());