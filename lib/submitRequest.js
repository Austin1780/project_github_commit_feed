let addListener = function() {
  window.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("userInput");
    alert("button worked");
    document
      .getElementById("submitButton")
      .addEventListener("click", function() {
        form.submit();
      });
  });
};

module.exports = addListener;
