var initialCats = [{
	clickCount:0,
	name:'cat1',
	imgSrc:'http://placekitten.com/g/200/300',
	nickNames:[{nickname:'maomao'},{nickname:'snow-shoes'}]
},{}];

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
};

ko.applyBindings(new ViewModel());