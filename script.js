var themeButton = document.getElementById("themeButton");
var container = document.querySelector(".container");
var header = document.querySelector(".header");

themeButton.addEventListener("click", function() {
	if (container.classList.contains("dark")) {
		container.classList.remove("dark");
		header.classList.remove("dark");
		themeButton.innerHTML = "Dark Mode";
	} else {
		container.classList.add("dark");
		header.classList.add("dark");
		themeButton.innerHTML = "Light Mode";
	}
});

function format() {
  var input = document.getElementById("jsonInput").value;
  try {
    var output = JSON.stringify(JSON.parse(input), null, 2);
    document.getElementById("jsonOutput").value = output;
  } catch (e) {
    alert("Invalid JSON input.");
  }
}

var formatButton = document.getElementById("formatButton");
formatButton.addEventListener("click", format);
