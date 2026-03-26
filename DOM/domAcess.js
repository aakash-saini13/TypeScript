// Heading access
var title = document.getElementById("title");
// Input access
var input = document.getElementById("nameInput");
// Button access
var button = document.getElementById("btn");
// Output paragraph
var output = document.getElementById("output");
// Button click event
button.addEventListener("click", function () {
    var name = input.value;
    if (name === "") {
        output.innerText = "Please enter your name 😅";
    }
    else {
        title.innerText = "Welcome ".concat(name, "  \uD83C\uDF89");
        output.innerText = "Hello ".concat(name, " \uD83D\uDC4B");
    }
});
