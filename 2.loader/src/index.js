import create from "./heading";
// 引入css
import "./css/main.css";

// 引入解析 MD 文件
import about from './about.md'
console.log(about)

const heading = create();
document.body.append(heading);
