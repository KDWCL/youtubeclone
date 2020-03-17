import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());
/* Passport야 strategy를 하나 사용해 라고 할때 쓰인다.
 strategy는 로그인하는 방식임. */

 // passport-local이란 username과 password를 쓰는 사용자 인증방식을 의미함.(passport-facebook, passport-github)
