exports.config = {
  tests: './tests/e2e/specs/*.spec.ts',
  output: './tests/e2e/outputs',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8080/'
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
