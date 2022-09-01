function alwaysHungry(arr){
    var count=0;
    for(var i=0; i<arr.length;i++){
        if(arr[i]==="food"){
            console.log("yummy");
            count++;
        }
    }
    if(count==0){
        console.log("I'm Hungry");
    }

}
alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry ([12,1215,216,18,864]);