const path       = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack    = require('webpack')

const isDev = process.evn.NODE_ENV === 'development'
