let number = Math.floor(Math.random() * 101);
let count = 0;
const input1 = document.querySelector("#input1");
const butt1 = document.querySelector("#butt1")
const butt2 = document.querySelector("#butt2");
const result = document.querySelector("#result");

butt1.onclick = function () {
  if(input1.value > number){
    count++;
    result.innerHTML = "<div class='accent_down'>DOWN!</div>";
    document.querySelector("footer").innerText = `시도 횟수 : ${count}회`;
  }
  else if(input1.value < number){
    count++;
    result.innerHTML = "<div class='accent_up'>UP!</div>";
    document.querySelector("footer").innerText = `시도 횟수 : ${count}회`;
  }
  else{
    count++;
    result.innerHTML = "<div class='accent_suc'>SUCCESS!</div>";
    document.querySelector("footer").innerText = `시도 횟수 : ${count}회`;
  }
}
butt2.onclick = function () {
  number = Math.floor(Math.random() * 101);
  result.innerHTML = "RESTART";
  input1.value = 0;
  input1.focus();
  document.querySelector("footer").innerText = "시도 횟수 : 0회";
}