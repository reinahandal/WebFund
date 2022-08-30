var likes = document.querySelector("#likes-1");
var newLikes = 3;

function increaseLikes() {
    newLikes++;
    likes.innerText = newLikes + " like(s)";
}