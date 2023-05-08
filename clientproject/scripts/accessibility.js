document.querySelector("body").addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    // Enter key
    event.target.click();
  }
});
