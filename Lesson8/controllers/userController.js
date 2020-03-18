import routes from "../routes"
import User from '../models/User'

// globalRouter
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = async(req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // To Do: Register User
    // 사용자가입
   const user = await User.create({
     name,email
   });
   await User.register(user. password)
    // To Do: Log user in
    // 그사용자를 로그인시킴
    res.redirect(routes.home);
  }
};
export const getLogin = (req, res) => res.render('login', { pageTitle: 'Login' });
export const  postLogin = (req,res) =>{
  res.redirect(routes.home);
}


export const logout = (req, res) =>{
// To Do: Process Log Out
res.redirect(routes.home)
}


// userRouter
export const users = (req, res) => res.render('users', { pageTitle: 'Users' });
export const userDetail = (req, res) =>
  res.render('userDetail', { pageTitle: 'UserDetail' });
export const editProfile = (req, res) =>
  res.render('editProfile', { pageTitle: 'EditProfile' });
export const changePassword = (req, res) =>
  res.render('changePassword', { pageTitle: 'ChangePassword' });
