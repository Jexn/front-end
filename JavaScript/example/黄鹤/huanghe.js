function build(){
    var address = document.getElementById("address").value;
    var companyTye = document.getElementById("companyType").value;
    var companyName = document.getElementById("companyName").value;
    var bossName = document.getElementById("bossName").value;
    var money = document.getElementById("money").value;
    var product = document.getElementById("product").value;
    var moneyType = document.getElementById("moneyType").value;

    var content = address+"最大的"+companyTye+companyName+"倒闭了，王八蛋老板"+bossName+"吃喝嫖赌，欠下"+money+"亿，带着他的小姨子跑了！我们没有办法，拿着"+product+"抵工资！原价都是一"+moneyType+"、两"+moneyType+"多的、"+"三"+moneyType+"的"+product+",现在全部只卖二十块，统统只要二十块!"+bossName+"王八蛋，你不是人!我们辛辛苦苦给你干了大半年，你不发工资，你还我血汗钱，还我血汗钱!"

    document.getElementById("content1").innerHTML = content;
}