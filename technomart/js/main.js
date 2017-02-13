var minimap = document.querySelector(".mini-map");
var map = document.querySelector(".modal-map");
var crossMap = document.querySelector(".close-modal-map");
var formButton = document.querySelector(".write-us-button");
var form = document.querySelector(".modal-write-us");
var crossWriteUs = document.querySelector(".close-write-us")

minimap.addEventListener("click", function (event) {
    event.preventDefault();
    map.classList.add("active");
    // cross.classList.add("active");
});

crossMap.addEventListener("click", function (event) {
    event.preventDefault();
    map.classList.remove("active");
    // cross.classList.remove("active");
});

formButton.addEventListener("click", function (event) {
    event.preventDefault();
    form.classList.add("active");
});

crossWriteUs.addEventListener("click", function (event) {
    event.preventDefault();
    form.classList.remove("active");
});
