module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
  },
  weapp: {},
  h5: {
		publicPath: '/', // 关注点1 静态资源获取路径
		router: {
			basename: '', // 关注点2
			mode: 'browser', // 或者是 'hash'
			customRoutes: {}
		}
	}
}
