function showPic(whichpic) {
    let placeholder = document.getElementById("placeholder");
    // 改变placeholder的src属性值
    placeholder.setAttribute("src", whichpic.getAttribute("href"));
    placeholder.setAttribute("title", whichpic.getAttribute("title"));

    // 改变文本值
    let description = document.getElementById("description");
    let text = whichpic.getAttribute("title");
    description.firstChild.nodeValue = text;
}

function prepareLinks() {
    let links = document.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        if (links[i].getAttribute("class") == "popup") {
            links[i].onclick = function(){
                return showPic(this)?false:true;
            }
        }
    }
}

function showBody() {
    let body_element = document.getElementsByTagName("body")[0];
    alert[body_element];
    for (let index = 0; index < body_element.childNodes.length; index++) {
        console.log(body_element.childNodes[index].nodeValue);
    }
}

function addLoadEvent(func){
    let oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        oldonload();
        func();
    }
}

addLoadEvent(prepareLinks);
addLoadEvent(showBody);
