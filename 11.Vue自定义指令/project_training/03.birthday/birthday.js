const TimeUtil = {
  getUnix() {
    return new Date().getTime()
  },
  getBeforeDays(timestamp) {
    const now = this.getUnix()
    return Math.floor((now - timestamp) / 1000 / 86400)
  },
  getFormatBirthday(timestamp) {
    const days = this.getBeforeDays(timestamp)
    if (days < 0) {
      alert('尚未出生')
      return ''
    }
    return `已经出生了 ${days} 天`
  },
  getFormatAge(timestamp) {
    const days = this.getBeforeDays(timestamp)
    if (days < 0) {
      alert('尚未出生')
      return ''
    }
    let year = Math.floor(days / 365)
    let month = this.getMonthByDays(Math.floor(days - year * 365))
    let day = days - year * 365 - this.getBeforeMonthDays(month)
    return `已经 ${year} 岁 ${month} 个月 ${day} 天`
  },
  getMonthByDays(days) {
    let diff = days
    for (let i = 1; i <= 12; i++) {
      diff -= this.getMonthDay(i)
      if (diff <= 0) {
        return i - 1
      }
    }
    return 0
  },
  getBeforeMonthDays(month) {
    return Array(month)
      .fill()
      .map((item, index) => index)
      .reduce((total, current) => total + this.getMonthDay(current + 1), 0)
  },
  getMonthDay(month) {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 31
      case 2:
        return 28
      default:
        return 30
    }
  }

}

Vue.directive('birthday', {
  bind(el, {value}) {
    el.innerHTML = `${TimeUtil.getFormatBirthday(value)}<br>
      ${TimeUtil.getFormatAge(value)}`
  }
})
