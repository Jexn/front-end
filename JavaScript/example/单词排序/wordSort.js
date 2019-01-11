function letter(){
    let str = document.getElementById("inputValue").value;
    let result1 = document.getElementById("sort");
    let result2 = document.getElementById("reverse");

    let regex = new RegExp(" ","g");
    str = str.replace(regex,"");
    let result = str.replace(regex,"").split('').sort();
    result1.setAttribute("value",result.join(''));
    result2.setAttribute("value",result.reverse().join(''));
}

function word(){
    let str = document.getElementById("inputValue").value;
    let result1 = document.getElementById("sort");
    let result2 = document.getElementById("reverse");

    str = str.split(" ");
    result1.setAttribute("value",str.sort().join(" "));
    result2.setAttribute("value",str.sort().reverse().join(" "));
}