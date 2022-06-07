module.exports = async function(context, commands) {
  await commands.navigate('https://www.google.com');
  // We will get here when the action is finished since we use await
}
