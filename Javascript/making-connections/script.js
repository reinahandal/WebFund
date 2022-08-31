var userName = document.querySelector(".card-body h1");
function changeName() {
    userName.innerText = "Reina Handal";
}

var friendRequest = document.querySelector("#friendrequest-1");
function removeRequest() {
    friendRequest.remove();
    var requestsNum = document.querySelector("#badge-1");
    var requestsNew = requestsNum.innerText;
    requestsNew--;
    requestsNum.innerText = requestsNew;

}
var friendRequest2 = document.querySelector("#friendrequest-2");
function removeRequest2() {
    friendRequest2.remove();
    var requestsNum = document.querySelector("#badge-1");
    var requestsNew = requestsNum.innerText;
    requestsNew--;
    requestsNum.innerText = requestsNew;
}

function addFriend() {
    var friendsNum = document.querySelector("#badge-2");
    var newFriends = friendsNum.innerText;
    newFriends++;
    friendsNum.innerText = newFriends;
}


