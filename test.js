const lintStaged = require('lint-staged')

async function test () {
  const success = await lintStaged({
    config: {
      '*.js': files => {
        const reg = /^(\.).*$/
        console.log(files.match(reg))
        const match = files.filter(file => !file.match(reg))
        return `echo ${match.join(' ')}`
      }
    },
    maxArgLength: null,
    relative: false,
    shell: false,
    quiet: false,
    debug: false
  })
  console.log('success------->', success)
}
test()
