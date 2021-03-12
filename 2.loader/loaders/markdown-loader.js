const marked = require('marked')
const loaderUtils = require('loader-utils');


// module.exports = (source) => {
// 	// 1. 将 markdown 转换为 html 字符串
// 	const html = marked(source);
// 	// 2. 将 html 字符串拼接为一段导出字符串的 JS 代码
// 	const code = `module.exports = ${JSON.stringify(html)}`;
//
// 	return code;
// };


module.exports = function(source) {
	const options = this.getOptions();
	console.log('options', options);

	// 1. 将 markdown 转换为 html 字符串
	const html = marked(source)
	return html
}
