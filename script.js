// var i 
// while(i!=3){
// if (i==1) {
//             changeDiv();
//         }
//         else if(i==2){
//             changeDiv2()
//         }else if(i==3){
//             changeDiv3()
//         }
//         else{
//             changeDiv4()
//         }
//     }i++

// function changeDiv(){
// setTimeout(() => {
//     console.log("timeout");
// }, 1000);
// }
// function changeDiv2(){
//     setTimeout(() => {
//         console.log("timeout2");
//     }, 2000);
// }
// function changeDiv3(){
//     setTimeout(() => {
//         console.log("timeout3");
//     }, 3000);
// }
// function changeDiv4(){
//     setTimeout(() => {
//         console.log("timeout4");
//     }, 4000);
// }


// function check() {
//     if (i==1) {
//         changeDiv();
//     }
//     else if(i==2){
//         changeDiv2()
//     }else if(i==3){
//         changeDiv3()
//     }
//     else{
//         changeDiv4()
//     }
// }




    function guess(){
        console.log("yes");
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



















//      var chance = 3
//         function guess(){
//             var inp = document.getElementById("text")
//             var currentVal = inp.value
//             console.log(currentVal);
        
//             var randomVal = Math.floor(Math.random() * 10);
//             console.log(randomVal); 
            
//         if(currentVal){
//             if(currentVal==randomVal){
//                 var correct = `Congratulations!!! You Guess the Right number`
//                 document.getElementById("current").innerHTML = correct;
                
//                 }
//                 else{
//                     var text = `Please Enter Again!!! </br>
//                                 You Entered Incorrect Number.`
                    
//                     var text2 =  `Correct Number is ${randomVal} !!!`;
//                     document.getElementById("current").innerHTML = text;
//                     document.getElementById("random").innerHTML = text2;
    
//                 }
//         }else{
//             var text = `Please Enter the Number!!!`
//             document.getElementById("current").innerHTML = text;
//             console.log("sorry")
//         }  
//     }



// // let text = `${currentVal}`

//     // let c = 22
//     // let a 
//     // while (a!=c) {
//     //     a = parseInt(prompt("Enter the Number"))
//     // }
//     // console.log("Congratulations!!! You Guess the Number")