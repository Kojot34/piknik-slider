var middleDiv = document.createElement('div');
middleDiv.classList.add('middle');

var multiRangeSliderDiv = document.createElement('div');
multiRangeSliderDiv.classList.add('multi-range-slider');

var inputLeft = document.createElement('input');
inputLeft.type = 'range';
inputLeft.id = 'input-left';
inputLeft.min = '0';
inputLeft.max = '100';
inputLeft.value = '25';

var inputRight = document.createElement('input');
inputRight.type = 'range';
inputRight.id = 'input-right';
inputRight.min = '0';
inputRight.max = '100';
inputRight.value = '75';

var sliderDiv = document.createElement('div');
sliderDiv.classList.add('slider');

var trackDiv = document.createElement('div');
trackDiv.classList.add('track');

var rangeDiv = document.createElement('div');
rangeDiv.classList.add('range');

var thumbLeftDiv = document.createElement('div');
thumbLeftDiv.classList.add('thumb', 'left');

var dotLeftDiv = document.createElement('div');
dotLeftDiv.classList.add('dot');
thumbLeftDiv.appendChild(dotLeftDiv);

var thumbRightDiv = document.createElement('div');
thumbRightDiv.classList.add('thumb', 'right');

var dotRightDiv = document.createElement('div');
dotRightDiv.classList.add('dot');
thumbRightDiv.appendChild(dotRightDiv);

// Dodawanie elementów do drzewa DOM
sliderDiv.appendChild(trackDiv);
sliderDiv.appendChild(rangeDiv);
sliderDiv.appendChild(thumbLeftDiv);
sliderDiv.appendChild(thumbRightDiv);

multiRangeSliderDiv.appendChild(inputLeft);
multiRangeSliderDiv.appendChild(inputRight);
multiRangeSliderDiv.appendChild(sliderDiv);

middleDiv.appendChild(multiRangeSliderDiv);



//script
var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");

function setLeftValue() {
	var _this = inputLeft,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeft.style.left = percent + "%";
	range.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
	var _this = inputRight,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight.style.right = (100 - percent) + "%";
	range.style.right = (100 - percent) + "%";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function() {
	thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function() {
	thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", function() {
	thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function() {
	thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function() {
	thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", function() {
	thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", function() {
	thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function() {
	thumbRight.classList.remove("active");
});
