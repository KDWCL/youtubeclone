// model은 데이터베이스에서 데이터를 읽고 생성하고 수정하는 프로그래밍 인터페이스를 정의함

import mongoose from 'mongoose';

/* 해야 할 것
1. model <- document name, 실제데이터
2. schema <- 형태라는 뜻
*/

const VideoSchema = new mongoose.Schema({
  // 스키마의 역할은 다큐먼트의 구조가 어떻게 생겼는지 알려주는 역할임
  fileUrl: {
    type: String,
    required: 'File URL is required'
  },
  title: {
    type: String,
    required: 'Tite is required'
  },
  description: String,
  views: {
    type: Number,
    default: 0
  },
  createAt: {
    type: Date,
    default: Date.now // <- Date.now()를 하게되면 현재 날짜를 받음
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
});

/* 헷갈리는 것
Date.now 자체는 function이고 Date.now()는 그 함수를 실행해서 현재 날짜를 반환하는 것*/

/*위의 스키마들을 이용하여 모델을 만들어보자
스키마란 definition(정의) 같은 것이며 이것을 이용해서 실제 document를 만든다
Video model의 스키마는 VideoSchema가 될 것이다 */
const model = mongoose.model('Video', VideoSchema);
/* 1.Video를 소문자로 만든 뒤 videos 복수형으로 바꿔주고 이것을 디비안의 컬렉션으로 저장한다
   2. 마지막 줄 mongoose.model()을 호출할 때 스키마가 등록된다. 즉 init.js에 import를 해줘야된다. 데이터베이스는 스키마가 있는지 모르기때문.*/
export default model;

