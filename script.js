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

