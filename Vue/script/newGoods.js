let templateDiv = document.getElementById("template").innerHTML;

let templateObject = {
    props:['product'],
    template:templateDiv,
    methods: {
        increaseSales:function(){
            this.product.sale = parseInt(this.product.sale);
            this.product.sale++;
        }
    },
};

Vue.component('product',templateObject);

let app = new Vue({
    el:"#app",
    data:{
        products:[
            {"name":"MAXFEEL休闲男士手包真皮手拿包大容量信封包手抓包夹包软韩版潮","price":"889","sale":"18","review":"5"},
            {"name":"宾度 男士手包真皮大容量手拿包牛皮个性潮男包手抓包软皮信封包","price":"322","sale":"35","review":"12"},
            {"name":"唯美诺新款男士手包男包真皮大容量小羊皮手拿包信封包软皮夹包潮","price":"523","sale":"29","review":"3"},
            ]
    }
})