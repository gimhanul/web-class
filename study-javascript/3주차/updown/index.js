var counter = 0;
var randomNumber = Math.floor(Math.random()*100+1);   // 컴퓨터 무작위 수 생성 1 ~ 100 

const result = document.getElementById("display");

document.getElementById("try").onkeydown = (event) => {
    if (event.code == "Enter") {
        event.preventDefault();
        finding();
    }
}

function finding() {                                    
  var userNumber = document.getElementById("try").value;     // 사용자가 입력한 숫자 가져오기

  if (1 <= userNumber && userNumber <= 100) {
    if (randomNumber > userNumber) {                           
        result.innerText = "UP";
    } else if (randomNumber < userNumber) {
        result.innerText = "DOWN";
    } else {
        result.innerHTML = "<span style='color:red'>Right!</span>";
    }
    counter++;
    document.getElementById("counter").innerText = `${counter} 회 실행했어용`;
  } else {
    alert("1~100 사이의 수를 입력하세용.");
  }

  document.getElementById("try").value = "";
}