# 📝 개인 포트폴리오 웹사이트 제작 가이드

## 🎯프로젝트 개요
**제한 시간** : 4주 (6.30 ~ 7.25) <br>
**사용 기술** : HTML, CSS#, JavaScript <br>
**목표** : 전문적인 개인 포트폴리오 웹사이트 제작

---

## 🗒️ 기본 요구 사항
### ✅ 필수 구현 기능
#### 1. **네비게이션 바**
    - 로고 / 이름 표시
    - 메뉴 링크 (홈, 소개, 기술, 프로젝트, 연락처)(spa)
    - 팔로우 버튼
    - 반응형 햄버거 메뉴(모바일)
    - 스크롤 시 배경 변화 효과 (반투명, blur)

#### 2. **메인 화면**
    - 대형 프로필 이미지
    - 이름과 직업 타이틀
    - 매력적인 자기 소개
    - CTA 버튼들 (프로젝트 보기, 이력서 다운로드)
    - 쇼설 미디어 링크

#### 3. **소개 섹션**
    - 상세한 자기 소개 텍스트
    - 완성 프로젝트 수, 팔로워 숫자, Github 커밋 수, 연속 학습 일 수

#### 4. **기술 스킬 섹션**
    - 보유 기술을 태그 형식으로 표시 
    - 클릭 시 선택/해제 기능
    - 선택된 스킬 색상 변경, 알림(alert)

#### 5. **프로젝트 섹션**
    - 최소 3개의 프로젝트 카드
    - 각 프로젝트별 이미지, 제목, 설명, 기술 스택
    - Github / Live Demo 링크 버튼

#### 6. **연락처 섹션**
    - 연락처 정보 표시 (이메일, 전화, 위치, github)
    - 메시지 전송 폼 (이름, 이메일, 메시지)

#### 7. **푸터**    
    - 저작권 정보
    - 소셜 링크

### 🎨디자인 요구 사항
- **반응형 디자인** : 모바일, 태블릿, 데스크톱 완벽지원
- **모던 디자인** : CSS Grid, Flexbox, 그라디언트 활용
- **애니메이션** : 스크롤 애니메이션, 호버효과
- **일관성** : 통일된 색상 팔레트와 타이포그래피

---

## ✍️ 단개별 전개 사항

### 1주차 : HTML 구조 설계
**⏰예상 소요 시간** : 8~9 시간

#### 내용 
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>임지훈 - 자바 풀스택 개발자 portfolio</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/response.css">
</head>
<body>
    <p id="home"></p>
    <div class="container">
        <div class="navi">
            <!--네이게이션 메뉴 바-->
            <nav class="navibar">
                <div class="nav_logo">
                    <div class="logo-image">
                    <a href=""><img src="images/38-50x50.jpg" alt="로고" onclick="" id="logo"><br>
                    </a>
                    </div>
                    <div class="port_name">
                        <h1>임지훈</h1>
                    </div>
                    <button class="btn-follow"> 팔로우 버튼</button>
                </div>
                <ul class="nav_menu">
                    <!-- 앵커 링크 spa처럼 섹션 이동 -->
                    <li><a href="#home">홈</a></li>
                    <li><a href="#about">소개</a></li>
                    <li><a href="#skills">기술</a></li>
                    <li><a href="#proj">프로젝트</a></li>
                    <li><a href="#contact">연락처</a></li>
                </ul>
            </nav>
        </div>
        

        <div class="content">
            <!-- 메인 화면 -->
            <section class="main" >
                <div class="main-container">
                    <div class="main-text">
                        <div class="main-content">
                            <h3 class="main-title">안녕하세요 저는 자바 풀스택 개발자  <span class="highlight">임지훈</span>입니다.</h3>
                            <h4 class="main-subtitle">Java FullStack</h4>
                            <p class="main-description">사용자 경험을 중시하며 클린하고 효율적인 코드를 작성하기 위해 노력합니다.</p>
                        </div>
                        <div class="main-description">
                            <p></p>
                            <div class="main-buttons">
                                <button class="btn-project" onclick="">프로젝트 보기</button>
                                <button class="btn-resume" onclick="">이력서 보기</button>
                            </div>
                            <div class="social-links">
                                <button class="btn-social social-link1" onclick=""><a href="https://github.com/IMJI49">🐈‍⬛github</a></button>
                                <button class="btn-social social-link2" onclick=""><a href="">🔗links</a></button>
                                <button class="btn-social social-link3" onclick=""><a href="mailto:ansml4956@gmail.com">📧email</a></button>
                            </div>
                        </div>
                    </div>
                    <div class="main-image">
                        <img src="images/KakaoTalk_20250720_163730421.jpg" alt="프로필 사진" class="profile-image">
                    </div>
                </div>
            </section>

            <section class="about" id="about">
                <div class="about-container">
                    <h2>소개</h2>
                    <p> 사용자 경험을 중시하며 효율적인 코드 작성을 위해 노력하는 개발자 <span class="highlight">임지훈</span>이라고 합니다.</p>
                    <p>지금까지 완성 프로젝트 수는 총 4개이며 깃허브 팔로워 숫자는 15명 입니다.</p>
                    <p>Github에 커밋 수는 총 7개입니다.</p>
                    <p>지금까지 중앙학원 <span id="study_day"></span>입니다.</p>
                </div>
            </section>
            <section class="skills" id="skills">
                
                <div class="skill-container">
                    <h2>기술</h2>
                    <div class="skill1">
                        <input type="checkbox"id="HTML5"  onclick = "clickalert('HTML5')">
                            <label for="HTML5">
                                HTML5
                            </label>
                    </div>
                    <div class="skill2">
                        <input type="checkbox"id="css3" >
                            <label for="css3" onclick = "clickalert('CSS3')">
                                CSS3
                        </label>
                    </div>
                    <div class="skill3">
                        <input type="checkbox"id="Java" >
                            <label for="Java" onclick = "clickalert('Java')">
                                Java
                            </label>
                    </div>
                    <div class="skill4">
                        <input type="checkbox"id="JavaScript" >
                            <label for="JavaScript" onclick = "clickalert('JavaScript')">
                                JavaScript
                            </label>
                    </div>
                    <div class="skill5">
                        <input type="checkbox"id="SQL" >
                            <label for="SQL" onclick = "clickalert('SQL')">
                                SQL
                            </label>
                    </div>
                    <div class="skill6">
                        <input type="checkbox"id="JDBC" >
                            <label for="JDBC" onclick = "clickalert('JDBC')">
                                JDBC
                            </label>
                    </div>
                    <div class="skill7">
                        <input type="checkbox"id="AWS" >
                            <label for="AWS"    onclick = "clickalert('AWS')">
                                AWS
                            </label>
                    </div>
                    <div class="skill8">
                        <input type="checkbox"id="Spring" >
                            <label for="Spring" onclick = "clickalert('Spring')">
                                Spring
                            </label>
                    </div>
                </div>
            </section>
            <section class="project" id="proj">
                
                <div class="project-container">
                    <h2>프로젝트</h2>
                    <div class="project-image1">
                        <img src="images/포트폴리오.jpg" alt="프로젝트1" class="image1"> 
                    </div>
                    <div class="project-description1">
                        <p>
                        포트폴리오
                        2025.06.27~2025.07.25
                        포트폴리오 작성 CSS및 자바 스크립트 활용
                        </p>
                    </div>
                    
                    <div class="project-image2">
                        <img src="images/96-4752x3168.jpg" alt="프로젝트2" class="image2">
                    </div>
                    <div class="project-description2">
                        <p>
                            백엔드 팀 프로젝트 1
                            2025.09.05~2025.10.17
                            Java및 Spring 활용
                        </p>
                    </div>
                    
                    <div class="project-image3">
                        <img src="images/723-300x200.jpg" alt="프로젝트3" class="image3"> 
                    </div>
                    <div class="project-description3">
                        <p>
                            백엔드 팀 프로젝트 2
                            2025.10.24~2025.12.12
                            SQL및 JDBC활용
                        </p>
                    </div>
                    
                </div>
            </section>
            <section class="contact" id="contact">
                <h2>연락처</h2>
                <p>이메일 : <a href="mailto:ansml4956@gmail.com">ansml4956@gmail.com</a>
                <br> 전화 걸기 : <a href="tel:+82-10-7231-1938">010-7231-1938</a><br>
                <a href="https://github.com/IMJI49">Github</a></p>
            </section>
        </div>
        
    </div>
    <footer>
        <p>
            &copy; 2025 임지훈 모든 권리 보유.
        </p>
        <div class="footer-social">
            <button onclick="" class="btn1-footer"><a href="https://github.com/IMJI49">🐈‍⬛Git</a></button>
            <button onclick="" class="btn1-footer"><a href="">🔗linkedin</a></button>
            <button onclick="" class="btn1-footer"><a href="mailto:ansml4956@gmail.com">📧email</a></button>
        </div>
    </footer>
    <script src="js/script.js"></script>
</body>
</html>
```

#### ✅ 체크 리스트
- [ ] 시멘틱 HTML5 태크 사용(`<nav>`, `<section>`, `<header>`, `<footer>`)
- [ ] 적절한 ID와 클래스 명 작성
- [ ] 메타 태그


### 2주차 : CSS 스타일링
**⏰예상 소요 시간** : 15~20 시간

#### 내용

1. **CSS 변수 설정**
``` CSS
:root {
  --main-bg-color: brown;
}
```

2. **레이아웃 구성**
    - CSS Grid와 Flexbox 조합
    - 반응형 네비게이션 바
    - 풀스크린
    - 섹션별 최적화된 레이아웃

3. **스타일링**
```css

```
4. **반응형 디자인**
``` CSS
        @media screen and (min-width : 768px) and (max-width : 1023px) {
            body{
                background: url(images/bg-dark.jpg) no-repeat fixed;
                background-size: cover;
                color: #fff; /* 어두운 배경에 흰색 텍스트 */
            }
        }
        /*
            3) 모바일 화면 배경
                - 화면 크기 : 767px 이하
        */
        @media screen and (max-width : 767px) {
            body{
                background: url(images/bg-small.jpg) no-repeat fixed;
                background-size: cover;
                color: #fff; /* 어두운 배경에 흰색 텍스트 */
            }

```

#### ✅체크 리스트
- [ ] CSS Grid와 Flexbox 적절히 활용
- [ ] 모바일 반응형 디자인
- [ ] 호버 효과 구현
- [ ] CSS 변수로 색상 통일성 유지
- [ ] 부드러운 트랜지션 효과 적용
- [ ] 크로스 브라우저 호환성 확인

### 3주차 : JavaScript 기능 구현
**⏰예상 소요 시간** : 13 ~ 16 시간

#### 내용

1. **네비게이션 기능**
    ```javascript

    ```

2. **인터렉티브 기능**
    ```javascript

    ```

3. **애니메이션 구현**
    ```javascript

    ```

4. **폼 처리**
    ```javascript

    ```
#### ✅체크 리스트
- [ ] 모든 인터렉티브 요소 정상 작동
- [ ] 부드러운 스크롤 애니메이션 구현
- [ ] 폼 유효성 검사 및 에러 처리
- [ ] 코드 주석 충분히 작성

### 4주차 : 완성 및 최적화
**⏰예상 소요 시간** : 10 ~ 12 시간

#### 내용
1. **성능 최적화**
    - 이미지 최적화 (적절한 사이즈, 포맷)
    - 불필요한 코드 제거
    - 로딩 속도 개선

2. **SEO 최적화**
    ```html

    ```

3. **브라우저 호환성 테스트**
    - c,f,s,e 테스트
    - 모바일 브라우저 테스트
    - 다양한 해상도에서 테스트

4. **접근성 개선**
    - 키보드 만으로 모든 기능 사용 가능한지 확인

#### ✅체크 리스트
- [ ] 모든 브라우저에서 정상 작동
- [ ] 모바일에서 완벽한 사용자 경험
- [ ] 로딩 시간 3초 이내
- [ ] 접근성 가이드라인 준수

## 🏆 보너스 기능
- [ ] **다크 모드 토글**
- [ ] **다국어 지원**
- [ ] **음성 소개**
- [ ] **AI 챗봇**

## ✅ 제출 가이드
## 📁 **폴더 구조**
```
portfolio/
|-- index.html
|-- css/
|   |-- style.css
|   |-- response.css
|-- js/
|   |-- script.js
|   |-- animation.js
|-- images/
|   |-- .....
|README.md
```

### ✍️**제출 사항**
1. **소스 코드** : 모든 HTML, CSS, JS파일
2. **README.md** : 프로젝트 소개, 기능 설명, 설치 및 실행 방법
3. **개발 일지** : 주차별 진행 사항, 내용, 트러블 슈팅
4. **스크린샷**