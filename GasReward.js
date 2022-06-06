
module.exports = async function(context, commands) {
  // We have some Selenium context
  const webdriver = context.selenium.webdriver;
  //const cont=context.selenium.JavaScriptExecutor;
  const driver = context.selenium.driver;
 

  // Start to measure
  await commands.measure.start();
  await commands.navigate('https://shop.ak.ecomqa.advancestores.com');	

await commands.navigate('https://shop.ak.ecomqa.advancestores.com/web/UserRegistrationForm');
await commands.wait.byTime(5000);

await commands.addText.byXpath('spdg02@yopmail.com','//input[@name=\'email\']');
await commands.addText.byXpath('Advance123','//input[@name=\'password\']');

await commands.wait.byTime(2000);
await commands.click.bySelectorAndWait('button.primary:nth-child(4)');
await commands.wait.byTime(10000);

 

await commands.navigate('https://shop.ak.ecomqa.advancestores.com/web/SpeedPerksRewards?storeId=10151&catalogId=10051&langId=-1');

  //const actions = driver.actions();
  const nav = await driver.findElement(
    webdriver.By.xpath('//div[text()="speedperk Gas"]')
  );
  await driver.executeScript("arguments[0].scrollIntoView()",nav);
  const nav1 = await driver.findElement(
    webdriver.By.xpath('//div[text()="Perks Bucks"]')
  );
  await driver.executeScript("arguments[0].scrollIntoView()",nav1);
  //await actions.click(nav).perform();
await commands.measure.start('Gas Rewards');
await commands.click.bySelectorAndWait('.css-i3dtu5');
//await commands.wait.byTime(10000);
  // Measure everything, that means you will run the JavaScript that collects the first input delay
  return commands.measure.stop();
};
