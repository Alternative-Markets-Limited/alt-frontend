const {
    override,
    fixBabelImports,
    addPostcssPlugins,
    addWebpackPlugin,
} = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const tailwind = require('tailwindcss');

module.exports = override(
    fixBabelImports('import', {
        libraryDirectory: 'es',
        libraryName: 'antd',
        style: false,
    }),
    addPostcssPlugins([tailwind]),
    addWebpackPlugin(new AntdDayjsWebpackPlugin())
);
