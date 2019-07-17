const TimeUtils = {
  // 当前时间戳
  getUnix() {
    return (new Date()).getTime()
  },
  // 获取今天0点0分0秒的时间戳
  getTodayUnix() {
    let date = new Date()
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    return date.getTime()
  },
  // 获取今年1月1日0点0分0秒的时间戳
  getYearUnix() {
    let date = new Date()
    date.setMonth(0)
    date.setDate(1)
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    return date.getTime()
  },
  // 获取标准年月日
  getLastDate(time) {
    let date = new Date(time)
    let month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    return date.getFullYear() + '-' + month + '-' + day
  },
  getFormatTime(timestamp) {
    const now = this.getUnix()
    const today = this.getTodayUnix()
    const year = this.getYearUnix()
    const timer = (now - timestamp) / 1000 // 转换为秒级时间戳
    if (timer <= 0 || Math.floor(timer / 60) <= 0) {
      return '刚刚'
    } else if (timer <= 3600) {
      return `${Math.floor(timer / 60)}分钟前`
    } else if (timer >= 3600 && (timestamp - today >= 0)) {
      return `${Math.floor(timer / 3600)}小时前`
    } else if (timer / 86400 <= 31) {
      return `${Math.ceil(timer / 86400)}天前`
    } else {
      return this.getLastDate(timestamp)
    }
  }
}

Vue.directive('time', {
  bind(el, binding) {
    el.innerHTML = TimeUtils.getFormatTime(binding.value)
    el.__timer__ = setInterval(() => {
      el.innerHTML = TimeUtils.getFormatTime(binding.value)
    }, 60000)
  },
  unbind(el) {
    el.__timer__ && clearInterval(el.__timer__)
    delete el.__timer__
  }
})
