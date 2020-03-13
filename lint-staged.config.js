const micromatch = require('micromatch')
 
module.exports = {
  '*': allFiles => {
    let reg = /^(\.).*$/
    // allFiles = allFiles.includes('/') ? allFiles.split('/')
    if (allFiles.includes('/')) {
      allFiles = allFiles.map(item => {
        let arr = item.split('/')
        console.log(arr)
        return arr[arr.length - 1]
      })
    } 
    console.log('match----->111', allFiles)
    const match = micromatch(allFiles, ['*.js'])
    console.log('match----->', match)
    return `eslint ${match.join(' ')}`
  }
}