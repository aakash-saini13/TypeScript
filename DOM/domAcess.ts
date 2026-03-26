// Heading access
const title = document.getElementById("title") as HTMLElement;

// Input access
const input = document.getElementById("nameInput") as HTMLInputElement;

// Button access
const button = document.getElementById("btn") as HTMLButtonElement;

// Output paragraph
const output = document.getElementById("output") as HTMLElement;

// Button click event
button.addEventListener("click", () => {
  const name = input.value;

  if (name === "") {
    output.innerText = "Please enter your name 😅";
  } else {
    title.innerText = `Welcome ${name}  🎉`;
    output.innerText = `Hello ${name} 👋`;
  }
});
