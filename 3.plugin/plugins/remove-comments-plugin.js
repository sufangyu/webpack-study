class RemoveCommentsPlugin {
	apply (compiler) {
		// compiler => 包含了我们此次构建的所有配置信息
		// console.log('RemoveCommentsPlugin 启动')

		compiler.hooks.emit.tap('RemoveCommentsPlugin', (compilation ) => {
			// compilation => 可以理解为此次打包的上下文
			for (const name in compilation.assets) {
				// // 输出文件名称
				// console.log(name)

				// // 输出文件内容
				// console.log(compilation.assets[name].source());

				// 清除注释
				if (name.endsWith('.js')) {
					const contents = compilation.assets[name].source();
					const noComments = contents.replace(/\/\*{2,}\/\s?/g, '');
					compilation.assets[name] = {
						source: () => noComments,
						size: () => noComments.length
					}
				}

			}
		});
	}
}

module.exports = RemoveCommentsPlugin;
