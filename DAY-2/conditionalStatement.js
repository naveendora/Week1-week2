/* function launchBrowser(browserName) {
    if (browserName != "Chrome") {
        console.log("Browser is not Chrome");
        
    } else if(browserName == "Chrome"){
        console.log("Browser is  Chrome");
    }
}
launchBrowser("Chrome") */

function runTest(){
     var testType = "Sanitye"
     switch (testType) {

        case "smoke":
            console.log("it is smoke");
            break;

         case "Regression":
            console.log("it is Regression");
            break;

               case "Sanity":
            console.log("it is Sanity");
            break;

        default :
            console.log("default is smoke");
            break;
     }
}
runTest()
