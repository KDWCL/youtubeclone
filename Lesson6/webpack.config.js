const path = require('path');
// import path from 'path'; <- 최신문법을 사용 못하기 때문에 위에껄 사용

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
