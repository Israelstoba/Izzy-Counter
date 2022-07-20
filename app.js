var countElement = document.querySelector(".count-element");
var countLog = document.querySelector(".entry-log");

countElement.innerHTML = 0;
let increment = -1;
let decrement = 0;

function countIncrement() {
  increment += 1;
  countElement.innerHTML = increment + 1;
}

function countDecrement() {
  decrement = increment += -1;
  countElement.innerHTML = decrement + 1;

  if (decrement <= 0) {
    countElement.innerHTML = 0;
    increment = -1;
    decrement = 0;
  }
}

function saveEntry() {
  let newCount = countElement.innerHTML;
  countLog.innerHTML += " " + newCount + " , ";
  countElement.innerHTML = 0;
  increment = -1;
  decrement = 0;

  //   /////////////to confirm entry submittion ///////////
  //   function checker() {
  //     let result = confirm("Are you sure you want to save this entry?");
  //     if (result == false) {
  //       e.preventDefault();
  //     } else {
  //     }
  //   }
  //   checker();
}

function cancelEntry() {
  countElement.innerHTML = 0;
  increment = -1;
  decrement = 0;
}

///////////////checker
var checkerOpen = document.querySelector(".save-entry");
var checkerClose = document.querySelector(".checker-cancel");
var checkerBg = document.querySelector(".checker-container");

///////checker appears
checkerOpen.addEventListener("click", function () {
  checkerBg.classList.add("checker-active");
});

///////// checker exits
checkerClose.addEventListener("click", function () {
  checkerBg.classList.remove("checker-active");
});

///////////////remove checkerbg with the checker-confirm btn
var removeWithCheckerConfirm = document.querySelector(".checker-confirm");

removeWithCheckerConfirm.addEventListener("click", () => {
  checkerBg.classList.remove("checker-active");
});
