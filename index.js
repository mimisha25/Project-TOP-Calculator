const getInput = document.querySelector(".container");

function displayNum(n){
    let num = n.value;
        document.querySelector(".input1").value += num;
}

function solution(e){
    if(e.key === "0" || e.key === "1" || e.key === "2" 
    || e.key === "3" || e.key === "4" || e.key === "5" 
    || e.key === "6" || e.key === "7" || e.key === "8" 
    || e.key === "9" || e.key === "." || e.key === "+" 
    || e.key === "-" || e.key === "/" || e.key === "*"
    ){ 
        document.querySelector(".input1").value += e.key; 
    }
}
 
getInput.onkeyup = function (e){
    if(e.keyCode === 13){
        solve();
    }
}
function solve(){
    let result = eval(document.querySelector(".input1").value);
    document.querySelector(".result").value = result;
    document.querySelector(".input1").value = "";
}

function clearLastDigit(){
    document.querySelector(".input1").value= document.querySelector(".input1").value.slice(0, -1);
}

function clearAll() { 
    document.querySelector(".input1").value ="";
    document.querySelector(".result").value = "0"
} 
