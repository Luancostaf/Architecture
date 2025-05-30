const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.left');
const next = document.querySelector('.right');

let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  slides[i].classList.add('active');
  dots[i].classList.add('active');

  document.querySelector('.slider').style.transform = `translateX(-${i * 100}%)`;
}

prev.onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
};

next.onclick = () => {
  index = (index + 1) % slides.length;
  showSlide(index);
};

dots.forEach((dot, i) => {
  dot.onclick = () => {
    index = i;
    showSlide(index);
  };
});
