if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/common/fonts/roboto/index.js'); // eslint-disable-line no-console
}

const fonts = [
    // 'Roboto-Thin.ttf'
];

fonts.forEach(font=>{
    const pathToFont = './fonts/'+font;
    require(`${pathToFont}`);
});

require('./style');

