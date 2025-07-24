// 네비게이션 바 클릭 시 스크롤 이동
document.querySelectorAll('.navibar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 다크 모드 토글
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('darkModeToggle');
    toggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if(document.body.classList.contains('dark-mode')) {
            toggleBtn.textContent = '☀️ 라이트모드';
        } else {
            toggleBtn.textContent = '🌙 다크모드';
        }
    });
    
});
document.addEventListener('keydown', function(event) {
    if (event.key === '0') {
        document.body.classList.toggle('dark-mode');
        const toggleBtn = document.getElementById('darkModeToggle');
        if(document.body.classList.contains('dark-mode')) {
            toggleBtn.textContent = '☀️ 라이트모드';
        } else {
            toggleBtn.textContent = '🌙 다크모드';
        }
    }
});

const hamburgerButton = document.querySelector('.hamburger-button');
    const menu = document.querySelector('.nav_menu');
    
    hamburgerButton.addEventListener('click', () => {
      hamburgerButton.classList.toggle('active');
      menu.classList.toggle('active');
    });