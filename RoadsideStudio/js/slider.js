
	var Slider = function(selector, options) {

	var __self = this;

	//DOM nodes
	var sliderNode = document.querySelector(selector),
	sliderImagesNode = sliderNode.querySelector('.slider_images_wrap'),
	prevSliderNode = sliderNode.querySelector('.slider_left'),
	nextSliderNode = sliderNode.querySelector('.slider_right');

	var currentSlideIndex = options.currentSlide || 0,
	imagesCount = sliderImagesNode.children.length,
	slideSize  = sliderImagesNode[(options.direction === 'vertical') ? 
	'offsetHeight' : 'offsetWidth'];

	this.nextSlide = function() {
		if(currentSlideIndex === imagesCount - 1) {
			currentSlideIndex = 0;
			return;
		}
		currentSlideIndex++;
	};

	this.prevSlide = function() {
		if (currentSlideIndex === 0) {
			currentSlideIndex = imagesCount - 1;
			return;
		}
		currentSlideIndex--;
	};

	this.__render = function() {

		var directionStyle = (options.direction === 'vertical') ? 'top' : 'left';
		sliderImagesNode.style[directionStyle] = -(currentSlideIndex * slideSize) + 'px';

	};

	nextSliderNode.onclick = function(e) {
		e.preventDefault();
		__self.nextSlide();
		__self.__render();
	};

	prevSliderNode.onclick = function(e) {
		e.preventDefault();
		__self.prevSlide();
		__self.__render();
	};

	this.__init = function() {
		if(options.direction === 'vertical') {
			sliderImagesNode.style.whiteSpace = 'normal';
		}//чтобы картинки стояли одна под другой
		this.__render();
		sliderImagesNode.style.transition = '0.5s';
	};
	this.__init();


}