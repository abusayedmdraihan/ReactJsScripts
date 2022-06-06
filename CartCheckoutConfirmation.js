module.exports = async function(context, commands) {


await commands.navigate('https://shop.ak.ecomqa.advancestores.com/');
await commands.wait.byTime(2000);

await commands.click.byXpath('//div[contains(text(),\'Account\')]');
await commands.wait.byTime(2000);

await commands.click.byXpath('//div[contains(text(),\'Sign in to your account\')]');
await commands.wait.byTime(2000);

await commands.addText.byXpath('aap01@email.com','//input[@name=\'email\']');
await commands.addText.byXpath('Advance123','//input[@name=\'password\']');
await commands.wait.byTime(2000);

//Signin  button
await commands.click.bySelectorAndWait('.css-1kctkoh');
await commands.wait.byTime(2000);

await commands.navigate('https://shop.ak.ecomqa.advancestores.com/p/autocraft-car-suv-seat-cover-black-waffle-classic-universal-low-back-breathable-all-season-2-pack-ac221562067b/6150618-P?navigationPath=L1*14919%7CL2*14992%7CL3*15487');
await commands.wait.byTime(2000);

/// ADD To CART 
//await commands.scroll.byPixels('450, 450');
await commands.click.bySelectorAndWait('.css-1mewsu');

await commands.wait.byTime(2000); 

//proceed checkout

await commands.wait.bySelector('.css-1ihs7t7',50000);


await commands.wait.byTime(2000); 


await commands.measure.start('Cart');
await commands.click.bySelectorAndWait('button.primary:nth-child(1)');
await commands.wait.byPageToComplete();
await commands.measure.stop();

await commands.wait.byTime(2000); 


await commands.measure.start('Checkout');
await commands.click.bySelectorAndWait('button.primary:nth-child(1)',50000);
await commands.wait.byPageToComplete();
await commands.wait.byTime(2500); 
//await commands.wait.byPageToComplete();
await commands.measure.stop();


await commands.wait.byTime(5000); 
//await commands.measure.start('Order Cofirmation');
const webdriver = context.selenium.webdriver;
const driver = context.selenium.driver;
const actions=driver.actions({async:true});
  

const nav1 = await driver.findElement(
    webdriver.By.xpath('//div[@id="cybersource-input-container"]/iframe'));
await driver.executeScript("arguments[0].scrollIntoView()",nav1);
  
const card = await driver.findElement(webdriver.By.xpath('//div[@id="cybersource-input-container"]/iframe'));
//await commands.wait.byTime(2000);
await actions.click(card).sendKeys("04111111111111111").perform();
  
  //add Text

  //month 
await driver.findElement(webdriver.By.xpath("(//select[@class='css-1ty7m0o'])[1]/option[4]")).click();
//await commands.wait.byTime(2000); 
//year
await driver.findElement(webdriver.By.xpath("(//select[@class='css-1ty7m0o'])[2]/option[3]")).click();

  //cvc
const cvc = await driver.findElement(webdriver.By.xpath("/html/body/div[1]/div/div/div[2]/div[2]/div[2]/div/div/form/div/div[4]/label/div[2]/input")).click();
await commands.addText.byXpath('343','(//input[@class="css-82vsvg"])[3]'); 
await commands.wait.byTime(1000);
 //place an order
await commands.measure.start('Order Cofirmation');
await driver.findElement(webdriver.By.xpath("/html/body/div[1]/div/div/div[2]/div[2]/div[3]/div/div/button[2]")).click();
//await commands.click.bySelector('.css-1ihs7t7'); 
await commands.wait.byPageToComplete();
await commands.wait.byTime(5000); 
await commands.measure.stop();

//await commands.wait.byTime(10000); 
 
 
 

};