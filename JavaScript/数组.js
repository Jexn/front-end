// js数组创建方式
// 1.new Array();创建一个长度为0的数组
// 2.new Array(5);创建长度是5的数组
// 3.new Array(3,1,4,1,5,9,2,6);根据参数创建数组

// 对于数组遍历，普通for()循环和for in有所不同，forin不输出undefined，for()全部输出
var arr = new Array();
arr[1] = 10;
arr[10] = 11;
for(var i = 0; i < arr.length;i++){
    console.log(arr[i]);
}

for( i in arr){
    console.log(arr[i]);
}

// 连接数组可以使用a.concat(b)
var a = new Array(3,1,4,1,5);
var b = new Array(9,2,6,5,7);
var c = a.concat(b);