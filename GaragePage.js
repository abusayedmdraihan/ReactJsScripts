module.exports = async function(context, commands) {

await commands.navigate('https://shop.ak.ecomqa.advancestores.com');

await commands.wait.byTime(10000);

await commands.click.byXpath('//div[contains(text(),\'Account\')]');
await commands.wait.byTime(2000);

await commands.click.byXpath('//div[contains(text(),\'Sign in to your account\')]');
await commands.wait.byTime(5000);

await commands.addText.byXpath('aap01@email.com','//input[@name=\'email\']');
//await commands.addText.byXpath('testpt@yopmail.com','//input[@name=\'email\']');
await commands.addText.byXpath('Advance123','//input[@name=\'password\']');
await commands.wait.byTime(2000);

await commands.click.bySelectorAndWait('.css-1kctkoh');
await commands.wait.byTime(10000);


await commands.measure.start('MyVechicalPage');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/web/MyGarageView');
await commands.measure.stop();
await commands.wait.byTime(10000);

await commands.measure.start('AddressBook');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/web/AddressBookForm');
await commands.measure.stop();

await commands.wait.byTime(10000);

};


