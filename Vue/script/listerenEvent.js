var clickApp = new Vue({
    el:"#clickNum",
    data:{
        clickNum:0
    },
    methods: {
        count:function(){
            this.clickNum++
        }
    },
});

var app1 = new Vue({
    el:"#content",
    data:{
        id:''
    },
    methods:{
        doc:function(){
            this.id = event.currentTarget.id;
            alert(this.id);
        }
    }
})