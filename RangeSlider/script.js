const slider = document.getElementById("myRange");
const output = document.getElementById("demo");

slider.oninput = function () {
    output.innerHTML = this.value;
}