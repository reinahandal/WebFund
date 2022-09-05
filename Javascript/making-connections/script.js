// var friendRequest = document.querySelector("#friendrequest-1");
// var friendRequest2 = document.querySelector("#friendrequest-2");
var requestsNum = document.querySelector("#requests");
var friendsNum = document.querySelector("#connections");
var userName = document.querySelector(".card-body h1");


function changeName() {
    userName.innerText = "Reina Handal";
}

// function removeRequest() {
//     friendRequest.remove();
//     var requestsNew = requestsNum.innerText;
//     requestsNew--;
//     requestsNum.innerText = requestsNew;
// }

// function removeRequest2() {
//     friendRequest2.remove();
//     var requestsNew = requestsNum.innerText;
//     requestsNew--;
//     requestsNum.innerText = requestsNew;
// }

// function addFriend() {
//     var newFriends = friendsNum.innerText;
//     newFriends++;
//     friendsNum.innerText = newFriends;
// }

function acceptRequest(id) {
    var element = document.querySelector(id);
    element.remove();
    requestsNum.innerText--;
    friendsNum.innerText++;
}
function declineRequest(id) {
    var element = document.querySelector(id);
    element.remove();
    requestsNum.innerText--;
}