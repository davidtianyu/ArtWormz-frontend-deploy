const config = require('../../config')

export default {
  // 配置显示在浏览器标签的title
  title: '',
  // 域名
  domain: 'https://artwormz.com',
  // 基本URL：测试服务器API，打包发布
  // baseUrl: 'https://testnet.artwormz.com/iobots',
  // 基本URL：生产服务器API，打包发布
  baseUrl: 'https://artwormz.com/iobots',
  // 基本URL：本地API，本地开发
  // baseUrl: 'http://' + config.dev.host + ':' +  config.dev.port + '/dev/iobots',
}
