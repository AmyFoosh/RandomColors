// Get access to button.
let randomColorBtn = document.getElementById("random-color-btn");
let container = document.getElementById("container");
let hexText = document.getElementById("hex-text");
let rgbText = document.getElementById("rgb-text");
let body = document.querySelector("body");

body.addEventListener("contextmenu", (event) => {

    event.preventDefault();
});

// Add listener to change background color.
randomColorBtn.addEventListener("click", (event) => {

    // Pick random number for RGB.
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    // Create RGB color.
    let rgb = `rgb(${r}, ${g}, ${b})`;

    body.style.backgroundColor = rgb;
    container.style.backgroundColor = "white";

    hexText.innerHTML = "#" + r.toString(16) + g.toString(16) + b.toString(16);
    rgbText.innerHTML = rgb;

    console.log(rgb);
});