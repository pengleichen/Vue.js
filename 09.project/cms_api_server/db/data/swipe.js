const Swipe = require('../model/swipe')

module.exports = () => {

  const createUser = 'Kevin'
  const updateUser = 'Kevin'
  for (let i = 0; i < 5; i ++) {
    Swipe
      .create({href: `/image/${i + 1}`, createUser, updateUser})
      .then(p => console.log(`created. ${JSON.stringify(p)}`))
      .catch(e => console.log(`failed. ${e}`))
  }

}