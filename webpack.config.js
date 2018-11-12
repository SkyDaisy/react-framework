const isProd = process.env.NODE_ENV === 'production'
const publicUrl = '/'

const webpack = require('webpack')
const path = require('path')

module.exports = {
    mode: isProd ? 'production' : 'development'
}

