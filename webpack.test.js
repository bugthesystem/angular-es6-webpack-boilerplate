/**
 * Webpack config for tests
 */
module.exports = require('./webpack.make.js')({
    BUILD: false,
    TEST: true
});