const micromatch = require('micromatch')

module.exports = {
  '*': allFiles => {
    let reg = /^(\.).*$/
    // allFiles = allFiles.includes('/') ? allFiles.split('/')
    allFiles = allFiles.map(item => {
      if (item.includes('/')) {
        let arr = item.split('/')
        return arr[arr.length - 1]
      } else {
        return item
      }
    })
    console.log('match----->111', allFiles)
    const match = micromatch(allFiles, ['*.js']).filter(file => !file.match(reg))
    console.log('match----->', match)
    return `eslint ${match.join(' ')}`
  }
}
