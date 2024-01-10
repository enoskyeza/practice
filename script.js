
    // JavaScript for Drag and Drop functionality
    function allowDrop(ev) {
      ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }
