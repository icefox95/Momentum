const clock = document.querySelector("h2#clock")



//시계 함수 : 새로운 Date object를 매 초마다 생성 중이다.
function getClock(){
  const date = new Date()
  const hours = String(date.getHours()).padStart(2,"0")
  const minutes = String(date.getMinutes()).padStart(2,"0")
  const seconds = String(date.getSeconds()).padStart(2,"0")
  
  clock.innerText = `${hours}:${minutes}:${seconds}`
}
//sayHello()를 쓰면? 읽자마자 바로 함수 실행할거임.
//하지만 아래처럼 하면 바로 실행 안함.
//5초마다 이 함수를 호출함. 단위 : 밀리세컨드(ms)
//setInterval(sayHello,5000)

getClock()
setInterval(getClock,1000)

/*
위 코드 설명
한 번 getClock으로 불러내고
그 다음 1초 주기로 getClock 함수를 계속 불러내고 있음. ㅇㅋ?
*/