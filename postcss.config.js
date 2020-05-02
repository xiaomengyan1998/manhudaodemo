module.exports = {
  plugins: {
    autoprefixer: {
      // 不需要设置这个选项， 它会自动去使用 .browserslistrc 这个文件的配置
      browsers: ['Android >= 4.0', 'iOS >= 8'],
      //npm i autoprefixer postcss-pxtorem --save-dev安装插件
    },

    'postcss-pxtorem': {
      // 转换的基准值 1rem = 37.5px
      // xrem = 44px
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
