const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   crossorigin: "*"
// })

module.exports = {
  devServer: {
    proxy: "http://localhost:9300/",
    headers: { "Access-Control-Allow-Origin": "*", 'Access-Control-Allow-Headers': '*', }

  },
  configureWebpack: {
    devServer: {
      proxy: "http://localhost:9300/",
      headers: { "Access-Control-Allow-Origin": "*" },
      
    }
  }
}
