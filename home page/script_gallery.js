function Slideshow(options) {
  this.slideIndex = 1;
  this.selector = options.selector;
  this.el = document.getElementById(options.id);
  this.createListeners();
  this.showSlides(this.slideIndex);
}
Slideshow.prototype.createListeners = function(n) {
  var self = this;  
  var dots = self.el.getElementsByClassName('slideshow-dot');
  for (var i = 0; i < dots.length; i++) {
    self.createDotListener(dots[i], i + 1);
  }
  self.el.getElementsByClassName('slideshow-prev')[0]
    .addEventListener('click', function() {
      self.plusSlides(-1);
    });
  self.el.getElementsByClassName('slideshow-next')[0]
    .addEventListener('click', function() {
      self.plusSlides(1);
    });
};
Slideshow.prototype.createDotListener = function(dot, index) {
  var self = this;
  dot.addEventListener('click', function() {
    return self.currentSlide(index);
  });
};
Slideshow.prototype.plusSlides = function(n) {
  this.showSlides(this.slideIndex += n);
};
Slideshow.prototype.currentSlide = function(n) {
  this.showSlides(this.slideIndex = n);
};
Slideshow.prototype.showSlides = function(n) {
  var i;
  var slides = this.el.getElementsByClassName('slideshow-slide');
  var dots = this.el.getElementsByClassName('slideshow-dot');
  if (n > slides.length) {
    this.slideIndex = 1;
  }
  if (n < 1) {
    this.slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[this.slideIndex - 1].style.display = 'block';
  slides[this.slideIndex - 1].style.margin = '0 auto';
  dots[this.slideIndex - 1].className += ' active';
};

var mySlideshow1 = new Slideshow({ id : 'my-slideshow-1' });
var mySlideshow2 = new Slideshow({ id : 'my-slideshow-2' });


 




