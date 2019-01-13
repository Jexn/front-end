function showPic(whichPic) {
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

function addNode() {
    let image = document.createElement("img");
    image.setAttribute("id", "placeholder");
    image.setAttribute("src", "images/placeholder.gif");
    image.setAttribute("title", "my image gallery");

    let para = document.createElement("p");
    let text = document.createTextNode(image.getAttribute("title"));
    para.setAttribute("title", image.getAttribute("title"));
    para.appendChild(text);

    let node = document.getElementById("imageGallery");
    node.parentNode.insertBefore(image, node);
    node.parentNode.insertBefore(para, node);
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


addLoadEvent(addNode);
addLoadEvent(prepareLinks);