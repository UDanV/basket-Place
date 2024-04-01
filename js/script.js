var modal = document.getElementById("myModal");
var searchButton = document.getElementById("searchButton");
var span = document.getElementsByClassName("close")[0];
var body = document.body;

searchButton.onclick = function() {
    modal.style.display = "block";
    body.classList.add("body-no-scroll");
}

span.onclick = function() {
    modal.style.display = "none";
    body.classList.remove("body-no-scroll");
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        body.classList.remove("body-no-scroll");
    }
}
