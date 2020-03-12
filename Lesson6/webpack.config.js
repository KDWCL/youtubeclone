const path = require('path');
// import path from 'path'; <- 최신문법을 사용 못하기 때문에 위에껄 사용, 즉 모던자바스크립트가 아님

const ENTRY_FILE = path.resolve(__dirname, 'assets', 'js', 'main.js');
const OUTPUT_DIR = path.join(__dirname, 'static');

const config = {
  entry: ENTRY_FILE,
  output: {
    path: OUTPUT_DIR,
    filename: '[name].[format]'
  }
};

module.exports = config;

/* webpack은 entry, ouput 2개를 들고있음
   entry은 파일들이 어디에서 왔는가?
   output은 파일들을 어디에 넣을 것인가 임 */
