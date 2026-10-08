function revStr(){
    let  input1 = "MADAM"
    let inputSplit = input1.split("")
    let reverse= ""
    for(let i=inputSplit.length-1; i>=0;i--){
        reverse = reverse+ input1[i]
    }
    console.log(reverse);
    if (reverse===input1){

        console.log("true");   
    } else {
        console.log("false");
        
    }
}
revStr()