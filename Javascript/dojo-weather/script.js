function cityAlert(element) {
    alert("Loading " + element.innerText + " weather report...");
}
function acceptCookies() {
    document.querySelector(".cookie-alert").remove();
}
function changeTempUnit() {
    var tempSpan = document.querySelectorAll(".temp span");
    var option = document.getElementById('temp-unit').value;
    if (option === '1') {
        for (var i=0; i<tempSpan.length; i++) {
        tempSpan[i].innerText = Math.round(5/9 * (tempSpan[i].innerText - 32));
    }
}
    else if (option === '2') {
        for (var i=0; i<tempSpan.length; i++) {
            tempSpan[i].innerText = Math.round(tempSpan[i].innerText * 9/5) + 32;
            console.log(tempSpan[i]);
        }
    }
}