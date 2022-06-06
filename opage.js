module.exports = async function(context, commands) {

await commands.measure.start('/O Page');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/o/car-battery');
await commands.wait.byPageToComplete();
await commands.measure.stop();

};