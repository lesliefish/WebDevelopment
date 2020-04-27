function displayTime() {
    var elt = document.getElementById("clock");
    var now = new Date();
    elt.innerHTML = now.toLocaleTimeString();
    setTimeout(displayTime, 1000);
}

window.onload = function () {
    displayTime();
    this.console.log("aaa");
}