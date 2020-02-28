import express from 'express';
import routes from '../routes';
import {
  users,
  changePassword,
  userDetail,
  editProfile
} from '../controllers/userController';

const userRouter = express.Router();

userRouter.get(routes.home, users);
userRouter.get(routes.editProfile, editProfile);
// 시간 많이 잡아먹은 부분. users/:id로 인식해서 안되는거였음.
// 적는 순서를 중요하게 보자. 문제점: edit-profile로 접속이 안되어지고 userDetail로 접속되어짐
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
