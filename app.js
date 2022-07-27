var countElement = document.querySelector(".count-element");
var countLogged = document.querySelector(".text-area");
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
var preloader = document.querySelector(".preloader-container");

/////////////////////////////////Webpage Preloader
window.addEventListener("load", () => {
  setTimeout(function () {
    preloader.classList.add("remove-preloader");
  }, 3600);
});

/////////////initialize the value of count to be 0
let count = 0;
///////////listen to the increment button when it is clicked
incrementBtn.addEventListener("click", () => {
  count++;
  countElement.innerHTML = count;
  countElement.classList.add("increment-active");
  countElement.classList.remove("decrement-active");
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
});

saveBtn.addEventListener("click", () => {
  checkerBg.classList.add("checker-active");
});

//////////////////////////////////////////////////to  save the value of the countElement
checkerConfirm.addEventListener("click", () => {
  ////////////////////the variable fetching the value of the input box
  let itemName = item.value;
  ////////////// Auto correcting letter case mixing issues
  let firstChar = itemName.slice(0, 1);
  let upperCaseFirstChar = firstChar.toUpperCase();
  let otherChar = itemName.slice(1, itemName.lenght);
  let lowerCaseOtherChar = otherChar.toLowerCase();
  let textCaseModified = upperCaseFirstChar + lowerCaseOtherChar;
  countLogged.innerHTML += textCaseModified + " :" + " " + count + "." + "\n";
  count = 0;
  countElement.innerHTML = 0;
  checkerBg.classList.remove("checker-active");
  countElement.classList.remove("increment-active");
  countElement.classList.remove("decrement-active");
  item.value = item.ariaPlaceholder;
  // validateNullRequest();
});
//////////to  cancel count entry
checkerCancel.addEventListener("click", () => {
  count = 0;
  countElement.innerHTML = 0;
  checkerBg.classList.remove("checker-active");
  countElement.classList.remove("increment-active");
  countElement.classList.remove("decrement-active");
  item.value = item.ariaPlaceholder;
});

//////////To show / close the count entry results

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

/////////////////// To validate an empty submission request

// function validateNullRequest() {
//   if ((itemName = " " && countElement.innerHTML == 0)) {
//     countLogged.innerHTML = " ";
//     countElement.innerHTML = " ";
//   }
//   else
// }

///////////////////////To make the countLogged Elemennt downloadable as a file of your choice

function downloadFile(filename, content) {
  const element = document.createElement("a");
  //////////A blob is a data type that can store binary data
  const blob = new Blob([content], {
    ////////////// the type can be set to any value based on your preffered file type
    type: "plain/text",
  });
  //////////// the createObjectURL() is a static method that creates a DOM string containing a URL representing the object given in the parameter
  const fileUrl = URL.createObjectURL(blob);

  ///////////setAttribute sets the value of an attrubute on the specified element
  element.setAttribute("href", fileUrl); //this is the file location
  element.setAttribute("download", filename); //this is the file name

  element.style.display = "none";

  ////////////////appenChild is to help move an element from one element to another
  document.body.appendChild(element);
  element.click();
  //////////////removeChild this method helps remove a child element from the Dom and again returns it as a node
  document.body.removeChild(element);
}

window.onload = () => {
  document.querySelector(".download-btn").addEventListener("click", (e) => {
    //////////////the value of the filename in the input field
    const filename = document.querySelector(".filename").value;

    //////////////the value of the text in the text div
    const content = document.querySelector(".text-area").innerHTML;

    if (filename && content) {
      downloadFile(filename, content);
    }
  });
};
