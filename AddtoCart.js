module.exports = async function(context, commands) {


await commands.navigate('https://shop.ak.ecomqa.advancestores.com/');
await commands.wait.byTime(2000);

await commands.navigate('https://shop.ak.ecomqa.advancestores.com/p/autocraft-car-suv-seat-cover-black-waffle-classic-universal-low-back-breathable-all-season-2-pack-ac221562067b/6150618-P?navigationPath=L1*14919%7CL2*14992%7CL3*15487');
await commands.wait.byTime(2000);

/// ADD To CART 

await commands.measure.start('Add to Cart Home');
await commands.click.bySelectorAndWait('.css-1mewsu');
await commands.wait.byPageToComplete();
await commands.wait.byTime(1500); 
await commands.measure.stop();

//proceed checkout

//await commands.wait.bySelector('.css-1ihs7t7',50000);


await commands.wait.byTime(2000); 

}