const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const TerserPlugin = require('terser-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  runtimeCompiler: true, // 包含编译器
  publicPath: process.env.BASE_URL || '/',
  lintOnSave: true,
  productionSourceMap: false,
  transpileDependencies: [
    // 'element-ui-verify/dist', 'element-ui/packages/upload/examples'
  ],
  configureWebpack: config => {
    // 配置代码压缩
    if (process.env.NODE_ENV === 'production' && !process.env.NO_MINIMIZE) {
      config.plugins.push(
        // 生产环境自动删除console
        new TerserPlugin({
          extractComments: false, // 不提取LICENSE等文件
          sourceMap: false,
          parallel: true,
          terserOptions: {
            warnings: false,
            compress: {
              drop_debugger: true,
              drop_console: true,
            },
          },
        }),
      )
    }
  },
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    // 移除 preload 插件
    config.plugins.delete('preload')
    // 增加打包分析
    if (process.env.IS_ANALYZ) {
      config.plugin('webpack-report')
        .use(BundleAnalyzerPlugin, [{
          analyzerMode: 'static',
        }])
    }
    if (process.env.NODE_ENV === 'production' || process.env.NO_MINIMIZE) {
      config.optimization.minimize(false)
    }
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.test(/\.svg$/)
      .include
      .add(resolve('src/assets/icons/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    // 设置一些别名
    // config.resolve.alias
    //   .set('@g', resolve('examples/global'))
    //   .set('@bc', resolve('examples/baseComponent'))
    //   .set('@common', resolve('examples/modules/common/view'))
    //   .set('@utils', resolve('examples/assets/utils'))
  },
  devServer: {
    port: 9088,
    proxy: {
      '/v1': {
        target: 'http://localhost:3000',
        pathRewrite: {
          // '^/api': ''
        },
        changeOrigin: true,
        ws: false
      }
    }
  }
}
