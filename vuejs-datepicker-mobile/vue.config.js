module.exports = {
  productionSourceMap: false, // 去除map文件
  pages: {
    index: {
      entry: 'src/main.js', // page 的入口
      template: 'public/index.html', // 模板来源
      filename: 'index.html' // 输出文件名
    }
  }
}
