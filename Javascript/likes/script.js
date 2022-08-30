function increaseLikes() {
    var initLikes = document.querySelector("#likes-1 span");
    var newLikes = initLikes.innerHTML;
    newLikes++;
    initLikes.innerHTML = newLikes;
}