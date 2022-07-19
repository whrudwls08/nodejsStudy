# nodejsStudy
nodejs 패스트캠퍼스를 활용하여 공부

# start
npm start = nodemon start

# Chapter1-1
왜 Express를 사용하는가
  1. 웹서비스 관점 
  2. 프레임워크 선정시 고려해야 될점 
# Chapter1-2
서벅 코드를 변경 할 때마다, 서버를 재시작해야 하는데 nodemon 이라는 도구를 사용하면 저장시 서버가 자동으로 재시작됩니다.
nodemon 사용법
  1. npm install -g nodemon ( nodemon 설치 )
  2. package.json > script 에서 설정하면 더 쉽게 사용할 수 있다.
  ex) "start" : "nodemon app.js"  >  terminal에서 npm start 시 더 쉽게 nodemon 사용가능 
# Chapter1-3
Routing 모든 경로를 js에서 관리하기엔 지저분하기 때문에  
routes 파일안에서 관리한다.
# Chapter1-4
view engine
nunjucks 기초 -1
