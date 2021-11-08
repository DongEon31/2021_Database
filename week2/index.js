
// Step1. for로 html에서 값을 넘겨받기.
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("mail");
const userid = document.getElementById("userid");
const printForm = document.getElementById("user"); 
const display = document.getElementById("form-result");

// Step2. 넘겨받은 Object의 value(data)를 할당,저장하는 함수.
const handlePrint = (e) => {
e.preventDefault(); // 꼭 handlePrint 첫 줄에 추가

const fn = firstName.value
const ln = lastName.value
const em = email.value
const id = userid.value

//Step3. html로 코드를 넘겨준다
const displaySpan = display.querySelector("span");
displaySpan.innerHTML = `
First Name  ${fn}<br>
Last Name  ${ln}<br>
E-mail  ${em}<br>
ID  ${id}`;
};

//이벤트 submit을 누르면 함수 'handlePrint'를 실행시킴
printForm.addEventListener("submit", handlePrint);
