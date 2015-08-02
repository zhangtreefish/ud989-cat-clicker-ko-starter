var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('cat1');
	this.imgSrc = ko.observable('http://placekitten.com/g/200/300');
	this.nickNames = ko.observableArray([{nickname:"maomao"},{nickname:"snow-shoes"}]);
};
var ViewModel = function() {
	this.currentCat = ko.observable(new Cat());
	this.incrementCounter = function() {
		this.currentCat().clickCount(this.currentCat().clickCount()+1);
	};
};

ko.applyBindings(new ViewModel());