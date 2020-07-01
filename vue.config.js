
module.exports = {
    // 基本路径
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    // 输出文件目录
    outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    /**
     * webpack配置,see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
     **/
    chainWebpack: () => {
    },
    configureWebpack: () => {
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // css相关配置
    css: {
      // 是否使用css分离插件 ExtractTextPlugin
      extract: true,
      // 开启 CSS source maps?
      sourceMap: false,
      // css预设器配置项
      loaderOptions: {
        sass: {
          // 全局导入stylus样式
          prependData: `@import "./src/styles/main.scss";`
        }
      },
      // 启用 CSS modules for all css / pre-processor files.
      requireModuleExtension: false
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    /**
     *  PWA 插件相关配置,see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
     */
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
      open: false, //编译完成是否打开网页
      host: '0.0.0.0', //使用指定地址，默认localhost，0.0.0.0代表可以被外界访问
      port: 8080, //访问端口
      https: false,
      hotOnly: false,
      proxy: null, // 设置代理
      overlay:{
          warnings:true,
          errors:true
      },
      before: app => {
      }
    },
    /**
     * 第三方插件配置
     */
    pluginOptions: {}
  }