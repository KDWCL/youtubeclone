import routes from '../routes';
import Video from '../models/Video';
// 이 부분은 모델일뿐이지 element가 아니다

// globalRouter
// Home은 홈에서 영상을 보여주기 위해서 여기에 넣어줌, Search는 영상서치를 위해 넣어줌)
export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render('home', { pageTitle: 'Home', videos });
  } catch (error) {
    console.log(error);
    res.render('home', { pageTitle: 'Home', videos: [] });
  }
  /* try, catch문을 해주는 이유는 await가 끝날때 까지 기다리는 용도이지 제대로 성공했는지 확인하는 용도가 아니기 때문이다
     만약 error를 던져서 실험해보고 싶다면 res.render 위에 throw Error("lalala")를 적어주면 된다
     const videos = await Video.find({});
     throw Error("lalala")
     res.render('home', { pageTitle: 'Home', videos }); */
};
export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  console.log(searchingBy);
  //const searchingBy = req.query.term <- es6이전 문법
  res.render('search', { pageTitle: 'Search', searchingBy, videos });
};
// videoRouter
export const getUpload = (req, res) =>
  res.render('upload', { pageTitle: 'Upload' });

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  console.log(req.file);
  const newVideo = await Video.create({
    // 여기서의 Video는 models/Vidoe.js 임
    fileUrl: path,
    title,
    description
  });
  res.redirect(routes.videoDetail(newVideo.id));
  console.log(newVideo);
};

export const videoDetail = async (req, res) => {
  try {
    // console.log(req.params);
    const {
      params: { id }
    } = req;
    const video = await Video.findById(id);
    console.log(video);
    // console.log(id);
    res.render('videoDetail', { pageTitle: 'videoDetail', video });
  } catch (error) {
    console.log(error); // 에러 표시
    res.redirect(routes.home); // home으로 다시 리다이렉트
  }
};
export const geteditVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render('editVideo', { pageTitle: `'Edit ${video.title}`, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const posteditVideo = (req, res) => {};

export const deleteVideo = (req, res) =>
  res.render('deleteVideo', { pageTitle: 'DeleteVideo' });

// render 함수의 첫번째 인자는 템플릿(.pug), 두번째 인자는 템플릿에 추가할 정보가 담긴 객체
// pageTitle 변수가 home 템플릿으로 전달 되어짐
