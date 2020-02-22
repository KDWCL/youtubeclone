# Recap

## code

* routes.js 파일안에 경로 전부 설정 (나중에 헷갈리지 않기 위해)

* router 파일안에 globalRouter.js, userRouter.js, videoRouter.js 생성

*  controllers 파일안에 userController.js, videoController.js 생성

## Middleware

>**cookieParser**    
>>* cookie를 전달받아서 사용할 수 있도록 만들어주는 미들웨어.   
>>* 사용자 인증같은 곳에서 쿠키를 검사할 때 사용.

>**bodyParser**   
>* 사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어.
>* request정보에서 form이나 json형태로 된 body를 검사   
>* 아바타의 사진이나 비디오를 업로드 할 때, 제목이나 댓글 같은 정보를 전달할때 form에 담아서 업로드한다.

>**helmet**   
>* application이 더 안전하도록 만들어준다.

>morgan   
>* application에서 발생하는 모든 일들을 logging하는 한다.

# 다음시간에 할 것

## Pug.js(express에 설치)
* Pug는 express View를 다루는 방식 중 하나.

* express로 HTML을 보여줄 수 있다.

* res.send대신에 실제 html을 전달함.

* css 같은 것들로 꾸미기 가능.
