// urls.js
// Definitions of urls

//const domain = 'http://192.168.0.2:4001';  // Todd's local dev machine
const domain = 'https://mspnapi.dolehesten.org';

const serviceRoot = `${domain}/mspnapi`;
const secureServiceRoot = `${domain}/mspnsecure`;


const urls = {
    mspnApiRoot: `${serviceRoot}`,
    mspnApiSecureRoot: `${secureServiceRoot}`,
};

export default urls;

