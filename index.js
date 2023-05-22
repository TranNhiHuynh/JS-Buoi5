// BÀI 1

document.getElementById("btn").onclick = function() {
var point = +document.getElementById("point").value;
var sub1 = +document.getElementById("sub1").value;
var sub2 = +document.getElementById("sub2").value;
var sub3 = +document.getElementById("sub3").value;

var  area1 = document.getElementById("area1");
var  area2 = document.getElementById("area2");
var  area3 = document.getElementById("area3");

var object1 = document.getElementById("object1");
var object2 = document.getElementById("object2");
var object3 = document.getElementById("object3");

var result = document.getElementById("result");

var sum = sub1 + sub2 + sub3;

if(area1.checked == true){
    sum += 2;
} else if(area2.checked == true){
    sum += 1;
} else if(area3.checked == true){
    sum += 0.5;
}

if(object1.checked == true){
    sum += 2.5;
} else if(object2.checked == true){
    sum += 1.5;
} else if(object3.checked == true){
    sum += 1;
}

if(sum >= point)
    result.innerText = "ĐẬU";
    else
    result.innerText = "RỚT";

}


// BÀI 2

document.getElementById("btn2").onclick = function(){

    var kw = +document.getElementById("kw").value;
    var result2 = document.getElementById("result2");

    var sum;

    if(kw <= 50)    
        sum = 500* kw;
    else if(kw <= 100)
        sum = 500*50 + (kw -50)*650;
    else if(kw <= 200)
        sum = 500*50 + 650*50 + (kw - 100)*850;
    else if(kw <= 350)
        sum = 500*50 + 650*50 + 850*100 + (kw - 200)*1100;
    else
         sum = 500*50 + 650*50 + 850*100 + 200*1100 + (kw - 350)*1300;

    result2.innerText = sum + " VND";

}

// BÀI 3

document.getElementById("btn3").onclick = function(){
    var salary = +document.getElementById("salary").value;
    var eff = +document.getElementById("eff").value;
    var result3 = document.getElementById("result3");

    
    var rule = salary - 4000000 - eff*1600000;
    console.log(eff);
    console.log(rule);
    var tax;

    if(rule <= 60000000)
    tax = salary*0.05;
    
    if(rule > 60000000 & rule <= 120000000)
    tax = salary*0.1;

    if(rule > 120000000 & rule <= 210000000)
    tax = salary*0.15;

    if(rule > 210000000 & rule <= 384000000)
    tax = salary*0.2;

    if(rule > 384000000 & rule <= 624000000)
    tax = salary*0.25;

    if(rule > 624000000 & rule <= 960000000)
    tax = salary*0.3;

    if(rule > 960000000)
    tax = salary*0.35;

    result3.innerText = tax + " VND";

}


// BÀI 4


document.getElementById("type").onchange = function(){
    console.log(+document.getElementById("type").value)
    if(+document.getElementById("type").value === 1)
    document.getElementById("connect").style.display = "none";
    else
    document.getElementById("connect").style.display = "inline";

}

document.getElementById("btn4").onclick = function(){
    var type = +document.getElementById("type").value;
    var hype = +document.getElementById("hype").value;
    var connect = +document.getElementById("connect").value;

    var result4 = document.getElementById("result4");

    var sum;

    if(type === 1)
        sum = 4.5 + 20.5 + 7.5*hype;

    if(type === 2)
    {
        if(connect <= 10)
        sum = 15 + 75 + 50*hype;
        else
        sum = 15 + 75 + 5*(connect - 10) + 50*hype;
    }
    result4.innerText = sum + " $";
}