const lintStaged = require('lint-staged')

async function test () {
  const success = await lintStaged({
    config: {
      '*.js': 'echo 1'
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
