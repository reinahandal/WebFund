function cityAlert() {
    alert("Loading weather report...");
}
var cookieAlert = document.querySelector(".cookie-alert");
function acceptCookies() {
    cookieAlert.remove();
}
var tempSpan = document.querySelectorAll(".temp span");

function changeTempUnit() {
    var option = document.getElementById('temp-unit').value;
    if (option === '2') {
        for (var i=0; i<tempSpan.length; i++) {
            tempSpan[i].innerText = (tempSpan[i].innerText * 9/5) + 32;
            console.log(tempSpan[i]);
        }
    }
    else if (option === '1') {
        for (var x=0; x<tempSpan.length; x++) {
        tempSpan[x].innerText = Math.round(5/9 * (tempSpan[x].innerText - 32));
    }
}
}