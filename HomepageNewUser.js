module.exports = async function(context, commands) {
	const webdriver = context.selenium.webdriver;

const driver = context.selenium.driver;
const actions=driver.actions({async:true});

await commands.navigate('https://shop.ak.ecomqa.advancestores.com/c3/air-fresheners-fragrances/15418');


await commands.wait.byTime(500);

await commands.click.byXpath('//div[normalize-space(.)=\'Account\']');


await commands.wait.byTime(500);


await commands.click.byXpath('//*[@id="__next"]/header/div/div[2]/div[2]/div/div/div[4]/div[1]/button/div');
await commands.wait.byPageToComplete();
//await commands.scroll.byPixels('500, 650');
//await commands.wait.byTime(1000);


/*
//firstname

const firstname = await driver.findElement(webdriver.By.xpath("//input[@name='firstName']"));
  
  await actions.click(firstname).sendKeys("Homenew").perform();
  await commands.wait.byTime(1200);
  
  //last name
  
  const lastname = await driver.findElement(webdriver.By.xpath("//input[@name='lastName']"));
  
  await actions.click(lastname).sendKeys("user").perform();
  await commands.wait.byTime(1200);
  //email
  
  const email = await driver.findElement(webdriver.By.xpath("//input[@name='email']"));
  
  await actions.click(email).sendKeys("hoo@yopmail.com").perform();
  await commands.wait.byTime(1200);
  
  //mobno
  const MobNo = await driver.findElement(webdriver.By.xpath("//input[@name='phone']"));
  
  await actions.click(MobNo).sendKeys("7605643567").perform();
  await commands.wait.byTime(1200);
  
  //password
  
  const password1 = await driver.findElement(webdriver.By.xpath("//input[@name='password']"));
  
  await actions.click(password1).sendKeys("Advance123").perform();
  await commands.wait.byTime(1200);






await commands.measure.start('Home');
await commands.click.bySelectorAndWait('button.primary:nth-child(12)');
await commands.click.byXpath("//div[@class='css-1bwaguo']");
await commands.click.bySelectorAndWait('button.primary:nth-child(4)');
await commands.measure.stop();*/

await commands.addText.byXpath("advance","//input[@name='firstName']");
  await commands.wait.byTime(1200);
  
  await commands.addText.byXpath("auto","//input[@name='lastName']");
  await commands.wait.byTime(1200);
  
  let value=Math.random()*131;
//let value2=Math.round(value);
    
  
  await commands.addText.byXpath("aap"+value+"@email.com","//input[@name='email']");
  await commands.wait.byTime(1200);
  
  await commands.addText.byXpath("7605645345","//input[@name='phone']");
  await commands.wait.byTime(1200);
  
  await commands.addText.byXpath("Advance123","//input[@name='password']");
  await commands.wait.byTime(1200);
  
  await commands.click.bySelectorAndWait('button.primary:nth-child(12)');
  await commands.wait.byTime(1200);
  
  const password1 = await driver.findElement(webdriver.By.xpath('(//div[@class="css-fgop6r"])[3]'));
  
  await actions.click(password1).perform();
  await commands.wait.byTime(1200);
  //await commands.click.byXpath("/html/body/div[7]/div/div/div[2]/div[1]/div[1]/div[3]/div[3]");
  
//await commands.measure.start('Home');
  await commands.click.bySelectorAndWait('button.primary:nth-child(4)');
  //await commands.measure.stop();
  
  
  await commands.measure.start('NewUserHomePage');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/');
  await commands.measure.stop();
  await commands.wait.byTime(1200);

}