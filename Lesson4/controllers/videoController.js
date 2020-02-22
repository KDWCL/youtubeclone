// globalRouter (Home은 홈에서 영상을 보여주기 위해서 여기에 넣어줌, Search는 영상서치를 위해 넣어줌)
export const home = (req, res) => res.render("home");
export const search = (req, res) => res.send("Search");
// videoRouter
export const videos = (req, res) => res.send("videos");
export const upload = (req, res) => res.send("upload");
export const videoDetail = (req, res) => res.send("videoDetail");
export const editVideo = (req, res) => res.send("editVideo");
export const deleteVideo = (req, res) => res.send("deleteVideo");
