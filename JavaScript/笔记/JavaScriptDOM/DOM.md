## DOM
DOM(document object Model)文本对象模型。

JavaScript语言里的对象可以分为三种类型：
- 用户定义对象：有程序员执行创建的对象。
- 内建对象：内建在JavaScript语言里的对象，比如Array、Math、Date等。
- 宿主对象：由浏览器提供的对象。比如windows

## 节点

在DOM中有许多不同类型的节点，常见的有三种：元素节点、文本节点和属性节点。

**元素节点** ：DOM的原子是元素节点，诸如`<body>、<p>、<div>、<ul>`此类的标签就是元素节点。

**文本节点** ：文本节点由元素节点包裹，构成用户能看到的内容。比如`<p>This TextNode.</p>`中"This TextNode"则是文本节点。

**属性节点** ：属性节点用来对元素做出更具体的描述。比如`<p id="content" title="reminder">This is attribute</p>`中id="title",title="reminder"都属于属性节点。

## 获取元素

有3种方法可获取元素节点，分别通过元素ID、通过标签名字和通过类名字来获取。

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>获取元素</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <p id="item1" class="item">getElementById</p>
    <p id="item2" class="item">getElementByTagName</p>
    <p id="item3" class="item node">getElementByClassName</p>
    <script>
        // getElementById返回节点对象
        console.log(typeof document.getElementById("item1"));
        
        // getElementByTagName返回一个数组
        let tags = document.getElementsByTagName("p");
        for(let i = 0; i < tags.length;i++){
            console.log(tags[i]);
        }

        // getElementByClassName返回数组
        let classs = document.getElementsByClassName("item");
        for(let i = 0; i < classs.length;i++){
            console.log(classs[i]);
        }

    </script>
</body>
</html>
```

### getElementById

DOM提供了一个名为getElementById的方法，这个方法将返回一个与那个有着给定id属性值的*元素节点对应的对象*。

### getElementsByTagName

getElementsByTagName返回一个*对象数组*，每个对象分别对应着文档里有着给定标签的一个元素。

### getElementsByClassName

getElementsByClassName同样返回一个*对象数组*，不过getElementsByClassName接受的参数不一样，虽然只接受一个参数，但是，这个参数可以使用空格隔开表示接受同时拥有多个类名的元素。

例如`getElementsByClassName("item node")`表示获取同时含有class='item node'的元素节点，按上面例子看，这个数组只有一个对象。注意的是，多个class名的顺序不重要，比如'item node'和'node item'是一样的。

## 获取和设置属性

### getAttribute

getAttribute是一个函数。它只有一个参数：需要查询的属性的名字。它获取这个属性所对应的值。

```HTML
<p id="item" title="This is value"></p>
<script>
    // 获取title的值，返回This is value
    console.log(document.getElementById("item").getAttribute("title));
</script>
```

### setAttribute

setAttribute可以设置相应属性的值。setAttribute()接受两个参数属性名和需要修改属性值。`object.setAttribut(attribute,value)`。

```HTML
<p id="item" title="This is value"></p>
<script>
    // 获取title的值，返回This is value
    console.log(document.getElementById("item").setAttribute("title","setAttrbute change this value"));
</script>
```

## 改变节点文本值

### childNodes属性

在一颗节点树上，childNodes属性可以用来获取任何一个元素的所有子元素，它是一个包含这个元素全部子元素的数组：element.childNodes。比如我们如果需要获取body内的全部子元素，可以使用`let body_element = document.getElementsByTagName("bod")[0].childNodes;`获取。因为每个文档的页面只有一个body元素，所以它将是getElementsByTagName("body")方法返回的数组中的第一个，也是唯一一个。

如果需要在页面加载完执行函数可以使用`window.onload = function_name;`;

### nodeType

nodeType返回的是一个数字，nodeType属性总共有12种可取值，但其中只有三种具有使用价值：

- 元素节点的nodeType的属性值是1
- 属性节点的nodeType的属性值是2
- 文本节点的nodeType的属性值是3

### nodeValue属性改变文本节点值

如果想改变一个文本节点的值，那就使用DOM提供的nodeValue属性，它用来得到一个节点的值：`elemenet.nodeValue`。但是直接使用`elemenet.nodeValue`返回的是一个null空值。因为nodeValue属性是一个空值，而你真正需要的是`<p>`元素中所包含的文本值。

包含在`<p>`元素里的文本是另一种节点，它是`<p>`元素的第一个子节点。因此，你需要使用`element.childNodes[0].nodeValue`获取p节点里真正的文本值。

这里你也可以使用`element.firstChild.nodeValue`来代替`element.childNodes[0].nodeValue`

