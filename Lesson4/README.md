## Installing Pug

**Pug**란 **view engin**이다. 설치해보자
```
npm install pug
```  

## app.set(name,value)
이것을 통해서 view engin 설정을 바꿔줄것이다. view engine설정의 기본값은 undefined이다. [공식문서](https://expressjs.com/en/5x/api.html#app.set)를 읽어보자.

* app.set("view engine", "pug")
    * view-engin 설정값을 pug로 바꾼다.

* Pug, express에는 view 파일들의 위치에 관한 기본 설정이 있다. 그 설정을 바꾸기 위해서는 'views'설정을 바꾸면 된다.

* Pug는 템플릿 언어이며, express의 view engin이다. pug은 html 파일들이 더 아름답게 보이도록 만들어준다.

* videoController.js에서 res.redner("home")을 하게되면 views라는 파일안에서 home.pug를 찾아서 보여준다.

* 직접 html,css 템플릿을 작성하는것보다 프로그래밍을 빠르게 가능하다.