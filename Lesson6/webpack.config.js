const path = require('path');
// import path from 'path'; <- 최신문법을 사용 못하기 때문에 위에껄 사용, 즉 모던자바스크립트가 아님
const ExtractCss = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const MODE = process.env.WEBPACK_ENV;
/* 이것은 dot.env를 이용하는것이고 .env에 추가하지 않고 수동으로 package.json에서 추가해준것이다.
   "dev:assets": "WEBPACK_ENV=development webpack"의 WEBPACK_ENV와 같아야 된다. */

const ENTRY_FILE = path.resolve(__dirname, 'assets', 'js', 'main.js');
const OUTPUT_DIR = path.join(__dirname, 'static');

const config = {
  mode: MODE,
  entry: ENTRY_FILE,
  module: {
    // 모듈의 역할은 확장자 scss인 파일을 만날때마다 어떤 loader을 실행시켜라임
    rules: [
      {
        /* 우리가 해야 될 것
        1. scss파일을 찾는다
        2. scss파일을 css파일로 변형
        3. 전체 텍스트 중에 그 css 텍스트를 추출 및 이해
        4. 그 추출된 css 텍스트들을 하나의 파일로 만든다 */

        /* loader라는 것은 기본적으로 webpack에게 파일을 처리하는 방법을 알려주는 역할
           원래 webpack은 아무것도 할줄 모름, loader를 추가해줘야, 비로서 webpack이 파일 다르는법을 알게 된다
           파일을 만나면 그 파일이 scss인지 알아봐 라고 시켜보자 */

        test: /\.(scss)$/,
        /* 정규식임. 시작은 /\ 마무리는 $/, 더 찾고싶은 파일이 있으면 .scss|.sass 이렇게 해줌
           test의 의미는 파일을 만나면 그파일이 .scss파일인지 알아봐 라는 것임 */
        use: ExtractCss.extract([
          /* webpack은 이파일을 실행시키는 순서가 거꾸로 되어있음. 밑에서부터 위로 올라감 
             그래서 extract(추출)하는것부터 써줘야한다. 
             적는순서 :  css 텍스트 추출 -> css 파일이해 -> sass 파일을 css 파일로 변형
             */
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader', // 이 로더는 호환성 유지를 위해 만들어줌
            options: {
              plugin() {
                return [autoprefixer({ browser: 'cover 99.5%' })];
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ])
      }
    ]
  },
  output: {
    path: OUTPUT_DIR,
    filename: '[name].js'
  },
  plugins: [new ExtractCss('styles.css')]
};

module.exports = config;

/* webpack은 entry, ouput 2개를 들고있음
   entry은 파일들이 어디에서 왔는가?
   output은 파일들을 어디에 넣을 것인가 임 */
