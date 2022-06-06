module.exports = async function(context, commands) {

await commands.navigate('https://shop.ak.ecomqa.advancestores.com/web/UserRegistrationForm/');
await commands.click.byXpath('//div[contains(text(),\'Account\')]');
await commands.wait.byTime(2000);

await commands.click.byXpath('//div[contains(text(),\'Sign in to your account\')]');
await commands.wait.byTime(2000);

//await commands.addText.byXpath('testpt@yopmail.com','//input[@name=\'email\']');
await commands.addText.byXpath('brakebundle5@yopmail.com','//input[@name=\'email\']');
await commands.addText.byXpath('Advance123','//input[@name=\'password\']');
await commands.wait.byTime(2000);

await commands.click.bySelectorAndWait('button.primary:nth-child(4)');
await commands.wait.byTime(1000);
 await commands.measure.start('RegisteredUserHomePage');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com');
await commands.wait.byPageToComplete();
await commands.measure.stop();
await commands.wait.byTime(1000);
const webdriver = context.selenium.webdriver;

const driver = context.selenium.driver;
 
 //scrolling view
const nav1 = await driver.findElement(
    webdriver.By.xpath("//div[@class='css-1ga0jt8']"));
  
 
  await driver.executeScript("arguments[0].scrollIntoView()",nav1);
  
  
  //order details
  await commands.wait.byTime(1000);
  const actions=driver.actions({async:true});
  await commands.measure.start('OrderDetails');
   const orderDetails = await driver.findElement(webdriver.By.xpath("//button[@class='secondaryRedesign css-1x3sxp0']"));
 
  await actions.click(orderDetails).perform();
  await commands.wait.byPageToComplete();
  await commands.measure.stop();
   await commands.wait.byTime(3000);
   
   
   await commands.navigate('https://shop.ak.ecomqa.advancestores.com');
  
	


//scrolling view
const nav2 = await driver.findElement(
    webdriver.By.xpath("//div[@class='css-1ga0jt8']"));
  
 
  await driver.executeScript("arguments[0].scrollIntoView()",nav2);
    await commands.wait.byTime(5000);
   //order History
  await commands.measure.start('orderHistory');
  /*
  const orderHistory = await driver.findElement(webdriver.By.xpath("//button[@class='outlineRedesign css-1p2sck8']"));
  await actions.click(orderHistory).perform();
  
  */
  
  await commands.click.byXpath("//button[@class='outlineRedesign css-1p2sck8']");
  await commands.wait.byPageToComplete();
  await commands.measure.stop();
  
  await commands.measure.start('OrderLookUp');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/web/OrderSearch/');

await commands.measure.stop();
}