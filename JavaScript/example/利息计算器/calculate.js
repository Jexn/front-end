function calculate() {
    let initMoney = document.getElementById("initMoney").value;
    let rate = document.getElementById("rate").value;
    let year = document.getElementById("year").value;
    let each = document.getElementById("each").value;
    let sum1 = document.getElementById("sum1");
    let sum2 = document.getElementById("sum2");
    let sum3 = document.getElementById("sum3");
    
    initMoney = parseInt(initMoney);
    rate = parseInt(rate);
    year = parseInt(year);

    console.log(initMoney,rate,year);
    let allMoney = initMoney * Math.pow((1+rate/100),year);
    console.log(allMoney);
    sum1.setAttribute('value', initMoney);
    sum2.setAttribute('value', allMoney - initMoney);
    sum3.setAttribute('value', allMoney)
}