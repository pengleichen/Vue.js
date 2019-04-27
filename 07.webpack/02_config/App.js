import butterfly from './butterfly.jpg'
import Path from './Path'
const App = {
  template: `
    <div>
    <h1>我是入口组件</h1>
    <img :src="imgSrc" alt="butterfly">
    </div>
  `,
  computed: {
    imgSrc() {
      return Path.of(butterfly)
    }
  }
}

export default App