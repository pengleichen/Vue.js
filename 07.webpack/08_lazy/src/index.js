import Vue from 'vue'
console.log(Vue)

document.querySelector('#aBtn').onclick = () => {
  import('./A').then(module => {
    const A = module.default
    alert(A.data)
    alert(A.getC().data)
  })
}

document.querySelector('#bBtn').onclick = () => {
  import('./B').then(module => {
    const B = module.default
    alert(B.data)
  })
}