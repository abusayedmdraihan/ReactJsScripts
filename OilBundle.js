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
await commands.wait.byTime(2000);

await commands.measure.start('Build Your Bundle');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/projects/oil-change');
await commands.measure.stop();

const webdriver = context.selenium.webdriver;

const driver = context.selenium.driver;
 //scrolling view
const nav1 = await driver.findElement(
    webdriver.By.xpath("//span[@class='css-1fwwob2']"));
  
 
  await driver.executeScript("arguments[0].scrollIntoView()",nav1);
  const actions=driver.actions({async:true});
  
await commands.wait.byPageToComplete();




//click on build your bundle
await commands.measure.start('Oil Vehicle');
await commands.click.bySelectorAndWait('.css-1bg7vnv');
await commands.measure.stop();


//click on continue button
await commands.measure.start('Oil Type & Weight');
await commands.click.bySelectorAndWait('.css-gi9awz');
await commands.measure.stop();


const nav2 = await driver.findElement(
    webdriver.By.xpath('/html/body/div[2]/div[1]/div/div[2]/div[1]/button[2]/div[2]'));
  
 
  await driver.executeScript("arguments[0].scrollIntoView()",nav2);
  
  
  
  
  const nav3 = await driver.findElement(
    webdriver.By.xpath('/html/body/div[2]/div[1]/div/div[4]/h1'));
  
 
  await driver.executeScript("arguments[0].scrollIntoView()",nav3);
await commands.click.byXpath('/html/body/div[2]/div[1]/div/div[7]/div[1]/div/div[4]/div/button[1]');
await commands.wait.byTime(2000);
await commands.measure.start('Oil Filter');
//select weight
await commands.click.byXpath('(//div[@class="css-1wghgh7"])[1]');
//add to bundle
await commands.click.bySelectorAndWait('.css-w8hud');
await commands.measure.stop();
await commands.wait.byTime(2000);


const nav4 = await driver.findElement(
    webdriver.By.xpath('/html/body/div[2]/div[1]/div/div[3]/h1'));
  
 
  await driver.executeScript("arguments[0].scrollIntoView()",nav4);
await commands.wait.byTime(2000);

await commands.measure.start('Oil AddOns');
//add to bundle
await commands.click.bySelectorAndWait('button.primary:nth-child(1)');
await commands.measure.stop();


await commands.measure.start('Oil Review');
//skip
await commands.click.bySelectorAndWait('.outline');
await commands.click.bySelectorAndWait('.tertiary');
await commands.measure.stop();
/*

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






const nav6 = await driver.findElement(
    webdriver.By.xpath('//div[@id="cybersource-input-container"]/iframe'));
  
 
  await driver.executeScript("arguments[0].scrollIntoView()",nav6);
  
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
  
 
 */


};