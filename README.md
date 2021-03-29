# javascript_study

[TOC]

## Bundler

우리는 웹을 개발하면서 수많은 파일들이 생겨나는데, 완성된 웹사이트를 로딩을 해보면 정말 많은 파일들이 다운로드되는 것을 알수가 있다. 서버와의 접속이 많을수록 Application은 느리게 로딩되는데, 각각의 서로다른 패키지들이 예상치 못하는 충돌로 인해 Application이 깨진다. 이것을 해결하기 위해서 나온게 Bundler 라고한다. (Bundler는 묶는다는 뜻.) 거기에는 WebPack, Broserify, Parcel 등이 있다.

### 1. WebPack

(공식 문서: https://webpack.js.org/)

- 웹팩(Webpack 또는 webpack)은 오픈 소스 자바스크립트(JS) 모듈 번들러이다. 주로 자바스크립트(JS)를 위한 모듈 번들러이지만 호환 플러그인을 포함하는 경우 HTML, CSS, 심지어는 이미지와 같은 프론트엔드 자산들을 변환할 수 있다. 웹팩은 의존성이 있는 모듈을 취하여 해당 모듈을 대표하는 정적 자산들을 생성한다.

- 웹팩 설치에는 Node.js가 요구된다.

참고 문서 : 위키백과 (https://ko.wikipedia.org/wiki/%EC%9B%B9%ED%8C%A9)

- WebPack을 도입했을 때 얻을 수 있는 효과는 리팩토링이다. 리팩토링은 구동되는 방법은 그대로 유지하면 내부의 코드를 더 효율적으로 바꾸는 행위이다.

- Webpack을 핸들링하는 방법 2가지(사실 3가지)

  ```
  1. npx webpack --entry ./webpack/src/index.js --output-path ./webpack/public/index._bundle.js (--output 으로 되는 환경도 있다.)

  - Command Line (Terminal 이나 Cmd)에서 명령어를 통해 옵션을 줘서 index.js를 Bundling을 한다. 경로는 사용자 정의.


  2. npx webpack --config webpack.config.js

  - 위의 파일처럼 webpack.config.js 파일에서 webpack에게 시키고 싶은 명령을 작성하면 된다. 파일명을 webpack.config.js 로 했다면 명령어를 webpack.config.js를 생략하고 npx webpack 로 해도 된다.
  ```
