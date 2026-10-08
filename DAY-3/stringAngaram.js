//Example 1
/* function testCheck() {
    let input1 = "Hello World";
    let inputSplit = input1.split(" ");
    let lastWord = inputSplit[inputSplit.length - 1];
    console.log("length of", lastWord, "is", lastWord.length);
}
testCheck(); */

//Example 2

/* function trimCheck(){
   let ab =  " fly me to the moon "
   let trimlen = ab.trim()
   let trimsplit= trimlen.split(" ")
   console.log(trimsplit);
   let lasTrim= trimsplit[trimsplit.length-1]
   console.log("length of", lasTrim, "is",lasTrim.length);

}
trimCheck() */

//Example 3
function testLg() {
    let aV= "listen"
    let aN= "silent"
     aV.toUpperCase()
     aN.toUpperCase()
 let account1 = aV.split("")
 let account2 = aN.split("")
 let arrSort = account1.sort().join("")
 let arrSort1 = account2.sort().join("")
 if (arrSort === arrSort1 ){
    console.log("True");
 }else{
    console.log( "False");
 }
 }
 testLg()

 //.to lowercase -> to check lower case of a string
 //.to uppercase -> to check upper case of a string 
