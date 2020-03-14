import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    requiredL: 'Text is required'
  },
  createAt: {
    type: Date,
    default: Date.now // <- Date.now()를 하게되면 현재 날짜를 받음
  }
  /*video: {
    // video id를 가지고 오는 방법
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video'
  }*/
});

/*
video에 comment를 달 때 둘의 관계를 어떻게 연결시킬것인가?
1. comment에 video의 id를 저장하거나
2. video가 id의 array를 가지고 있거나
*/

/*
video에 comment를 달 때 둘의 관계를 어떻게 연결시킬것인가?
1. 모든 object들은 우리의 이름처럼 보통 id를 가지고 있다
2. 따라서 모든 comment의 정보를 저장하는 대신 모든 video들이 comment id들을 가지고 있으면 된다
*/

const model = mongoose.model('Comment', CommentSchema);
