// Canvas feature
    document.addEventListener("DOMContentLoaded", () => {
      const canvas = document.getElementById("drawingCanvas");
      const context = canvas.getContext("2d");
      let isDrawing = false;

      function startDrawing(e) {
        isDrawing = true;
        draw(e);
      }

    });
