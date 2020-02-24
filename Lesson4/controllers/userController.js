// globalRouter
export const join = (req, res) => res.render('Join', { pageTitle: 'Join' });
export const login = (req, res) => res.render('Login', { pageTitle: 'Login' });
export const logout = (req, res) =>
  res.render('Logout', { pageTitle: 'Logout' });
// userRouter
export const users = (req, res) => res.render('users', { pageTitle: 'Users' });
export const userDetail = (req, res) =>
  res.render('userDetail', { pageTitle: 'UserDetail' });
export const editProfile = (req, res) =>
  res.render('editProfile', { pageTitle: 'EditProfile' });
export const changePassword = (req, res) =>
  res.render('changePassword', { pageTitle: 'ChangePassword' });
