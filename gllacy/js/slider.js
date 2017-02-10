var sliderDots = document.querySelectorAll('.slider-controls-dots');
var sliderList = document.querySelectorAll('.slider-item');

for(var sliderDot in sliderDots) {
	sliderDots[sliderDot].onclick = function () {
		
		[].forEach.call(sliderDots, function (item, index, array) {
			item.classList.remove('active');
		});

		this.classList.add('active');

		var _that = this;

		[].forEach.call(sliderList, function (item, index, array) {
			if(item.getAttribute('data-slide-item-id') === _that.getAttribute('data-slide-item-id')) {
				item.classList.add('active');
			} else {
				item.classList.remove('active');
			}
		});
		// document.querySelector('.slider-item');
		this.getAttribute('data-slide-item-id')
	}
}
