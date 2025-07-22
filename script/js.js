// ===================== 결제 섹션 스크롤 애니메이션 =====================
window.addEventListener('scroll', function() {
  const paySection = document.querySelector('.pay-section');
  if (!paySection) return;
  const rect = paySection.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  if (rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
    paySection.classList.add('active');
  } else {
    paySection.classList.remove('active');
  }
});
// ===================== 결제 섹션 스크롤 애니메이션 끝 =====================

document.addEventListener('DOMContentLoaded', function() {
  var popup = document.querySelector('.popup');
  var closeBtn = popup ? popup.querySelector('button') : null;
  if (popup && closeBtn) {
    closeBtn.addEventListener('click', function() {
      popup.style.display = 'none';
    });
  }
});

// ===================== 대출 슬라이드 자동 전환 =====================
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.phone-slider');
  const slides = slider ? slider.querySelectorAll('img') : [];
  const dots = document.querySelectorAll('.phone-dots .dot');
  let current = 0;
  let timer;

  function showSlide(idx) {
    slides.forEach((img, i) => {
      img.classList.toggle('active', i === idx);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === idx);
    });
    current = idx;
  }

  function nextSlide() {
    let next = (current + 1) % slides.length;
    showSlide(next);
  }

  if (slides.length > 1) {
    timer = setInterval(nextSlide, 1500); // 1.5초마다 자동 전환
    // dot 클릭 시 수동 전환
    dots.forEach((dot, i) => {
      dot.addEventListener('click', function() {
        showSlide(i);
        clearInterval(timer);
        timer = setInterval(nextSlide, 2500);
      });
    });
  }
});
// ===================== 대출 슬라이드 자동 전환 끝 =====================

// ===================== 인재(채용) 섹션 스크롤 이미지 확대 =====================
window.addEventListener('scroll', function() {
  const recruitSection = document.querySelector('.recruit-visual-section');
  const recruitImg = document.querySelector('.recruit-visual-image img');
  if (!recruitSection || !recruitImg) return;
  const rect = recruitSection.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  // 섹션이 화면에 들어오면 확대, 벗어나면 원래대로
  if (rect.top < windowHeight && rect.bottom > 0) {
    // 스크롤 위치에 따라 확대 비율 계산 (최대 1.35배로 더 크게)
    const visible = Math.min(1, Math.max(0, (windowHeight - rect.top) / (rect.height + windowHeight)));
    const scale = 1 + visible * 0.35;
    recruitImg.style.transform = `scale(${scale})`;
  } else {
    recruitImg.style.transform = 'scale(1)';
  }
});
// ===================== 인재(채용) 섹션 스크롤 이미지 확대 끝 =====================