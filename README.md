# 또또가
![Slide 16_9 - 25](https://github.com/Ttottoga/FE/assets/92720304/c0d0a6ae-0693-4f11-9cb8-b390e158babd)

# 프로젝트 소개
**또또가**는 소비자와 상점 간 솔직한 협력과 소통을 장려하는 **내돈내산 리뷰 커머스 플랫폼**입니다.
- 고객이 가게를 방문한 후에는 만족도에 따라 리뷰를 작성하고 이를 자신의 SNS에 공유한다.
- 이에 대한 보상으로, 가게 사장님은 리뷰어에게 재방문 시 사용 가능한 쿠폰을 제공한다.
- 소비자는 개인 SNS의 영향력을 활용하여 혜택을 얻을 수 있다.
- 상점은 신규 고객을 유치하고 동시에 기존 고객을 유지할 수 있는 마케팅 효과를 얻을 수 있다.
- 첫방문이 아닌 재방문 시에 적용할 수 있는 쿠폰 제공으로 좀 더 신뢰성있는 리뷰 작성이 가능하다.

# 또또가 기획
![1](https://github.com/Ttottoga/FE/assets/92720304/8a6be086-dd03-4437-89bd-a088f9768b08)
![2](https://github.com/Ttottoga/FE/assets/92720304/95b017ae-a759-41a7-b412-d91f51ac6834)
![3](https://github.com/Ttottoga/FE/assets/92720304/86fe65e6-5803-47f8-9af8-48637226abb3)
![4](https://github.com/Ttottoga/FE/assets/92720304/0b6fc39f-de0a-4fbe-94ca-d58c76628cb0)
![5](https://github.com/Ttottoga/FE/assets/92720304/f4f6a9f8-cd7a-4cd8-a451-d8b47e1679e3)

# Web 역할 분배
### 💗 핑크/하주영
- 홈 화면
- 검색 화면
- 지역, 메뉴별 화면
- 관심상점 화면

### 워니/강대원
- 리뷰 등록 화면
- 쿠폰함
  
### 숭/임지수
- 로그인
- 마이페이지 화면

### 사용 기술
- React
- Tailwind.css
- Context API
- Axios

# 기술 스택 및 구조
![stack](https://github.com/Ttottoga/FE/assets/101373627/694bd2e4-2906-4e02-9c5f-62c3df41c599)



# 프로젝트 구조
```
FE
├─ .env
├─ .git
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ public
│  ├─ index.html
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
├─ src
│  ├─ App.js
│  ├─ App.test.js
│  ├─ assets
│  ├─ components
│  │  ├─ CheckIcon.jsx
│  │  ├─ CouponCard.jsx
│  │  ├─ DownloadIcon.jsx
│  │  ├─ GoToLogin.jsx
│  │  ├─ HeartButton.jsx
│  │  ├─ Modal.jsx
│  │  ├─ SelectModal.jsx
│  │  └─ StoreCard.jsx
│  ├─ contexts
│  │  ├─ LoginContextProvider.jsx
│  │  └─ ModalContextProvider.jsx
│  ├─ hooks
│  │  └─ useInfiniteScroll.jsx
│  ├─ index.js
│  ├─ pages
│  │  ├─ Coupon.jsx
│  │  ├─ FailReview.jsx
│  │  ├─ FinishReview.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Header.jsx
│  │  ├─ Home
│  │  │  ├─ Heart.js
│  │  │  ├─ Main
│  │  │  │  ├─ Banner.js
│  │  │  │  ├─ Hot.js
│  │  │  │  ├─ Main.js
│  │  │  │  ├─ Review.js
│  │  │  │  └─ Top.js
│  │  │  ├─ Menu.js
│  │  │  ├─ Region.js
│  │  │  ├─ Search.js
│  │  │  └─ UserGuide.js
│  │  ├─ Login.jsx
│  │  ├─ MyPage.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ OngoingReview.jsx
│  │  ├─ ScreenReview.jsx
│  │  └─ Store.jsx
│  ├─ reportWebVitals.js
│  ├─ setupTests.js
│  └─ styles
│     └─ index.css
└─ tailwind.config.js

```

# 프레임워크 및 라이브러리
```
"dependencies": {
    "@pmmmwh/react-refresh-webpack-plugin": "^0.5.11",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.6.7",
    "cors": "^2.8.5",
    "react": "^18.2.0",
    "react-cookie": "^7.0.2",
    "react-dom": "^18.2.0",
    "react-kakao-login": "^2.1.1",
    "react-naver-login": "^0.1.4",
    "react-router-dom": "^6.22.0",
    "react-scripts": "^5.0.1",
    "tailwind-scrollbar-hide": "^1.1.7",
    "web-vitals": "^2.1.4"
  },
"devDependencies": {
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.33",
    "source-map-loader": "^5.0.0",
    "tailwindcss": "^3.4.1"
  }

```

# 커밋 컨벤션
<table>
  <tbody>
    <tr>
      <th>Tag Name</th>
      <th></th>
    </tr>
    <tr>
      <td>Feat</td>
      <td>새로운 기능 추가</td>
    </tr>
    <tr>
      <td>Fix</td>
      <td>버그 수정</td>
    </tr>
    <tr>
      <td>Docs</td>
      <td>문서 수정</td>
    </tr>
    <tr>
      <td>Style</td>
      <td>코드 포맷 변경, 세미 콜론 누락, 코드 수정 없는 경우</td>
    </tr>
    <tr>
      <td>Refactor</td>
      <td>코드 리팩토링</td>
    </tr>
    <tr>
      <td>Test</td>
      <td>테스트 코드, 리팩토링 테스트 코드 추가</td>
    </tr>
    <tr>
      <td>Chore</td>
      <td>소스 코드 건들지 않는 작업</td>
    </tr>
    <tr>
      <td>Design</td>
      <td>UI 디자인 변경</td>
    </tr>
    <tr>
      <td>Comment</td>
      <td>주석 추가/변경</td>
    </tr>
    <tr>
      <td>Rename</td>
      <td>파일명 혹은 폴더명 수정</td>
    </tr>
    <tr>
      <td>Remove</td>
      <td>파일 혹은 코드 제거</td>
    </tr>
    <tr>
      <td>!Breaking Change</td>
      <td>기존 기능에 영향을 주는 변경</td>
    </tr>
    <tr>
      <td>!HotFix</td>
      <td>긴급한 버그 수정</td>
    </tr>
  </tbody>
</table>
