import {videos} from "../db"
import routes from "../routes"
// globalRouter
// Home은 홈에서 영상을 보여주기 위해서 여기에 넣어줌, Search는 영상서치를 위해 넣어줌)
export const home = (req, res) => res.render('home', { pageTitle: 'Home',videos },/*videos:videos*/);
export const search = (req, res) =>{
const {query:{term: searchingBy}} = req;
console.log(searchingBy)
//const searchingBy = req.query.term <- es6이전 문법
res.render('search', { pageTitle: 'Search',searchingBy,videos });
};
// videoRouter
export const getUpload = (req, res) =>
  res.render('upload', { pageTitle: 'Upload' });

export const postUpload = (req, res) =>{ 
  const {body:{file,title,description}} = req;
  // To Do: Upload and save video
  res.redirect(routes.videoDetail(324393))
}
  

export const videoDetail = (req, res) =>
  res.render('videoDetail', { pageTitle: 'videoDetail' });
export const editVideo = (req, res) =>
  res.render('editVideo', { pageTitle: 'EditVideo' });
export const deleteVideo = (req, res) =>
  res.render('deleteVideo', { pageTitle: 'DeleteVideo' });

// render 함수의 첫번째 인자는 템플릿(.pug), 두번째 인자는 템플릿에 추가할 정보가 담긴 객체
// pageTitle 변수가 home 템플릿으로 전달 되어짐
