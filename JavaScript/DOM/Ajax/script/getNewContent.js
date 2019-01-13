function getNewContent() {
    let request = new XMLHttpRequest();
    if (request) {
        request.open("GET", "example.txt", true);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                let para = document.createElement("p");
                let text = document.createTextNode(request.responseText);
                para.appendChild(text);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    } else {
        alert("浏览器不支持Ajax");
    }
}
addLoadEvent(getNewContent);