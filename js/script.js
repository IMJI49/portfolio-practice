// 연속 출석 일수 출력
let now = new Date()
let study_start_day = new Date('2025.06.02')
let day1 = Math.floor((now.getTime()-study_start_day.getTime())/(1000*60*60*24))
let holiday = Math.floor(day1/7)*2+2
document.getElementById("study_day").textContent = `연속 학습 일 수는 ${day1-holiday}일`
// 클릭 시 알람
function clickalert(text){
    alert(text + "을/를 클릭했습니다.");
}

// 스크롤 시 네비게이션 바에 블러 효과 추가
window.addEventListener('scroll', function() {
    const navibar = document.querySelector('.navibar');
    const menuBox = document.querySelectorAll('.menu-box');
    if (window.scrollY > 0) {
        navibar.classList.add('blur');
        menuBox.forEach(box => {
            box.classList.add('blur');
        });
    } else {
        navibar.classList.remove('blur');
        menuBox.forEach(box => {
            box.classList.remove('blur');
        });
    }
});
// 언어 변경 함수
function changeLanguage(lang) {
    const translations = {
        ko: {
            home: "홈",
            about: "소개",
            skills: "기술",
            proj: "프로젝트",
            contact: "연락처",
            follow: "팔로우 버튼",
            mainTitle: "안녕하세요 저는 자바 풀스택 개발자 <span class=\"highlight\">임지훈</span>입니다.",
            mainSubtitle: "Java FullStack",
            mainDescription: "사용자 경험을 중시하며 클린하고 효율적인 코드를 작성하기 위해 노력합니다.",
            resume: "이력서 보기",
            project: "프로젝트 보기",
            github: "🐈‍⬛github",
            links: "🔗links",
            email: "📧email",
            footer: "&copy; 2025 임지훈 모든 권리 보유."
        },
        en: {
            home: "Home",
            about: "About",
            skills: "Skills",
            proj: "Projects",
            contact: "Contact",
            follow: "Follow",
            mainTitle: "Hello, I'm <span class=\"highlight\">Jihoon Lim</span>, a Java Fullstack Developer.",
            mainSubtitle: "Java FullStack",
            mainDescription: "I focus on user experience and strive to write clean and efficient code.",
            resume: "View Resume",
            project: "View Projects",
            github: "🐈‍⬛github",
            links: "🔗links",
            email: "📧email",
            footer: "&copy; 2025 Jihoon Lim. All rights reserved."
        }
    };
    const t = translations[lang];
    document.querySelectorAll('.nav_menu li a')[0].textContent = t.home;
    document.querySelectorAll('.nav_menu li a')[1].textContent = t.about;
    document.querySelectorAll('.nav_menu li a')[2].textContent = t.skills;
    document.querySelectorAll('.nav_menu li a')[3].textContent = t.proj;
    document.querySelectorAll('.nav_menu li a')[4].textContent = t.contact;
    document.querySelector('.btn-follow').textContent = t.follow;
    document.querySelector('.main-title').innerHTML = t.mainTitle;
    document.querySelector('.main-subtitle').textContent = t.mainSubtitle;
    document.querySelector('.main-description p').textContent = t.mainDescription;
    document.querySelector('.btn-resume').textContent = t.resume;
    document.querySelector('.btn-project').textContent = t.project;
    document.querySelector('.social-link1 a').textContent = t.github;
    document.querySelector('.social-link2 a').textContent = t.links;
    document.querySelector('.social-link3 a').textContent = t.email;
    document.querySelector('footer p').innerHTML = t.footer;
}

document.querySelector('.skill1').addEventListener('keydown', function(event) {
    if (event.key === '1') {
        const checkbox = this.querySelector('input[type="checkbox"]');
        if (checkbox) {
            checkbox.checked = !checkbox.checked;
            clickalert(text);
        }
    }
});
// 숫자 1 키로 .skill1 내부 체크박스 활성화
document.addEventListener('keydown',function(event) {
    if (event.key === '1') {
        const checkbox = document.querySelector('.skill1 input[type="checkbox"]');
        if (checkbox) {
            checkbox.checked = !checkbox.checked;
            clickalert('HTML');
        }
    }
});
// 숫자 2 키로 .skill2 내부 체크박스 활성화
document.addEventListener('keydown',function(event) {
    if (event.key === '2') {
        const checkbox = document.querySelector('.skill2 input[type="checkbox"]');
        if (checkbox) {
            checkbox.checked = !checkbox.checked;
            clickalert('CSS3');
        }
    }
});
// 숫자 3 키로 .skill3 내부 체크박스 활성화
document.addEventListener('keydown',function(event) {
    if (event.key === '3') {
        const checkbox = document.querySelector('.skill3 input[type="checkbox"]');
        if (checkbox) {
            checkbox.checked = !checkbox.checked;
            clickalert('JavaScript');
        }
    }
});
// 숫자 4 키로 .skill4 내부 체크박스 활성화 
document.addEventListener('keydown',function(event) {
    if (event.key === '4') {
        const checkbox = document.querySelector('.skill4 input[type="checkbox"]');
        if (checkbox) {
            checkbox.checked = !checkbox.checked;
            clickalert('Java');
        }
    }
});
// 숫자 5 키로 .skill5 내부 체크박스 활성화
document.addEventListener('keydown',function(event) {
    if (event.key === '5') {
        const checkbox = document.querySelector('.skill5 input[type="checkbox"]');
        if (checkbox) {
            checkbox.checked = !checkbox.checked;
            clickalert('Spring Boot');
        }
    }
});
// 숫자 6 키로 .skill6 내부 체크박스 활성화
document.addEventListener('keydown',function(event) {
    if (event.key === '6') {
        const checkbox = document.querySelector('.skill6 input[type="checkbox"]');
        if (checkbox) {
            checkbox.checked = !checkbox.checked;
            clickalert('MySQL');
        }
    }
});
// 숫자 7 키로 .skill7 내부 체크박스 활성화
document.addEventListener('keydown',function(event) {
    if (event.key === '7') {
        const checkbox = document.querySelector('.skill7 input[type="checkbox"]');
        if (checkbox) {
            checkbox.checked = !checkbox.checked;
            clickalert('Git/GitHub');
        }
    }
});
// 숫자 8 키로 .skill8 내부 체크박스 활성화
document.addEventListener('keydown',function(event) {
    if (event.key === '8') {
        const checkbox = document.querySelector('.skill8 input[type="checkbox"]');
        if (checkbox) {
            checkbox.checked = !checkbox.checked;
            clickalert('JSP');
        }
    }
}); 

