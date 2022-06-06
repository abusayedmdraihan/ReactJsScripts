module.exports = async function(context, commands) {
	
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/');
await commands.wait.byTime(10000);

await commands.navigate('https://shop.ak.ecomqa.advancestores.com/brands');
await commands.wait.byTime(10000); 

await commands.addText.byXpath('3M','//input[@type=\'search\']');
//await commands.wait.byTime(15000);
await commands.wait.byTime(25000);

await commands.measure.start('BrandList');
await commands.click.bySelectorAndWait('#__next > div.css-1b2tw1j > div > div.css-14gcsxv > div.css-z54kij > div > a');
await commands.wait.byPageToComplete();
await commands.measure.stop();

await commands.wait.byTime(10000); 

};


