let a = 100;

// Number类型转换为字符串有默认模式和基准模式

// 默认模式
console.log("转换成字符串："+a.toString());

// 基准模式
console.log("转换成二进制："+a.toString(2));
console.log("转换成八进制："+a.toString(8));
console.log("转换成十六进制："+a.toString(16));

//  字符串转数字有parseInt()和parseFloat()方法

var str1 = "10";
var str2 = "10abc";
var str3 = "abs10";
var str4 = "3.13287";
var str5 = "hello world";

console.log(str1+"转换成数字："+parseInt(str1));
console.log(str2+"转换成数字："+parseInt(str2));
console.log(str3+"转换成数字："+parseInt(str3));
console.log(str4+"转换成整数："+parseInt(str4));
console.log(str4+"转换成浮点数："+parseFloat(str4));
console.log(str5+"转换成数字："+parseInt(str5));

// Number()和parseInt()一样，都可以用来进行数字的转换
// 区别在于，当转换的内容包含非数字的时候，Number() 会返回NaN(Not a Number)
// parseInt() 要看情况，如果以数字开头，就会返回开头的合法数字部分，如果以非数字开头，则返回NaN
var str6 = "1024";
var str7 = "ab1024";
var str8 = "1024ab";

console.log(str6+"通过Number()转换："+Number(str6));
console.log(str6+"通过parseInt()转换："+parseInt(str6));
console.log(str7+"通过Number()转换："+Number(str7));
console.log(str7+"通过parseInt()转换："+parseInt(str7));
console.log(str8+"通过Number()转换："+Number(str8));
console.log(str8+"通过parseInt()转换："+parseInt(str8));

// String()和toString()一样都会返回字符串，区别在于对null的处理
// String()会返回字符串"null"
// toString() 就会报错，无法执行
var test = null;
console.log("String():"+String(test));
console.log("toString():"+toString(test));

