// 팝업 닫기
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup-close');
if (popup && popupClose) {
  popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
  });
}
// 대출 슬라이더
const sliderImgs = document.querySelectorAll('.slider-track img');
const sliderDots = document.querySelectorAll('.slider-dots .dot');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
let sliderIdx = 0;
function showSlider(idx) {
  sliderImgs.forEach((img, i) => {
    img.classList.toggle('active', i === idx);
  });
  sliderDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === idx);
  });
}
if (prevBtn && nextBtn && sliderImgs.length > 0) {
  prevBtn.addEventListener('click', () => {
    sliderIdx = (sliderIdx - 1 + sliderImgs.length) % sliderImgs.length;
    showSlider(sliderIdx);
  });
  nextBtn.addEventListener('click', () => {
    sliderIdx = (sliderIdx + 1) % sliderImgs.length;
    showSlider(sliderIdx);
  });
  sliderDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      sliderIdx = i;
      showSlider(sliderIdx);
    });
  });
  showSlider(sliderIdx);
} 