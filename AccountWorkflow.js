module.exports = async function(context, commands) {
await commands.measure.start('GuestUserHome');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com');
await commands.measure.stop();

await commands.wait.byTime(1000);

//await commands.measure.start('SignInPage');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/web/UserRegistrationForm');
//await commands.measure.stop();

await commands.wait.byTime(1000);

await commands.addText.byXpath('aap01@email.com','//input[@name=\'email\']');
await commands.addText.byXpath('Advance123','//input[@name=\'password\']');

await commands.wait.byTime(2000);

await commands.click.bySelectorAndWait('.css-1kctkoh');
await commands.wait.byPageToComplete();


await commands.measure.start('ProfilePage');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/web/UserRegistrationForm');
await commands.measure.stop();

await commands.wait.byTime(10000);

await commands.measure.start('MyAccount');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/web/MyAccountView');
await commands.measure.stop();

await commands.wait.byTime(10000);

};