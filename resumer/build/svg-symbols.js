//使用脚本将所有 svg 拼成一个 svg，原来的多个 svg 变成了多个 symbol

// 引入模块
// const 定义常量
const path = require('path'); // path=>路径工具
const fs = require('fs');  // fs=>文件系统工具

// __dirname 当前脚本所在目录
// 将得到svgFolder为svg文件所在目录,jsPath为本脚本生成js文件的目录
let svgFolder = path.join(__dirname, '../static/svg_icons/')
let jsPath = path.join(__dirname, '../src/assets/icons.js')

// fs.readdir(path) => 方法将返回一个包含“指定目录下所有文件名称”的数组对象。
let svgFiles = fs.readdirSync(svgFolder)

let symbols = svgFiles.map(function(filename){
	let absolutePath = path.join(svgFolder, filename)
	// fs.readFileSync()方法用于同步读取文件，返回一个字符串。
	let fileContent = fs.readFileSync(absolutePath).toString('utf-8')
	// path.basename() 用于提取出用 ‘/' 隔开的path的最后一部分
	// 第二参数为过滤掉的字符(比如文件名为，xxx.html，第二个参数为'.html'，则输出xxx)
	let name = path.basename(filename, '.svg');
	return fileContent
		.replace(/<\?.+?\?>/g, '') //去掉<?...?>
		.replace(/<!.+?>/g, '')  //去掉<!...>
		.replace(/version=".+?"/g, '') //去掉version="..."
		.replace(/xmlns=".+?"/g, '') //去掉xmlns="..."
		.replace(/fill=".+?"/g, '') //去掉fill="..."
		.replace(/stroke=".+>"/g, '')  //去掉stroke="..."
		// 反引号，es6新语法，也是定义字符串只不过是字符串模板，里面的$是占位符，就类似python%
		.replace(/<svg/, `<svg id="icon-${name}"`)  //给svg标签添加id='icon-自己的名字'
		// \b => 单词边界
		.replace(/\bsvg\b/g, 'symbol') // 将所有的svg换为symbol
		.replace(/\s{2,}/g, ' ') // 将两个或以上空格改为一个空格
}).join('\n')

let js = `export default \`<svg style="display:none">\n${symbols}\n</svg>\`\n`

// writeFileSync方法用于同步写入文件。
// fs.writeFileSync(fileName, str, [options]);
// 它的第一个参数是文件路径，第二个参数是写入文件的字符串，第三个参数对象，包含encoding文件编码格式，mode文件读写权限，flag读取模式
fs.writeFileSync(jsPath, js , {flag: 'w'})