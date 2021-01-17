window.addEventListener("load", function () {
  var popElem = document.getElementById("popElement");
  popElem.setAttribute("class", "popElem");

  document.addEventListener("scroll", function (event) {
    popElem.setAttribute("class", "show");
  });

  var button = document.getElementsByClassName("code");
  for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function (event) {
      content = event.target.value;
      window.navigator.clipboard.writeText(content);
      event.target.textContent = "CODE COPIED";
      event.target.setAttribute("class", "copyBtn");
    });
  }

  var input = document.getElementsByTagName("input");
  for (var i = 0; i < input.length; i++) {
    input[i].addEventListener("focus", function (event) {
      event.target.value = "Apply code here:";
    });
  }

  var closeElem = document.getElementById("closeBtn");
  closeElem.addEventListener("click", function () {
    popElem.setAttribute("class", "popElem");
  });
});
