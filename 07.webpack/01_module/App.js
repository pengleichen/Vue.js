const App = {
  template: `
    <div>我是一个入口组件</div>
  `
}
// 声明并导出
export const num1 = 2 // 作为一整对象的key导出

// 声明再导出
const num2 = 3
export {
  num2
}

export function add(a, b) {
  console.log(a + b)
}
export default App