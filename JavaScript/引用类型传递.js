function setName(obj){
    obj.name = "老王";
    obj = new Object();
    obj.name = "老赵";
}
var person = new Object();
setName(person);
console.log(person.name);