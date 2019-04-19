module.exports = {
  productionSourceMap: false, // 去除map文件
  css: {
    extract: false, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {}, // css预设器配置项
    modules: false // 启用 CSS modules for all css / pre-processor files.
  },
  pages: {
    index: {
      entry: 'src/main.js', // page 的入口
      template: 'public/index.html', // 模板来源
      filename: 'index.html' // 输出文件名
    }
  }
}
