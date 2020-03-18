// 사용자 인증을 위한 js 파일임
import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser())
/* passport야 쿠키에는 오직 user.id만 담아서 보내도록해 라고 말해주는 것임.
   passport-local-mongoose를 사용하여 shorcut(지름길)을 이용한다.
   http://www.passportjs.org/docs/username-password/ <- serailizeUser 참고 */
passport.deserializeUser(User.deserializeUser())
// deserializeUser은 쉽게 말해서 id를 받아서 사용자를 식별할때 사용


/* serialization 이라는 것은 기본적으로 "어떤 정보를 쿠키에게 주느냐"를 의미한다.
   지금 웹브라우저(클라이언트)에 있는 사용자에 대해서, 어떤 정보를 가질 수 있느냐 임.
   serialization은 어떤 필드가 쿠키에 포함될 것인지 알려주는 역할을 함
   실습할 때는 쿠키에 너무 많은 정보를 주지마라 - 보안에 매우 취약함*/

// deserialize는 그 쿠키의 정보를 어떻게 사용자로 전환하는가를 의미한다.

// 물론 serialization과 deserialize는 전부 passport-local-mongoose를 통해서 지름길로 사용가능




