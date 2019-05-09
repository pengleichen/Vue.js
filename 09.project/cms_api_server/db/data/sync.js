const sequelize = require('../config/connect').sequelize
const path = require('path')
const fs = require('fs')
const files = fs.readdirSync(path.resolve(__dirname, '../model'))
const js_files = files.filter(name => name.endsWith('.js'))
console.log(js_files)

module.exports = {}

for (let file of js_files) {
  console.log(`import model from file ${file}...`)
  const name = file.substring(0, file.length - 3)
  module.exports[name] = require(path.resolve(__dirname, `../model/${file}`))
}

sequelize.sync().then(() => {


  console.log('table sync is over.')

  const process = require('process')

  const readline = require('readline');

  function readSyncByRl(tips) {
    tips = tips || '> ';

    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      rl.question(tips, (answer) => {
        rl.close();
        resolve(answer.trim());
      });
    });
  }

  readSyncByRl('\nDo you want to init the all data? (Y/n): ')
    .then(input => {
      input = input.toString().trim()
      if (/^([y]|[yes])$/gi.test(input)) {
        require('./init')()
        process.exit(0)
      } else {
        process.exit(0)
      }
    })
})