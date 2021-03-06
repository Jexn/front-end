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
    let gallery = document.getElementById("imageGallery");
    let links = gallery.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            showPic(this);
            return false;
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

function addLoadEvent(func) {
    let oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

addLoadEvent(prepareLinks);
addLoadEvent(showBody);