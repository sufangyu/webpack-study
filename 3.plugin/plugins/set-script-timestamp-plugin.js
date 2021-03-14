/**
 * https://juejin.cn/post/6844904070868631560#comment
 * @type {HtmlWebpackPlugin}
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

class SetScriptTimestampPlugin {
	apply(compiler) {
		compiler.hooks.compilation.tap('SetScriptTimestampPlugin',
			(compilation) => {
				HtmlWebpackPlugin.getHooks(compilation).afterTemplateExecution.tapAsync('SetScriptTimestampPlugin', (data, cb) => {
					console.log(data);
					// 读取并修改 script 上 src 列表
					let assets = JSON.parse(data.plugin.assetJson);
					console.log(assets);
				})
			}
		);
	}
}
module.exports = SetScriptTimestampPlugin;
