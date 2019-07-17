function isValueNumber(value) {
  return (/(^-?\d+\.{1}\d+$)|(^-?[1-9]\d*$)|(^-?0{1}$)/).test(value)
}

Vue.component('input-number', {
  template: `
    <div class="input-number">
      <input type="text"
        :value="currentValue"
        @keyup.down="handleDown"
        @keyup.up="handleUp"
        @change="handleChange">
      <button
        @click="handleDown"
        :disabled="currentValue <= min">-</button>
      <button
        @click="handleUp"
        :disabled="currentValue >= max">+</button>
    </div>
  `,
  props: {
    max: {
      type: Number,
      default: Number.POSITIVE_INFINITY
    },
    min: {
      type: Number,
      default: Number.NEGATIVE_INFINITY
    },
    value: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  watch: {
    currentValue(val) {
      this.$emit('input', val)
      this.$emit('on-change', val)
    },
    value(val) {
      this.updateValue(val)
    }
  },
  methods: {
    updateValue(val) {
      if (val > this.max) val = this.max
      if (val < this.min) val = this.min
      this.currentValue = val
    },
    handleDown() {
      if (this.currentValue <= this.min) return
      this.currentValue -= this.step
    },
    handleUp() {
      if (this.currentValue >= this.max) return
      this.currentValue += this.step
    },
    handleChange(e) {
      let val = e.target.value.trim()
      const max = this.max
      const min = this.min
      if (isValueNumber(val)) {
        this.updateValue(+val)
      } else {
        e.target.value = this.currentValue
      }
    }
  },
  mounted() {
    this.updateValue(this.value)
  }
})
