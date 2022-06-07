module.exports = async function(context, commands) {
    await commands.measure.start('https://www.youtube.com/');
    return commands.measure.start('https://www.facebook.com/');
}
