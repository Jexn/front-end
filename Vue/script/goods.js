// 全局组件需要放在最前面
// Vue.component('product',{
//     props:['name','sale'],
//     template: '<div class="product" v-on:click = "increaseSale">{{name}} 销量 {{sale}}</div>',
//     methods: {
//         increaseSale:function(){
//             this.sale++;
//         }
//     },
// })

// JSON方式传递数据
Vue.component('product',{
    props:['product'],
    template:'<div class="product" v-on:click = "increaseSale">{{product.name}} 销量: {{product.sale}}</div>',
    methods: {
        increaseSale:function(){
            this.product.sale++;
        }
    },
})

let app1 = new Vue({
    el:"#app1",
    data:{
        products:[
            {"name":"MAXFEEL休闲男士手包真皮手拿包大容量信封包手抓包夹包软韩版潮","sale":"18"},
            {"name":"宾度 男士手包真皮大容量手拿包牛皮个性潮男包手抓包软皮信封包","sale":"35"},
            {"name":"唯美诺新款男士手包男包真皮大容量小羊皮手拿包信封包软皮夹包潮","sale":"29"}
        ]
    }
    // 局部组件
    // components:{
    //     'product':{
    //         template:'<div class="product">MAXFEEL休闲男士手包真皮手拿包大容量信封包手抓包夹包软韩版潮</div>'
    //     }
    // }
});




