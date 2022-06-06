module.exports = async function(context, commands) {


await commands.navigate('https://shop.ak.ecomqa.advancestores.com/');
await commands.wait.byTime(10000)


await commands.click.byXpath('//div[contains(text(),\'Account\')]');
await commands.wait.byTime(2000);

await commands.click.byXpath('//div[contains(text(),\'Sign in to your account\')]');
await commands.wait.byTime(5000);

await commands.addText.byXpath('spdg01@yopmail.com','//input[@name=\'email\']');
await commands.addText.byXpath('Advance123','//input[@name=\'password\']');
await commands.wait.byTime(5000);


await commands.wait.byTime(2000);
await commands.click.bySelectorAndWait('.css-1kctkoh');
await commands.wait.byTime(10000);

await commands.navigate('https://shop.ak.ecomqa.advancestores.com/');
await commands.wait.byTime(10000);



///await commands.wait.bySelector('#__next > header > div > div.css-19y1gq4 > div.css-1kzyvnq > div > div > ul > li:nth-child(6) > div > a > div.css-8ggg47',50000);

//await commands.wait.byTime(10000);

 await commands.measure.start('SpeedPerkDashboard');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/web/SpeedPerksRewards?storeId=10151&catalogId=10051&langId=-1');
await commands.measure.stop(); 



//await commands.click.bySelectorAndWait('#__next > div.css-1b2tw1j > div > div.css-1gkrrk7 > div.css-mxw7sa > div.css-34t9vi > div.css-nrpbp6',50000);
//#sp-add-receipt-button
//#sp-add-receipt-button
 
await commands.measure.start('AddReceiptPage');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/web/SpeedPerksRewards/AddReceipt');
//await commands.wait.byPageToComplete();
await commands.measure.stop();
await commands.wait.byTime(10000);  






// this functionality is not working // discussed with aravind-https://advanceautoparts.atlassian.net/browse/BEX-1783
/* await commands.measure.start('SubmitReceipt');
await commands.click.bySelectorAndWait('#__next > div.css-1b2tw1j > div > div.css-1gkrrk7 > div.css-mxw7sa > div.css-34t9vi > div.css-nrpbp6',50000);
await commands.wait.byPageToComplete();
await commands.measure.stop();
await commands.wait.byTime(30000); */

/* await commands.navigate('https://shop.ak.ecomqa.advancestores.com/web/SpeedPerksRewards?storeId=10151&amp;catalogId=10051&amp;langId=-1');
await commands.wait.byPageToComplete(); */

/* await commands.measure.start('ShopNow');
await commands.click.bySelectorAndWait('#__next > div.css-1b2tw1j > div > div.css-1gkrrk7 > div.css-mxw7sa > div.css-34t9vi > div.css-me5mxb',50000);
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/');
await commands.wait.byPageToComplete();
await commands.measure.stop();
await commands.wait.byTime(30000); */  


/* await commands.navigate('https://shop.ak.ecomqa.advancestores.com/p/mobil1-advanced-full-synthetic-5w-30-motor-oil-5-quart-44899/10069908-P');
await commands.wait.byTime(10000);

await commands.click.bySelectorAndWait('#__next > div.css-1b2tw1j > div > div.css-jjimp7 > div.css-12ei8tc > div.css-vurnku > div.css-11z0t6y > div.css-1dywpz5 > div.css-ke5ir5 > button');


//*************commenting below line - selector failed -parag
//await commands.wait.bySelector('#__next > div.css-1b2tw1j > div > div > div.css-o3x1z3 > div.css-qg0v67 > div:nth-child(3) > button.primary.css-1ihs7t7',50000);

//***** GD
await commands.wait.bySelector('#__next > div.css-1b2tw1j > div > div.css-jjimp7 > div.css-12ei8tc > div.css-vurnku > div.css-11z0t6y > div.css-1dywpz5 > div.css-ke5ir5 > button',50000);


await commands.wait.byPageToComplete();
await commands.measure.stop();

await commands.wait.byTime(10000); 
 */
};