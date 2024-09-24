//remove Subject
const removeElement = document.querySelector(".rem-btn");

removeElement.addEventListener("click", removeElementFunction);

function removeElementFunction() {
  const lastNewInputEl = document.querySelector(".sub:last-of-type");
  let elements = document.getElementsByClassName("sub");
  let numberOfElements = elements.length;
  if (lastNewInputEl) {
    if (numberOfElements <= 2) {
      alert("Can't Remove");
    } else {
      subNumber--;
      calElement.removeChild(lastNewInputEl);
      calculatePrecentage();
    }
  }
}

//Add Subject
const addElement = document.querySelector(".add-btn");

const calElement = document.getElementById("calculator-container");

let subNumber = 3;

addElement.addEventListener("click", addElementFunction);

function addElementFunction() {
  const newInputEl = document.createElement("input");
  newInputEl.type = "number";
  newInputEl.placeholder = `Subject ${subNumber}`;
  subNumber++;
  newInputEl.min = 0;
  newInputEl.max = 100;
  newInputEl.required = true;
  newInputEl.classList.add("sub");
  calElement.appendChild(newInputEl);
}

//Calculate Result
const calButton = document.querySelector(".cal-btn");

const resultElement = document.querySelector(".result");

calButton.addEventListener("click", (e) => {
  e.preventDefault();
  calculatePrecentage();
});

function calculatePrecentage() {
  const subList = document.querySelectorAll(".sub");

  let total = 0;
  let subCount = 0;

  subList.forEach((subject) => {
    const marks = Number(subject.value);
    if (marks) {
      total += marks;
      subCount++;
    }
  });

  if (subCount === 0) {
    resultElement.textContent = "Enter Valid Marks In All Fields";
  } else {
    const per = total / subCount;
    resultElement.textContent = `Out of ${
      subCount * 100
    } Marks You Got ${total}, Result is ${per.toFixed(2)}%`;
  }
}
