const Swipe = require('../model/swipe')

Swipe.initData = () => {
  
  for (let i = 0; i < 5; i ++) {
    Swipe.create({href: `/images/${i + 1}`})
  }

}

module.exports = Swipe