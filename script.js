function guess(){
    var inp = document.getElementById("text")
    var currentVal = inp.value
    console.log(currentVal);

    var randomVal = Math.floor(Math.random() * 10);
    console.log(randomVal);

    if(true){
    let correct = `Congratulations!!! You Guess the Right number`
    document.getElementById("random").innerHTML = correct;
    
    }
    else{
        let text = `OOOPS!!! You Entered Incorrect Number.`
        let text2 =  `Correct Number is ${randomVal} !!!`;
        document.getElementById("current").innerHTML = text;
        document.getElementById("random").innerHTML = text2;
       
    }
// let text = `${currentVal}`

    // let c = 22
    // let a 
    // while (a!=c) {
    //     a = parseInt(prompt("Enter the Number"))
    // }
    // console.log("Congratulations!!! You Guess the Number")
}