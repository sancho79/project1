document.querySelector('button').addEventListener('click',function(){
    document.querySelector('.popup').style.display='none';
})
//슬라이드//
let idx = 0;
const slides = document.querySelectorAll('.phone-slider img');
const dots = document.querySelectorAll('.phone-dots .dot');
setInterval(() => {
  slides[idx].classList.remove('active');
  dots[idx].classList.remove('active');
  idx = (idx + 1) % slides.length;
  slides[idx].classList.add('active');
  dots[idx].classList.add('active');
}, 3000);
//슬라이드끝//

//인재//
window.addEventListener('scroll', function() {
  const img = document.getElementById('recruit-zoom-img');
  if (!img) return;
  const section = img.closest('.recruit-visual-section');
  if (!section) return;
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  // 섹션이 화면에 들어오면 확대, 벗어나면 원래대로
  if (rect.top < windowHeight && rect.bottom > 0) {
    // 스크롤 비율 계산 (0~1)
    const visible = Math.min(1, Math.max(0, (windowHeight - rect.top) / (rect.height + windowHeight)));
    // 1.0~1.15배 확대
    const scale = 1 + visible * 0.15;
    img.style.transform = `scale(${scale})`;
  } else {
    img.style.transform = 'scale(1)';
  }
});
//인재 끝//