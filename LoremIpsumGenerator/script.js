const paraSlider = document.getElementById("paraRange");
const paraOutput = document.getElementById("paraNum");

const wordSlider = document.getElementById("wordsPerRange");
const wordOutput = document.getElementById("wordsNum");

paraOutput.innerHTML = paraSlider.value; // displays default value in HTML before slider is clicked 
wordOutput.innerHTML = wordSlider.value;

const genBtn = document.getElementById("genBtn");

function generateLoremIpsum (paraCount, wordCount) {
    console.log(paraCount);
    console.log(wordCount);
}

paraSlider.oninput = function () {
    paraOutput.innerHTML = this.value;
}

wordSlider.oninput = function () {
    wordOutput.innerHTML = this.value;
}

genBtn.onclick = function () {
    paraCount = paraSlider.value;
    wordCount = wordSlider.value;
    generateLoremIpsum(paraCount,wordCount);
}



