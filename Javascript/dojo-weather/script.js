function cityAlert() {
    alert("Loading weather report...");
}
var cookieAlert = document.querySelector(".cookie-alert");
function acceptCookies() {
    cookieAlert.remove();
}
var celsiusTemp = document.querySelectorAll(".temp span");
var tempOption = document.querySelector("select option");
var option = document.getElementById("temp-unit").value;
function changeTempUnit() {
    if (option == '2') {
        celsiusTemp.innerText = (celsiusTemp.innerText * 9/5) + 32;
    }
}