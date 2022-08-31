var userName = document.querySelector(".card-body h1");
function changeName() {
    userName.innerText = "Reina Handal";
}

var friendRequest = document.querySelector("#friendrequest-1");
var requestsNum = document.querySelector("#requests");
var friendRequest2 = document.querySelector("#friendrequest-2");
var friendsNum = document.querySelector("#connections");

function removeRequest() {
    friendRequest.remove();
    var requestsNew = requestsNum.innerText;
    requestsNew--;
    requestsNum.innerText = requestsNew;

}

function removeRequest2() {
    friendRequest2.remove();
    var requestsNew = requestsNum.innerText;
    requestsNew--;
    requestsNum.innerText = requestsNew;
}

function addFriend() {
    var newFriends = friendsNum.innerText;
    newFriends++;
    friendsNum.innerText = newFriends;
}