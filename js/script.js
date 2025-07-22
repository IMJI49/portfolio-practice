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
    if (window.scrollY > 0) {
        navibar.classList.add('blur');
    } else {
        navibar.classList.remove('blur');
    }
});