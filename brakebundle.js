module.exports = async function(context, commands) {


await commands.navigate('https://shop.ak.ecomqa.advancestores.com/');
await commands.wait.byTime(2000);

await commands.click.byXpath('//div[contains(text(),\'Account\')]');
await commands.wait.byTime(2000);

await commands.click.byXpath('//div[contains(text(),\'Sign in to your account\')]');
await commands.wait.byTime(5000);

await commands.addText.byXpath('aap01@email.com','//input[@name=\'email\']');
await commands.addText.byXpath('Advance123','//input[@name=\'password\']');
await commands.wait.byTime(2000);

//Signin  button
await commands.click.bySelectorAndWait('.css-1kctkoh');
await commands.wait.byTime(5000);
await commands.measure.start('Pick Your Parts');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/projects/brakes/');
await commands.wait.byTime(2000);
await commands.measure.stop();
//Front-Rear button
await commands.measure.start('Brake Vehicle');
await commands.click.bySelectorAndWait('a.css-vyszjw:nth-child(3)');
await commands.measure.stop();
await commands.wait.byPageToComplete();
await commands.wait.byTime(2000);
//Add Vehicle Continue button
//await commands.navigate('https://shop.ak.ecomqa.advancestores.com/projects/brakes/both-brakes/vehicle_selection');
await commands.measure.start('Front Pads');
await commands.click.bySelectorAndWait('.css-gi9awz');

await commands.measure.stop();
await commands.wait.byPageToComplete();
await commands.wait.byTime(2000);

//Front Pads/Add to bundle
//await commands.navigate('https://shop.ak.ecomqa.advancestores.com/projects/brakes/both-brakes/vehicle_selection');
await commands.measure.start('Front Rotars');
await commands.click.bySelectorAndWait('div.css-1njs06z:nth-child(1) > div:nth-child(2) > button');

await commands.wait.byTime(2000);

//popup bunddle
await commands.click.bySelectorAndWait('.css-lpc1w9 > button');

await commands.wait.byTime(2000);
await commands.measure.stop();
await commands.wait.byPageToComplete();
await commands.measure.start('Rear Pads');
//front rotars-->https://shop.ak.ecomqa.advancestores.com/projects/brakes/both-brakes/front_rotors
await commands.click.bySelectorAndWait('div.css-1njs06z:nth-child(1) > div:nth-child(2) > button:nth-child(2)');

await commands.wait.byTime(2000);

//popup bunddle
await commands.click.bySelectorAndWait('button.primary:nth-child(1)');

await commands.wait.byTime(2000);
await commands.measure.stop();
await commands.wait.byPageToComplete();
await commands.measure.start('Rear Rotars');
//Rear pads -->https://shop.ak.ecomqa.advancestores.com/projects/brakes/both-brakes/rear_pads
await commands.click.bySelectorAndWait('div.css-1njs06z:nth-child(1) > div:nth-child(2) > button');

await commands.wait.byTime(2000);

//popup bunddle
await commands.click.bySelectorAndWait('.css-lpc1w9 > button');

await commands.wait.byTime(2000);
await commands.measure.stop();
await commands.wait.byPageToComplete();
await commands.measure.start('Brake Add ons');
//Rear roters--->https://shop.ak.ecomqa.advancestores.com/projects/brakes/both-brakes/rear_rotors
await commands.click.bySelectorAndWait('div.css-1njs06z:nth-child(1) > div:nth-child(2) > button');

await commands.wait.byTime(2000);

//popup bunddle
await commands.click.bySelectorAndWait('button.primary:nth-child(1)');

await commands.wait.byTime(2000);
await commands.measure.stop();
await commands.wait.byPageToComplete();


//Addons---->https://shop.ak.ecomqa.advancestores.com/projects/brakes/both-brakes/addons
await commands.measure.start('Brake Review');
//skip
await commands.click.bySelectorAndWait('.outline');

//await commands.wait.byTime(2000);

//popupskip
await commands.click.bySelectorAndWait('.tertiary');

//await commands.wait.byTime(2000);
await commands.measure.stop();
await commands.wait.byPageToComplete();




/*

//review--->https://shop.ak.ecomqa.advancestores.com/projects/brakes/both-brakes/review


//Addto cart
const webdriver = context.selenium.webdriver;

const driver = context.selenium.driver;

//await commands.measure.start('Review');
const cart = await driver.findElement(
    webdriver.By.xpath('/html/body/div[2]/div[1]/div/div[3]/div/div[1]'));
  await commands.wait.byTime(2000);
  

 
 await driver.executeScript("arguments[0].scrollIntoView()",cart);
const cart2 = await driver.findElement(
    webdriver.By.xpath('/html/body/div[2]/div[1]/div/div[3]/div/div[3]/div[3]/div[1]'));
  await commands.wait.byTime(1000);
 
  await driver.executeScript("arguments[0].scrollIntoView()",cart2);
await commands.click.bySelectorAndWait('button.primary:nth-child(3)',50000);
//await commands.measure.stop();

await commands.wait.byTime(30000);










//clearning cart items




await commands.click.bySelectorAndWait('.css-ukpgch',50000);


await commands.wait.byPageToComplete();



await commands.wait.byTime(50000); 






const nav1 = await driver.findElement(
    webdriver.By.xpath('//div[@id="cybersource-input-container"]/iframe'));
  
 
  await driver.executeScript("arguments[0].scrollIntoView()",nav1);
  const actions=driver.actions({async:true});
  
  const card = await driver.findElement(webdriver.By.xpath('//div[@id="cybersource-input-container"]/iframe'));
  
  await actions.click(card).sendKeys("04111111111111111").perform();
  await commands.wait.byTime(12000);
  //add Text
  
  
  
  
  //month
  
   
  await driver.findElement(webdriver.By.xpath("(//select[@class='css-1ty7m0o'])[1]/option[4]")).click();
  
  
  await commands.wait.byTime(2000); 
  
  
  //year
  await driver.findElement(webdriver.By.xpath("(//select[@class='css-1ty7m0o'])[2]/option[3]")).click();
  
  
  
  
  //cvc
  
 const cvc = await driver.findElement(webdriver.By.xpath("/html/body/div[1]/div/div/div[2]/div[2]/div[2]/div/div/form/div/div[4]/label/div[2]/input")).click();
  
  await commands.addText.byXpath('343','(//input[@class="css-82vsvg"])[3]'); 
  
   
  await commands.wait.byTime(2000); 
   //place an order
   
   await commands.click.bySelectorAndWait('.css-1ihs7t7',3000);
  
  await commands.wait.byPageToComplete();

  
  await commands.wait.byTime(12000); 
  
 
 
 
 

 await commands.measure.start('Bundle Cart');
await commands.click.bySelectorAndWait('button.primary:nth-child(1)');
//await commands.wait.bySelector('#__next > div.css-1b2tw1j > div > div > div.css-uipbbs > div.css-av05rv > div > div.css-jmlio4 > div.css-1y24brw > button',50000);
//await commands.wait.bySelector('#__next > div.css-1b2tw1j > div > div > div.css-1jw8uhr > div.css-av05rv > div > div.css-jmlio4 > div.css-1y24brw > button',150000);

await commands.wait.byPageToComplete();
await commands.measure.stop();

await commands.wait.byTime(2000); 


await commands.measure.start('Bundle Checkout');
await commands.click.bySelectorAndWait('button.primary:nth-child(1)',50000);

//await commands.wait.byTime(2000); 
await commands.wait.byPageToComplete();//await commands.wait.byTime(2000); 
await commands.measure.stop();


await commands.wait.byTime(10000); 


await commands.measure.start('Bundle Order Cofirmation');

await commands.navigate('https://shop.ak.ecomqa.advancestores.com/web/OrderOKView?orderId=111051643&createAccount=false&storeId=10151&catalogId=10051&langId=-1');
await commands.wait.byPageToComplete();

await commands.measure.stop(); 
*/

await commands.wait.byTime(2000); 






}