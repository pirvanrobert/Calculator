const screen = document.getElementById('screen');
const counts = document.querySelector('.count');
const displayresult = document.querySelector('.result');

let history = [];
const operands = ['+', "-", "/", "*", '%']


document.querySelectorAll(".num, .operator").forEach((element) => {
  element.onclick = function() {
    if (element.textContent === 'x') {
      history.push('*');
    } else {
      history.push(element.textContent);
    }
    displayCalc();
  }
})


document.querySelector(".equality-button").onclick = function() {
  displayResult();
  history = [displayresult.textContent];
}


document.querySelector(".clear-result").onclick = function() {
  history = [];
  displayresult.textContent = "0";
  counts.textContent = "";
}

document.querySelector(".back").onclick = function() {
  history.splice(-1, 1);
  displayCalc();
}

function displayCalc() {
  counts.textContent = history.join('');
}

function displayResult() {
  displayresult.textContent = eval(history.join(''));
}


