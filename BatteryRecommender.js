module.exports = async function(context, commands) {

await commands.navigate('https://shop.ak.ecomqa.advancestores.com');
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


await commands.navigate('https://shop.ak.ecomqa.advancestores.com');
await commands.wait.byTime(10000);

await commands.measure.start('BatteryRecommender');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/s/battery-finder');
await commands.scroll.byPixels('550, 320');
//await commands.measure.stop();


//await commands.wait.byTime(10000);

/* // add a vehicle button
await commands.wait.byTime(10000);

await commands.measure.start('AddVehicledetails');
await commands.click.bySelectorAndWait('#__next > div > div > div > div.css-vurnku > div.css-1eul6br > div.css-12ia4q5 > div > div.css-znn8ng > button:nth-child(2)');
await commands.wait.bySelector('#__next > div > div > div > div.css-vurnku > div.css-1eul6br > div.css-12ia4q5 > div > div.css-znn8ng > button:nth-child(2) > div');
await commands.wait.byPageToComplete();
await commands.measure.stop();

await commands.wait.byTime(20000);

//Car/Truck
 await commands.addText.byXpath('Car/Truck','//input[@type=\'vehicleType\']');
await commands.wait.byTime(1000);
await commands.addText.byXpath('2020','//input[@type=\'vehicleYear\']');
await commands.wait.byTime(1000);
await commands.addText.byXpath('Acura','//input[@type=\'vehicleMake\']');
await commands.wait.byTime(1000);
await commands.addText.byXpath('ILX','//input[@type=\'vehicleModel\']');
await commands.wait.byTime(1000);
await commands.addText.byXpath('2059288','//input[@type=\'vehicleEngine\']');
await commands.wait.byTime(20000);  
 
 
 */ 
 
 //**************PreRequesties- Create Speedperk user & add the vehicle on Batter recommender page 
 
//Click on Continue
 await commands.click.bySelectorAndWait('.primary',100);
 await commands.wait.byTime(100);
 
 

//*** Static 8 Navigations 
//****Enter ZIPCODE
await commands.addText.byXpath('14853','//input[@name=\'zipCode\']');
//Click on Continue
await commands.click.bySelectorAndWait('#__next > div > div > div.css-11o2192 > div > div.css-1pysja1 > div.css-1lx7oj > div.css-ti102k > div > button',100);

//PAGE 2- select mins
await commands.click.bySelectorAndWait('#__next > div > div > div.css-11o2192 > div > div.css-1pysja1 > div.css-1lx7oj > div.css-ti102k > div > div.css-g5pnrz > button:nth-child(1)',100);

//PAGE 3- select MILES
await commands.click.bySelectorAndWait('#__next > div > div > div.css-11o2192 > div > div.css-1pysja1 > div.css-1lx7oj > div.css-ti102k > div > div.css-g5pnrz > button:nth-child(1)',100);

//PAGE 4- select Traffic
await commands.click.bySelectorAndWait('#__next > div > div > div.css-11o2192 > div > div.css-1pysja1 > div.css-1lx7oj > div.css-ti102k > div > div.css-g5pnrz > button:nth-child(1)',100);

//PAGE 5- select places
await commands.click.bySelectorAndWait('#__next > div > div > div.css-11o2192 > div > div.css-1pysja1 > div.css-1lx7oj > div.css-ti102k > div > div.css-g5pnrz > button:nth-child(1)',100);

//PAGE 6- Without driving
await commands.click.bySelectorAndWait('#__next > div > div > div.css-11o2192 > div > div.css-1pysja1 > div.css-1lx7oj > div.css-ti102k > div > div.css-g5pnrz > button:nth-child(1)',100);

//PAGE 7- Battery Replaced
await commands.click.bySelectorAndWait('#__next > div > div > div.css-11o2192 > div > div.css-1pysja1 > div.css-1lx7oj > div.css-ti102k > div > div.css-g5pnrz > button:nth-child(2)',100);

await commands.scroll.byPixels('500, 200');
//PAGE 8- View Results  // this Page is not working on QA01prd- Jira : https://advanceautoparts.atlassian.net/browse/BEX-3577
//await commands.measure.start('ViewResults');
await commands.click.bySelectorAndWait('#__next > div > div > div.css-11o2192 > div > div.css-1pysja1 > div.css-1lx7oj > div.css-ti102k > div > div.css-vurnku > button',100);
await commands.wait.byPageToComplete();
await commands.scroll.byPixels('500, 200');
await commands.measure.stop();

await commands.wait.byTime(1000);


};