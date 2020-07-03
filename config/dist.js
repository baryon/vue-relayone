process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const webpack = require('webpack')
const merge   = require('deep-assign')

const opts = require('./options')
const base = require('./webpack.config.js')

const config = merge(base, {
  entry: opts.paths.src,

  output: {
    filename: 'vue-relayone.js',
    path: opts.paths.output.dist,
    library: 'RelayOne',
    libraryExport: 'default',
    libraryTarget: 'umd'
  }
})

module.exports = config