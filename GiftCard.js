module.exports = async function(context, commands) {
	
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/');
await commands.wait.byTime(10000);


await commands.measure.start('GiftCard');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/web/GiftCardsBalanceView/');
await commands.measure.stop();

await commands.wait.byTime(5000); 

await commands.addText.byXpath('7777 2319 7995 9731','//input[@name=\'cardNumber\']');
await commands.wait.byTime(5000);

await commands.addText.byXpath('50239633','//input[@name=\'pin\']');
await commands.wait.byTime(5000);

await commands.click.bySelectorAndWait('#__next > div.css-1b2tw1j > div > div > form > div > div.css-vurnku > button');
await commands.wait.byTime(10000); 


await commands.measure.start('StoreLocator');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/web/StoreLocatorView/');
await commands.measure.stop();

await commands.wait.byTime(1000); 


};