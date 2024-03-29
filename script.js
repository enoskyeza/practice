// Canvas feature
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("drawingCanvas");
  const context = canvas.getContext("2d");
  let isDrawing = false;

  function startDrawing(e) {
    isDrawing = true;
    draw(e);
  }

  function stopDrawing() {
    isDrawing = false;
    context.beginPath();
  }

  function draw(e) {
    if (!isDrawing) return;

    context.lineWidth = 5;
    context.lineCap = "round";
    context.strokeStyle = "#000";

    context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  }

  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mousemove", draw);
});

// Variable Declaration:
let myVar = 42;

// Data Types
// Three data types: number, string, boolean

// Arrays
let fruits = ["apple", "banana", "orange"];

// functions
function multiply(a, b) {
  return a * b;
}

// Conditions
let x = 2;
if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is not greater than 10");
}

// loops
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// objects
let person = {
  name: "Your Name",
  age: 25,
};

// Array manipulation
fruits.push("grape");

// Function parameter
function greet(name) {
  return "Hello, " + name + "!";
}

// String manipulation
let sentence = "JavaScript is fun!";
let funWord = sentence.slice(13, 16);
console.log(funWord);

// Objects & methods
person.getBirthYear = function () {
  return new Date().getFullYear() - this.age;
};

// Asynchronous JavaScript (Promises)
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

// Event Handling
let myButton = document.getElementById("myButton");
myButton.addEventListener("click", function () {
  console.log("Button clicked!");
});

// Practice II

function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

let calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

function reverseString(str) {
  return str.split("").reverse().join("");
}

async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

async function fetchDataAsync() {
  const result = await fetchData();
  console.log(result);
}

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputValue = document.querySelector("input").value;
  console.log(inputValue);
});

function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function outer() {
  return function inner() {
    console.log("Hello, Closure!");
  };
}

const innerFunction = outer();
innerFunction();

function filterEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}

const jsonString = '{"name": "John", "age": 30, "address": "123 Main St"}';
const person = JSON.parse(jsonString);

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("First part done!");
    }, 1000).then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("All done!");
        }, 1000);
      });
    });
  });
}

const ul = document.querySelector("ul");
ul.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log(event.target.textContent);
  }
});

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// PRACTICE 4

// chal-01 js

const toggleButton = document.getElementById("toggleButton");
const highlightDiv = document.getElementById("highlightDiv");

toggleButton.addEventListener("click", function () {
  highlightDiv.classList.toggle("highlight");
});

// chal-02 js
const formEl = document.getElementById("myForm");
const textInput = document.getElementById("textInput");
const errorMessage = document.getElementById("errorMessage");

formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  if (textInput.value.trim() === "") {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    // Additional logic for form submission
  }
});

// chal-03 js
const myList = document.getElementById("myList");
const addItemButton = document.getElementById("addItemButton");

addItemButton.addEventListener("click", function () {
  const listItem = document.createElement("li");
  listItem.textContent = "New Item";
  myList.appendChild(listItem);
});

// chal-05 js
const imageCarousel = document.getElementById("imageCarousel");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentImageIndex = 0;

function showImage(index) {
  imageCarousel.innerHTML = `<img src="${images[index]}" alt="Image ${
    index + 1
  }">`;
}

prevButton.addEventListener("click", function () {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
});

nextButton.addEventListener("click", function () {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
});

showImage(currentImageIndex);
