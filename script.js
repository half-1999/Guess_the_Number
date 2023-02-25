     var chance = 3
        function guess(){
            var inp = document.getElementById("text")
            var currentVal = inp.value
            console.log(currentVal);
        
            var randomVal = Math.floor(Math.random() * 10);
            console.log(randomVal); 
            
        if(currentVal){
            if(currentVal==randomVal){
                var correct = `Congratulations!!! You Guess the Right number`
                document.getElementById("current").innerHTML = correct;
                
                }
                else{
                    var text = `Please Enter Again!!! </br>
                                You Entered Incorrect Number.`
                    
                    var text2 =  `Correct Number is ${randomVal} !!!`;
                    document.getElementById("current").innerHTML = text;
                    document.getElementById("random").innerHTML = text2;
    
                }
        }else{
            var text = `Please Enter the Number!!!`
            document.getElementById("current").innerHTML = text;
            console.log("sorry")
        }  
    }



// let text = `${currentVal}`

    // let c = 22
    // let a 
    // while (a!=c) {
    //     a = parseInt(prompt("Enter the Number"))
    // }
    // console.log("Congratulations!!! You Guess the Number")