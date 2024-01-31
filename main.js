function showNumber(num){
    var number = document.getElementById("result").innerHTML;
    document.getElementById('result').innerHTML = number + num;
}

function clean(){
    document.getElementById('result').innerHTML = "";
}

function calc(){
    var resultado = document.getElementById("result").innerHTML;
    if(resultado){
        document.getElementById('result').innerHTML = eval(resultado);
    }
}