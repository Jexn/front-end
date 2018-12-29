function add(){
    var a = document.getElementById("addend").value;
    var b = document.getElementById("augend").value;
    var sum = document.getElementById("sum");
    sum.setAttribute('value',parseInt(a)+parseInt(b));
}
