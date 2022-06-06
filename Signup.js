module.exports = async function(context, commands) {
 
 await commands.measure.start('SignUp');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/');


await commands.wait.byTime(500);

await commands.click.byXpath('//div[normalize-space(.)=\'Account\']');
//await commands.scroll.byPixels('500, 200');
//await commands.scroll.byPixels('500, 350');

await commands.wait.byTime(500);

/*await commands.click.byXpath('#__next > header > div > div.css-19y1gq4 > div.css-1kzyvnq > div > div');

await commands.wait.byTime(5000);*/

//await commands.measure.start('SignUp');
//await commands.navigate('https://shop.ak.ecomqa.advancestores.com/');
await commands.click.byXpath('//*[@id="__next"]/header/div/div[2]/div[2]/div/div/div[4]/div[1]/button/div');
await commands.wait.byPageToComplete();
//await commands.scroll.byPixels('500, 650');
await commands.wait.byTime(1000);
await commands.measure.stop();

await commands.wait.byTime(5000);


};