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
  if (rect.top < windowHeight && rect.bottom > 0) {
    const visible = Math.min(1, Math.max(0, (windowHeight - rect.top) / (rect.height + windowHeight)));
    // visible이 0.4만 되어도 scale 1이 되게
    const scale = Math.min(1, visible * 2.5);
    recruitImg.style.transform = `scale(${scale})`;
    recruitImg.style.opacity = 1;
  } else {
    recruitImg.style.transform = 'scale(0)';
    recruitImg.style.opacity = 1;
  }
});
// ===================== 인재(채용) 섹션 스크롤 이미지 확대 끝 =====================

// =====================  dot 버튼 =====================
document.addEventListener('DOMContentLoaded', function() {
  // dot 생성
  let scrollDot = document.createElement('div');
  scrollDot.className = 'dot';
  document.body.appendChild(scrollDot);

  // 스크롤 시 dot 표시/숨김
  window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
      scrollDot.classList.add('on');
    } else {
      scrollDot.classList.remove('on');
    }
  });

  // 클릭 시 맨 위로
  scrollDot.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
// ===================== 플로팅 dot 끝 =====================