//creating an array using string data and undefined
var list = ["name1", "name2", "name3", , "name4"];
//loop to check the data in the array
for (var i = 0; i < list.length; i++) {
    if (list[i] != null) {
        //if the elements are defined print true
        console.log(true);

    } else {
        //otherwise print that undefined element
        console.log(list[i]);
    }
}