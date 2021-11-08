// Step1. html에서 값 넘겨받기
const number = document.getElementById("js-range"); // slide-bar
const title = document.querySelector(".js-title"); // title_range
const guess = document.getElementById("js-guess"); // player's guess
const display = document.getElementById("js-result"); // result

// Step2-1. js-range에 input이 들어오면 작동하는 함수 handleRange
const handleRange = (e) => {
    e.preventDefault(); 

const range = number.value
const titleSpan = title.querySelector("span");
titleSpan.innerHTML = `${range}`;
}

// Step3-1. number(=js-range)에 이벤트 input이 발생하면
// 함수 'handleRange'를 실행시킨다
number.addEventListener("input", handleRange);


// Step2-2. js-guess에 input이 들어오면 작동하는 함수 handlePlay
const handlePlay = (e) => {
    e.preventDefault(); // 꼭 handlePrint 첫 줄에 추가
    
const guess_input = guess.querySelector("input");
const player = parseInt(guess_input.value,10); // string -> decimal int 변환
const max = number.value // Computer가 고를 수 있는 최대값
const computer = Math.floor(Math.random()*max)+1; // 범위 내 난수 생성
const displaySpan = display.querySelector("span"); 
displaySpan.innerHTML = `
You choose : ${player}, 
Computer choose : ${computer}<br>
<strong>${player > computer ? "You win!" : "You lose!"}</strong>
`;
}

// Step3-2. guess(=js-guess)에 이벤트 submit이 발생하면
// 함수 'handlePlay'를 실행시킨다
guess.addEventListener("submit", handlePlay);