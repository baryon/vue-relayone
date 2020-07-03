const path    = require('path')
const version = require('../package.json').version
const env     = process.env.NODE_ENV || 'development'

const banner =
  'vue-relayone v' + version + ' (http://github.com/chainbow)\n' +
  'An unofficial Vue.js component for RelayOne.\n' +
  '(c) ' + new Date().getFullYear() + ' ChainBow\n' +
  'Released under the MIT License.';

module.exports = {
  version,
  env,
  banner,

  paths: {
    root: path.join(__dirname, '..'),

    src: path.join(__dirname, '..', 'src'),

    output: {
      dist: path.join(__dirname, '..', 'dist'),
      demo: path.join(__dirname, '..', 'demo')
    },

    resolve(dir) {
      return path.join(__dirname, '..', dir);
    }
  }
}
