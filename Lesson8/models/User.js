// user object임
// 1. npm install passport-local-mongoose <- 패스워드설정, 패스워드 확인 등등 그런것들을 자동으로 해준다(사용자인증)
// 2. npm install passport passport-local
import mongoose from "mongoose"
import passportLocalMongoose from "passport-local-mongoose"

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarUrl: String, // fileUrl과 똑같이 동작
    facebookId: Number,
    githubId: Number
})

UserSchema.Schema.plugin(passportLocalMongoose,{usernameField:'email'})
// passportLocalMongoose는 configuration object(설정객체)가 필요함
// passportLocalMongoose에게 어떤 field를 username으로 할 것인지를 알려줘야된다. (이메일로 할건지 아이디로할건지 등)
// User.plugin(passportLocalMongoose, options);
const model = mongoose.model("User", UserSchema);

export default model; 

/* 어떤 사람이 이메일을 입력했는데 이 이메일을 가진 깃헙 아이디가 있다는게 확인되면, 
   패스워드를 만들면 그 계정으로 접속할수있다 라고 알려줄 수 있음. */  