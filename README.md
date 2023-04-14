# 원티드 프리온보딩 프론트엔드 - 선발 과제
📎 [배포 링크 바로가기](https://hityouwiththattodotodoto.netlify.app/)
## 🗓 프로젝트 개발 기간
2023.04.02 ~ 2023.04.14
## ⚙️ 개발 환경
<table>
      <thead align="center">
        <tr>
          <th colspan="2" style="text-align:center;"><span style="font-size:16px;">프론트엔드</span></th>
          <th style="text-align:center;"><span style="font-size:16px">백엔드</span></th>
          <th style="text-align:center;"><span style="font-size:16px">배포</span></th>
          <th colspan="2" style="text-align:center;"><span style="font-size:16px;">디자인</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="center" style="text-align:center;">
            <a href="https://reactjs.org/" target="_blank"><img style="margin: 10px" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1579667701/noticon/basd2y5bygpkqjiixuqy.png" alt="React" height="50" /></a>
            <br>
            <code>React</code>
          </td>
          <td align="center" style="text-align:center; margin: 0 auto;">
            <a href="https://styled-components.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/styled-components.png" alt="Styled Components" height="50" /></a>
            <br>
            <code>styled-components</code>
          </td>
          <td align="center" style="text-align:center;">제공된<br>API 사용</td>
          <td align="center" style="text-align:center;">
            <a href="https://www.netlify.com/" target="_blank"><img style="margin: 10px" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1569039210/noticon/yubwjrkj43jpneajrdii.png" alt="Styled Components" height="50" /></a>
            <br>
            <code>Netlify</code>
          </td>
          <td align="center" style="text-align:center; margin: 0 auto;">
            <a href="https://www.figma.com/file/WpeIj4WFseoEo3WC03IWPj/%EA%B3%BC%EC%A0%9C?node-id=0%3A1&t=SVh3PepbJOCe77HE-1" target="_blank">
              <img style="margin: 10px" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640982247/noticon/tpvr26zp02angin4t0jv.png" alt="Styled Components" height="50" /><br>
              <span>작업시 사용한<br>피그마 링크</span>
            </a>
            <br>
            <code>Figma</code>
          </td>
        </tr>
      </tbody>
</table>

### ⛓️ node modules
|모듈명|용도|
|-|-|
|react-router-dom|페이지 라우팅을 위해 사용|
|axios|서버와 통신을 위해 사용|
|styled-components|스타일 구현의 편의를 위해 사용|
|styled-reset|스타일 초기화 위해 사용|
## 🏃‍♀️ 프로젝트 실행 방법
1. 레포지토리 클론
    ```
    git clone https://github.com/SEMINSEMINSEMIN/wanted-pre-onboarding-frontend.git
    ```
2. 프로젝트 소스 코드 폴더로 이동
    ```
    cd wanted-pre-onboarding-frontend   
    ```
3. 필요한 모듈 설치
    ```
    npm install
    ```
3. 로컬 환경에서 리액트 앱 실행
    ```
    npm start
    ```
## 🏗 폴더 구조 및 리액트 디자인 패턴
### 🎨 디자인 패턴
UI 재사용뿐만 아니라 로직또한 재사용하기 위해 [Hooks Pattern](https://www.patterns.dev/posts/hooks-pattern)를 사용했습니다.

### 📂 폴더 구조
특이사항
  * 공용 훅: src/hooks/
  * 공용 컴포넌트: src/components/common/
  * 페이지별 컴포넌트: src/components/home/, src/components/todo/
    * 해당 페이지에서만 사용하는 컴포넌트의 경우 하위 폴더인 hooks/에 넣었습니다.
<br>
<details>
    <summary>폴더 구조 자세히 보기</summary>
    <pre>
src
├── App.jsx
├── app.style.js
├── assets
│   ├── icon-404-2.png
│   ├── icon-404.png
│   ├── icon-cancel.svg
│   ├── icon-delete.svg
│   ├── icon-edit.svg
│   ├── icon-editSubmit.svg
│   ├── icon-hamburger.svg
│   ├── icon-home.svg
│   ├── icon-logout.svg
│   ├── logo.png
│   └── logo2.png
├── components
│   ├── common
│   │   ├── BackDrop
│   │   │   ├── BackDrop.jsx
│   │   │   └── backDrop.style.js
│   │   ├── Button
│   │   │   ├── Button.jsx
│   │   │   └── ButtonSvg
│   │   │       ├── ButtonSvg.jsx
│   │   │       └── buttonSvg.style.js
│   │   ├── Form
│   │   │   └── Form.jsx
│   │   ├── FormCont
│   │   │   └── FormCont.jsx
│   │   ├── LabelOnTop
│   │   │   ├── LabelOnTop.jsx
│   │   │   └── labelOnTop.style.js
│   │   ├── Loading
│   │   │   ├── Loading.jsx
│   │   │   ├── hooks
│   │   │   │   └── useGetCircles.jsx
│   │   │   └── loading.style.js
│   │   ├── Modal
│   │   │   ├── Modal.jsx
│   │   │   └── modal.style.js
│   │   ├── UserInput
│   │   │   ├── UserInput.jsx
│   │   │   └── userInput.style.js
│   │   └── WarnMsg
│   │       ├── WarnMsg.jsx
│   │       └── warnMsg.style.js
│   ├── home
│   │   ├── Btns
│   │   │   ├── BtnsOnLogIn.jsx
│   │   │   ├── BtnsOnLogout.jsx
│   │   │   └── btns.style.js
│   │   ├── Logo
│   │   │   ├── Logo.jsx
│   │   │   └── logo.style.js
│   │   └── hooks
│   │       ├── useBtnsOnLogin.jsx
│   │       └── useBtnsOnLogout.jsx
│   └── todo
│       ├── Item
│       │   └── Item.jsx
│       ├── List
│       │   ├── List.jsx
│       │   └── list.style.js
│       ├── ListItem
│       │   ├── ListItem.jsx
│       │   └── listItem.style.js
│       ├── Sidebar
│       │   ├── Sidebar.jsx
│       │   └── sidebar.style.js
│       ├── TodoInp
│       │   ├── TodoInp.jsx
│       │   └── todoInp.style.js
│       ├── Topbar
│       │   ├── Topbar.jsx
│       │   └── topbar.style.js
│       └── hooks
│           ├── useCheckbox.jsx
│           ├── useEdit.jsx
│           ├── useListRender.jsx
│           ├── useRemove.jsx
│           ├── useSidebar.jsx
│           └── useTodoInp.jsx
├── context
│   ├── AuthContext.jsx
│   ├── AuthContextProvider.jsx
│   └── hooks
│       └── useAuth.jsx
├── hooks
│   ├── use-http.jsx
│   ├── useLocalStorage.jsx
│   └── useValidityCheck.jsx
├── index.js
├── pages
│   ├── Home.jsx
│   ├── NotFound.jsx
│   ├── SignIn.jsx
│   ├── SignUp.jsx
│   └── Todo.jsx
├── routes
│   └── Router.jsx
└── utils
    └── debounce.js
  </pre>
</details>

## 🌳 브랜치 전략 및 자동화
### 🔀 GitHub Flow 전략
개인 프로젝트이고 프로젝트의 규모가 작아 GitHub Flow를 Git branch 전략으로 선택했습니다.

### 🏭 브랜치 생성 자동화
[Create Issue Branch](https://github.com/marketplace/actions/create-issue-branch#license)를 이용했습니다.

자동화의 내용은 다음과 같습니다.
* 이슈가 생성될 때마다 <code>이슈에 설정된 라벨/issue-이슈번호</code>의 이름의 브랜치가 자동으로 생성되도록 설정했습니다.
* 이슈에 해당하는 브랜치 생성이 완료되면 아래와 같은 댓글이 달립니다.
* 브랜치에 대한 PR이 merge 되면 이슈가 자동으로 close 됩니다.

사용시 장점은 다음과 같습니다.
* GitHub Flow 전략에 적합합니다.
* 컨벤션을 따라 브랜치명을 매번 생성하는 수고로움을 덜어줍니다.
* 이슈, 깃허브 프로젝트를 사용하여 진행 상황을 기록하는 데에 생기는 번거로움을 최소화하였습니다.

### 🕸 Netlify 연결
프로젝트 생성 초기에 현재 레포지토리를 Netlify와 연결했습니다. 풀리퀘스트를 하면 Netlify에서 빌드 및 배포 프리뷰를 제공해줍니다. 만약 배포 과정 또는 배포 프리뷰 사이트에서 문제가 있을경우, 해당 문제를 해결하고 머지 합니다. 풀리퀘스트를 머지하게 되면 자동으로 최신 코드가 반영되어 배포된 사이트가 업데이트 됩니다.

## 📐 컨벤션
### 🐱 커밋 컨벤션
```
1. 커밋 유형 지정
    - 커밋 유형은 영어로 작성하며, 첫 글자를 대문자로 합니다
    - 한 번에 여러 유형이 있는 경우 &로 연결합니다: ex) Markup & Style
    - 커밋 유형
        - Feat : 새로운 기능, 특징 추가
        - Fix : 수정, 버그 수정
        - Docs : 문서에 관련된 내용, 문서 수정
        - Markup: 마크업
        - Style : 스타일링, 코드 포맷팅
        - Refactor : 리팩토링
        - Chore : 빌드 업무 수정, 패키지 매니저 수정
        - Etc: 그 외

2. 커밋 메시지는 제목 & 본문으로 구성합니다. 제목과 본문은 빈 행으로 분리합니다.

    git commit -m "Feat: 로그인 기능 구현 #13 //제목
    
        - 로그인 유효성 검사 //본문
        - 로그인 정보 서버로 전송" //본문

3. 커밋메시지의 제목 끝에는 이슈 번호를 달아 이슈와 연결해줍니다.

    git commit -m "Feat: 로그인 기능 구현 #13"
```

### 💻 코드 컨벤션
```
🛼 컴포넌트로 분리된 파일은 PascalCase으로 작성합니다.

🐫 컴포넌트가 아닌 파일, 함수명, 변수명은 camelCase로 작성합니다.

💄 다른 스타일 시트 파일(Styled-components)은, 스타일 시트 적용할 파일명 .style.js를 붙여주고, 앞글자는 소문자로 합니다. (확장자는 .js)

🐫 함수명, 변수명은 camelCase로 작성합니다.

❓ 만약 변수에 할당되는 값이 boolean인 경우에는 is를 접두사로 붙입니다.

💬 문자열을 처리할 때는 쌍따옴표를 사용하도록 합니다.

🔚 문장이 종료될 때는 세미콜론을 붙여줍니다.

🧮 연산자 사이에는 공백을 추가하여 가독성을 높입니다.

📠 콤마 다음에 값이 올 경우 공백을 추가하여 가독성을 높입니다.

🏭 함수명은 동사로 작성합니다.

😎 들여쓰기 공백은 4칸으로 합니다.
```
