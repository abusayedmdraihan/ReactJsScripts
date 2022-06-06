module.exports = async function(context, commands) {
	
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/web/UserRegistrationForm/');
await commands.click.byXpath('//div[contains(text(),\'Account\')]');
await commands.wait.byTime(2000);

await commands.click.byXpath('//div[contains(text(),\'Sign in to your account\')]');
await commands.wait.byTime(5000);

//await commands.addText.byXpath('testpt@yopmail.com','//input[@name=\'email\']');
await commands.addText.byXpath('aap01@email.com','//input[@name=\'email\']');
await commands.addText.byXpath('Advance123','//input[@name=\'password\']');
await commands.wait.byTime(2000);

await commands.click.bySelectorAndWait('button.primary:nth-child(4)');
await commands.wait.byTime(1000);
await commands.addText.byXpath('Racing Spark Plugs','//input[@type=\'text\']');
await commands.wait.byTime(15000);

await commands.measure.start('PLP-Search');
await commands.click.byXpath('//button[@aria-label=\'Search\']');
//await commands.wait.bySelector('#__next > div.css-1b2tw1j > div > div.css-1aaqx0x > div.css-6fw903 > div.css-1pysja1 > div:nth-child(1) > div.css-r1jlx8 > div.css-11z0t6y > div.css-vurnku > div > div.css-16wuz8p > button.primary.css-1wjdz5',50000);
await commands.wait.bySelector('#__next > div.css-1b2tw1j > div > div.css-m8lypm > div.css-6fw903 > div.css-1pysja1 > div:nth-child(1) > div.css-10xpvuf > div > div.css-vurnku > div > div.css-10v9z60 > a > h2',50000);


await commands.wait.byPageToComplete();
await commands.measure.stop();

await commands.wait.byTime(10000);


await commands.measure.start('PDP');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/p/autolite-racing-resistor-spark-plug-ar3924/15650020-P?searchTerm=Racing+Spark+Plugs');
await commands.measure.stop(); 

await commands.wait.byTime(10000);

await commands.measure.start('C4-Category');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/c4/backup-camera/17855?withoutVehicle=true&categoryGroupId=17855');
await commands.wait.byPageToComplete();
await commands.measure.stop(); 


await commands.wait.byTime(20000); 

await commands.measure.start('C2-Category');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/c2/car-audio-video/15025');
await commands.wait.byPageToComplete();
await commands.measure.stop(); 

await commands.wait.byTime(20000);

await commands.measure.start('C3-Category');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/c3/motor-oil/16075');
await commands.wait.byPageToComplete();
await commands.measure.stop(); 

await commands.wait.byTime(10000);


};