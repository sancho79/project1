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