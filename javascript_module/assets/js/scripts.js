number = parseInt(document.getElementById("currentNumber").innerText)

function increment(){
    number += 1
    
    if (number > 10) number = 10
    
    document.getElementById("currentNumber").innerText = number
    if(number < 0){
        document.getElementById("currentNumber").style.color = 'red' 
    }else{
        document.getElementById("currentNumber").style.color = 'black' 
    }

}


function decrement(){
    number -= 1
    document.getElementById("currentNumber").innerText = number
    if(number < 0){
        document.getElementById("currentNumber").style.color = 'red' 
    }else{
        document.getElementById("currentNumber").style.color = 'black' 
    }
}
