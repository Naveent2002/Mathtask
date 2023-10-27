var firstNum = Math.ceil(Math.random() * 10);
var secondNum = Math.floor(Math.random() * 10) + 1;
document.getElementById("fNum").value = firstNum;
document.getElementById("sNum").value = secondNum;
 function checkSum(){  
var ans = parseInt(document.getElementById("ansBox").value);
            if (firstNum + secondNum === ans) {
                document.getElementById("answer").innerHTML = "Correct";
            } else {
                document.getElementById("answer").innerHTML = "Incorrect";
            }
        }
    function reset(){
        
    var firstNum=document.getElementById("fNum").value="";
    var firstNum=document.getElementById("sNum").value="";
    var ans=document.getElementById("ansBox").value="";
    }