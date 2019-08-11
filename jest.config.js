const {argv} = require('yargs');
const baseConfig = require('./scripts/jest/config.base');

const {scope = 'all'} = argv;
const config = require(`./scripts/jest`)[scope];

module.exports = Object.assign({}, baseConfig, config);
