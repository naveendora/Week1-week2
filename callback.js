let browserName = "Chrome"
 function chromeBrowserversion(cb){
    setTimeout(()=>{cb(browserName)}, 4000)
 }
 function checkBrowserVersion(browserVersion) {
    console.log(browserVersion);
    
 }
 chromeBrowserversion(checkBrowserVersion)
