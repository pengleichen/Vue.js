import Vue from 'vue'
import moment from 'moment'
export default Vue.filter('date', (value, pattern) => {
  if (!value) return ''
  pattern = pattern || 'YYYY-MM-DD'
  return moment(value).format(pattern)
})