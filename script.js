window.onload = function() {
    var pgf = document.createElement("p");
    pgf.innerHTML = new Date();
    pgf.style.color = "#fff"
    document.body.insertBefore(pgf, document.body.firstElementChild);
}