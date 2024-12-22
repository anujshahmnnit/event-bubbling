let form = document.getElementById("form");
let div = document.getElementById("div");
let pTag = document.getElementById("pTag");

form.addEventListener("click", function (e) {
    alert("Form is clicked");
});

div.addEventListener("click", function (e) {
    alert("div is clicked");
});

pTag.addEventListener("click", function (e) {
    e.stopPropagation();
    alert("pTag is clicked");
});