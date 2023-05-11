// select html element

const counterBox = document.getElementById("CounterNumber");
const decBtn = document.querySelector("#decre");
const resetBtn = document.querySelector("#resetbtn");
const incBtn = document.querySelector("#incre");

let counter = 0;

decBtn.addEventListener("click", () => {
  counter--;
  if (counter > 0) {
    counterBox.innerText = counter;
  }
  if (counter < 0) {
    counterBox.innerText = counter;
    counterBox.style.color = "red";
  }
});

incBtn.addEventListener("click", () => {
  counter++;

  if (counter > 0) {
    counterBox.innerText = counter;
    counterBox.style.color = "green";
  }
  if(counter < 0 ){
    counterBox.innerText = counter;
  }
});

resetBtn.addEventListener('click' , () =>{
    counter = 0;
    counterBox.innerText = counter
    counterBox.style.color = "black"
})