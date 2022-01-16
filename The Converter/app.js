let upperCase = document.getElementById("upper-case");
upperCase.addEventListener('click', function() {
    let input = document.getElementById("textArea").value;
    let upper = input.toUpperCase();
    document.getElementById("textArea").value = upper;
})

let lowerCase = document.getElementById("lower-case");
lowerCase.addEventListener('click', function() {
    let input = document.getElementById("textArea").value;
    let lower = input.toLowerCase();
    document.getElementById("textArea").value = lower;
})

let properCase = document.getElementById("proper-case");
properCase.addEventListener('click', function() {
    let input = document.getElementById("textArea").value;
    let word = input.split(" ");

    for (let i = 0; i < word.length; i++) {
        word[i] = word[i][0].toUpperCase() + word[i].substr(1);
    }

    proper = word.join(" ");
    document.getElementById("textArea").value = proper;
})

let sentenceCase = document.getElementById("sentence-case");
sentenceCase.addEventListener('click', function() {
    let input = document.getElementById("textArea").value;
    let sent = input.toLowerCase().split(". ");

    for (let i = 0; i < sent.length; i++) {
        sent[i] = sent[i][0].toUpperCase() + sent[i].substr(1);
    }

    sentence = sent.join(". ");
    document.getElementById("textArea").value = sentence;
})

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

let save = document.getElementById("save-text-file");
save.addEventListener('click', function () {
    let text = document.getElementById("textArea").value;
    let filename ="text.txt";
    download(filename, text);
}, false);

