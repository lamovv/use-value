const { env } = require('process');

const https = env.HTTPS == 1;

module.exports = {
  // silent: false,
  logLevel: 'DEBUG',
  https,
  hosts: [
    'pre.my.domain.com',
    'daily.my.domain.com',
    'my.domain.com',
  ],
  proxy: {
    port: 8800,
  },
  openPath: '',
  webPort: 8001,
  webRoot: './dist', // 预览编译后效果
};
