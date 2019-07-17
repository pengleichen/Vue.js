Vue.directive('outerClose', {
  bind(el, binding) {
    function documentClickHandler(e) {
      if (el.contains(e.target)) {
        return false
      }
      if (binding.expression) {
        typeof binding.value === 'function' && binding.value(e)
      }
    }

    el.__vueClickOutside__ = documentClickHandler
    document.addEventListener('click', documentClickHandler)

    function documentKeyupHandler(e) {
      if (binding.expression && e.keyCode === 27) {
        typeof binding.value === 'function' && binding.value(e)

      }
    }

    el.__vueEscOutside__ = documentKeyupHandler
    if (binding.modifiers && binding.modifiers.esc || binding.modifiers['27']) {
      document.addEventListener('keyup', documentKeyupHandler)
    }
  },
  unbind(el, binding) {
    document.removeEventListener('click', el.__vueClickOutside__)
    delete el.__vueClickOutside__
    if (binding.modifiers && binding.modifiers.esc || binding.modifiers['27']) {
      document.removeEventListener('keyup', el.__vueEscOutside__)
      delete el.__vueEscOutside__
    }
  }
})
