const lintStaged = require('lint-staged')
const micromatch = require('micromatch')

async function test () {
  const success = await lintStaged({
    config: {
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
        console.log('match----->11221', allFiles)
        const match = micromatch(allFiles, ['*.js']).filter(file => !file.match(reg))
        console.log('match----->', match)
        return `eslint ${match.join(' ')}`
      }
    },
    maxArgLength: null,
    relative: false,
    shell: false,
    quiet: false,
    debug: false
  })
}

test()

