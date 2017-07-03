if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/vendor/third-party-code.js'); // eslint-disable-line no-console
}

const thirdPartyCode = { name:'thirdPartyCode' };

export default thirdPartyCode;

