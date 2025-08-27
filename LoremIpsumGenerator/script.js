const paraSlider = document.getElementById("paraRange");
const paraOutput = document.getElementById("paraNum");

const wordSlider = document.getElementById("wordsPerRange");
const wordOutput = document.getElementById("wordsNum");

paraOutput.innerHTML = paraSlider.value; // displays default value in HTML before slider is clicked 
wordOutput.innerHTML = wordSlider.value;

paraSlider.oninput = function () {
    paraOutput.innerHTML = this.value;
}

wordSlider.oninput = function () {
    wordOutput.innerHTML = this.value;
}

