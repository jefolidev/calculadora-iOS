function showNumber(num){
    
    var number = document.getElementById("result").innerHTML;
    if (number.length < 13){
        document.getElementById('result').innerHTML = number + num;
    } else {
        document.getElementById('result').innerHTML = ""
        alert("Insira um valor menor!")
        
    }
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