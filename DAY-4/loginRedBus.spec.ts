import { log } from "node:console";
import { chromium, test, webkit } from "playwright/test";

//Load Red Bus in an Edge browser instance and verify the page title and URL
test('loginto redbus', async() => {
 let browser = await chromium.launch({headless:false})
 let context= await browser.newContext()
 let page = await context.newPage()
 
 await page.goto('https://www.redbus.in/')
 let url = page.url()
 console.log(url);
 await page.waitForLoadState('domcontentloaded')
 let title= await page.title()
 console.log(title);
})

//Load Flipkart in a Webkit browser instance and verify the page title and URL. 
test('logintoflipkart', async()=>{
  let browser = await webkit.launch({headless:false})
  let context = await browser.newContext()
  let page = await context.newPage()
   await page.goto('https://www.flipkart.com/')
   let url = await page.url()
 console.log(url);
   await page.waitForLoadState('domcontentloaded')
   let title = await page.title()
   console.log(title);
   
})
