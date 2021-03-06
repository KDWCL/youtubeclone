import express from 'express';
import routes from '../routes';
import {
  postUpload,
  getUpload,
  videoDetail,
  geteditVideo,
  posteditVideo,
  deleteVideo
} from '../controllers/videoController';
import { uploadVideo } from '../middlewares';

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), geteditVideo);
videoRouter.post(routes.editVideo(), posteditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
