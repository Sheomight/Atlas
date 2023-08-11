const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  filenameHashing: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/atlas/'
    : '/'
})
