## Installing Pug

**Pug**란 **view engin**이다. 설치해보자

```
npm install pug
```

### app.set(name,value)

이것을 통해서 view engin 설정을 바꿔줄것이다. view engine설정의 기본값은 undefined이다. [공식문서](https://expressjs.com/en/5x/api.html#app.set)를 읽어보자.

- app.set("view engine", "pug")

  - view-engin 설정값을 pug로 바꾼다.

- Pug, express에는 view 파일들의 위치에 관한 기본 설정이 있다. 그 설정을 바꾸기 위해서는 'views'설정을 바꾸면 된다.

- Pug는 템플릿 언어이며, express의 view engin이다. pug은 html 파일들이 더 아름답게 보이도록 만들어준다.

- videoController.js에서 res.redner("home")을 하게되면 views라는 파일안에서 home.pug를 찾아서 보여준다.

- 직접 html,css 템플릿을 작성하는것보다 프로그래밍을 빠르게 가능하다.

---

## Layouts with Pug

- pug를 이용해서 html,css 작성을 할 수 있다.
- 또한 layouts 디렉토리를 만들고 그안에 main.pug 라는 파일을 만든다.
- 이러한 파일들의 이름은 아무거나 지어줘도 상관이 없다
- 이 main.pug의 역할은 html의 큰틀을 잡아주는 역할을 한다. 이 이유는 수많은 .pug 템플릿들이 생겨나고 그 안에 html을 작성해줘야되는데 공용으로 사용되는 부분들을 관리하기 위해서이다.

main.pug

    doctype html
    html
        head
            title Wetube
        body
            header
                h1 WeTube
            main
                block content
            footter
                span &copy; WeTube


    //- block안에 화면의 내용들이 채워질것임
    //- 나중가면 템플릿이 매우 많아지고 모든 pug템플릿에 footer내용이 하나 바뀌면 다바꿔줘야되기때문에
    //- 큰틀이되는 레이아웃을 하나 만들고 여기서 관리하게한다

home.pug

    extends layouts/main.pug

    block content
        p Hello!


    //- extends layouts/main.pug 뜻은 ./layouts/main.pug 파일을 복붙해서 가져오겠다는 뜻이다

- extends layouts/main.pug 뜻은 ./layouts/main.pug 파일을 복붙해서 가져오겠다는 뜻이다.
- home.pug에서 main.pug를 가져오고 그 안에 html들을 넣어준다.

---

## Partials with Pug

- parials라는 파일을 만들고 페이지에 공용으로 들어갈 템플릿들을 만들면된다.
- 대표적으로 header, footer가 있다. 어느 페이지나 들어가기 때문이다.

partials/footer.pug

    header.header
        .header__column
               i.fab.fa-youtube
        .header__column
            ul
                li
                    a(href="#") Join
                li
                    a(href="#") Log In

partials/header.pug

    header.header
        .header__column
               i.fab.fa-youtube
        .header__column
            ul
                li
                    a(href="#") Join
                li
                    a(href="#") Log In

layouts/main.pug

    doctype html
    html
        head
            script(src="https://kit.fontawesome.com/c26bdc350a.js", crossorigin="anonymous")
            title Wetube
        body
            include ../partials/header
            main
                block content
            include ../partials/footer



    //- block안에 화면의 내용들이 채워질것임
    //- 나중가면 템플릿이 매우 많아지고 모든 pug템플릿에 footer내용이 하나 바뀌면 다바꿔줘야되기때문에
    //- 큰틀이되는 레이아웃을 하나 만들고 여기서 관리하게한다
    //- partials안에 있는 footer.pug를 쓰고 싶으면 include 파일위치 를 해주면 된다

- include ../partials/header로 파일을 불러온다.
- include ../partials/footer로 파일을 불러온다.

---

## Local Variables in Pug

- 전역적인 변수들을 만들어서 쓰기 위한것이다.
- 미들웨어를 사용한다.
- 사용순서

  1.  app.use(localMiddleware); 를 app.js에 추가
  2.  localMiddleware.js 파일 생성

      localMiddleware.js

          import routes from './routes';

          export const localMiddleware = (req, res, next) => {
            res.locals.siteName = 'WeTube';
            res.locals.routes = routes;
            next();
          };

          // https://expressjs.com/ko/4x/api.html#res.locals
          // 전역적으로 사용할 수 있는 변수를 추가하는 방법임
          // 모든 템플릿에서 사용가능
          // 템플릿,뷰,모든곳에서 사용가능
          // next();를 써줘야 다음함수로 넘어간다.

  3.  사용(2가지만 적음)

  layouts/main.pug ( #{sitename} )

        doctype html
        html
            head
                script(src="https://kit.fontawesome.com/c26bdc350a.js", crossorigin="anonymous")
                title | #{siteName}
            body
                include ../partials/header
                main
                    block content
                include ../partials/footer


        //- block안에 화면의 내용들이 채워질것임
        //- 나중가면 템플릿이 매우 많아지고 모든 pug템플릿에 footer내용이 하나 바뀌면 다바꿔줘야되기때문에
        //- 큰틀이되는 레이아웃을 하나 만들고 여기서 관리하게한다
        //- partials안에 있는 footer.pug를 쓰고 싶으면 include 파일위치 를 해주면 된다

    partials/header.pug (routes.home, routes.join, routes.login)

        header.header
            .header__column
                a(href=routes.home)
                   i.fab.fa-youtube
            .header__column
                ul
                    li
                        a(href=routes.join) Join
                    li
                        a(href=routes.login) Log In

---

## Template Variables in Pug

- 한 템플릿안에서의 변수를 사용하기 위해서 배우는것이다.
- controller을 사용한다

  controllers/userController.js

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

        // render 함수의 첫번째 인자는 템플릿(.pug), 두번째 인자는 템플릿에 추가할 정보가 담긴 객체
        // pageTitle 변수가 해당 템플릿으로 전달 되어짐

  views/home.pug

        extends layouts/main.pug

        block content
            p Hello!


        //- extends layouts/main.pug 뜻은 ./layouts/main.pug 파일을 복붙해서 가져오겠다는 뜻이다
        //-  pageTitle: 'Home'을 받으면 extends한 main.pug에서 쓸 수 있다.

    layouts/main.pug

        doctype html
        html
            head
                script(src="https://kit.fontawesome.com/c26bdc350a.js", crossorigin="anonymous")
                title #{pageTitle} | #{siteName}
            body
                include ../partials/header
                main
                    block content
                include ../partials/footer


        //- home.pug에서 pageTitle 변수를 받았지만 extends 되었기 때문에 여기서 사용가능
