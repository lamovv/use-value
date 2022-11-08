export default {
  esm: 'rollup',
  cjs: 'rollup',
  // umd: {
  //   name: 'use-value',
  //   globals: {
  //     react: 'React',
  //     'react-dom': 'ReactDOM',
  //   },
  // },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
      'antd',
    ],
    [
      'import',
      {
        libraryName: '@ant-design/icons',
        libraryDirectory: 'lib/icons',
        camel2DashComponentName: false,
      },
      '@ant-design/icons',
    ],
  ],
};
