var value = new Array();
function sortArr(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length ;j++){
            if(arr[i] == arr[j]){
                arr[j] = undefined;
                continue;
            }
        }
    }

    for(let index = 0; index < arr.length;index++){
        if(arr[index] !== undefined){
            value.push(arr[index]);
        }
    }
    return value;
}

var x = new Array(2,2,1,1,3,33,3);
var y = sortArr(x).sort();
console.log(y);

