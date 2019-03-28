exports.config = {
  tests: './tests/e2e/specs/*.ts',
  output: './tests/e2e/outputs',
  helpers: {
    Puppeteer: {
      url: 'http://localhost'
    }
  },
  include: {
    I: './tests/e2e/configs/steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-test',
  translation: 'ja-JP',
  require: [ 'ts-node/register' ]
}
