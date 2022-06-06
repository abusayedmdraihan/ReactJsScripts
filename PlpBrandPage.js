module.exports = async function(context, commands) {
	
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/');
await commands.wait.byTime(10000);


await commands.measure.start('All Brands');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/brands');
await commands.measure.stop();

await commands.wait.byTime(15000); 
};