function reverse(arr) {
    var newArr = [];
    for (var i=arr.length-1; i>=0; i--) {
        newArr.push(arr[i]);
    }
    arr = newArr;
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]