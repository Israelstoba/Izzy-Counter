var countElement = document.querySelector(".count-element");
var countLog = document.querySelector(".text-area");
var incrementBtn = document.querySelector(".increment");
var decrementBtn = document.querySelector(".decrement");
var saveBtn = document.querySelector(".save-count");
var checkerConfirm = document.querySelector(".checker-confirm");
var checkerCancel = document.querySelector(".checker-cancel");
var checkerBg = document.querySelector(".checker-container");
var resultBg = document.querySelector(".result-container");
var showResultBtn = document.querySelector(".show-result");
var exitResultBtn = document.querySelector(".exit-result");
var item = document.querySelector(".item-name");
var resetCount = document.querySelector(".reset-btn");

/////////////initialize the value of count to be 0
let count = 0;
///////////listen to the increment button when it is clicked
incrementBtn.addEventListener("click", () => {
  count++;
  countElement.innerHTML = count;
  countElement.classList.add("increment-active");
  countElement.classList.remove("decrement-active");

  colorChange();
});
///////////listen to the decrement button when it is clicked
decrementBtn.addEventListener("click", () => {
  count--;
  countElement.innerHTML = count;
  countElement.classList.add("decrement-active");
  countElement.classList.remove("increment-active");

  if (count <= 0) {
    countElement.innerHTML = 0;
    count = 0;
    countElement.classList.remove("decrement-active");
    countElement.classList.remove("increment-active");
  }

  colorChange();
});

saveBtn.addEventListener("click", () => {
  checkerBg.classList.add("checker-active");
});

//////////to  save the value of the countElement
checkerConfirm.addEventListener("click", () => {
  let itemName = item.value;
  countLog.innerHTML += itemName + " :" + " " + count + " , ";
  count = 0;
  countElement.innerHTML = 0;
  checkerBg.classList.remove("checker-active");
  countElement.classList.remove("increment-active");
  countElement.classList.remove("decrement-active");
  item.value = " ";
});
//////////to  cancel count entry
checkerCancel.addEventListener("click", () => {
  count = 0;
  countElement.innerHTML = 0;
  checkerBg.classList.remove("checker-active");
  countElement.classList.remove("increment-active");
  countElement.classList.remove("decrement-active");
  item.value = " ";
});

//////////// to add color change to the countElement

function colorChange() {
  // if (count > 0 && count <= 9) {
  //   countElement.classList.add("decrement-active");
  //   countElement.classList.remove("increment-active");
  // } else if (count > 0 && count >= 10) {
  //   countElement.classList.add("increment-active");
  //   countElement.classList.remove("decrement-active");
  // } else {
  //   countElement.classList.remove("increment-active");
  //   countElement.classList.remove("decrement-active");
  // }
}

//////////To show the count entry results

showResultBtn.addEventListener("click", () => {
  resultBg.classList.add("result-container__active");
});

exitResultBtn.addEventListener("click", () => {
  resultBg.classList.remove("result-container__active");
});

/////////////////To reset the count element
resetCount.addEventListener("click", () => {
  countElement.innerHTML = 0;
  count = 0;
  countElement.classList.remove("increment-active");
  countElement.classList.remove("decrement-active");
});
