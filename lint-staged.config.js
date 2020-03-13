const micromatch = require('micromatch')
 
module.exports = {
  '*': allFiles => {
    let reg = /^(\.).*$/
    console.log('match----->111', allFiles)
    const match = micromatch(allFiles, ['*.js'])
    console.log('match----->', match)
    return `eslint ${match.join(' ')}`
  }
}