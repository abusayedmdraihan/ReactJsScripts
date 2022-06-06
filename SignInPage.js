module.exports = async function(context, commands) {

await commands.navigate('https://shop.ak.ecomqa.advancestores.com');
await commands.wait.byTime(5000);

await commands.measure.start('SignInPage');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/web/UserRegistrationForm/');
await commands.measure.stop();

await commands.wait.byTime(1000);


await commands.addText.byXpath('aap02@email.com','//input[@name=\'email\']');
await commands.addText.byXpath('Advance123','//input[@name=\'password\']');

await commands.wait.byTime(2000);

await commands.click.bySelectorAndWait('button.primary:nth-child(4)');
await commands.wait.byTime(10000);

};