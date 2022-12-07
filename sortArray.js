function sortGreatest(arr) {
    //от наибольшего к наименьшему
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
//console.log(sortGreatest([10,9,1000,12,-11,3]));
alert(sortGreatest([10,9,1000,12,-11,3]))
// => [ 1000, 12, 10, 9, 3, -11 ]

function sortLeast(arr) {
    // от наименьшего к наибольшему
    for (let i = arr.length-1; i >= 0; i--) {
        for (let j = i; j >= 0; j--) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
alert(sortLeast([10,9,1000,12,-11,3]));
// => [ -11, 3, 9, 10, 12, 1000 ]