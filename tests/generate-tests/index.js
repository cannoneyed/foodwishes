import Nightmare from 'nightmare'

const nightmareOptions = {
  show: true,
  switches: {
    'ignore-certificate-errors': true,
  },
  webPreferences: {
    webSecurity: false
  }
}

const url = 'http://localhost:3000'
const rootSelector = '.app-root'

const browser = new Nightmare(nightmareOptions)

async function runTestGenSuite() {
  // Go to page and wait to load
  const keys = await browser.goto(url)
    .wait(2000)
    .inject('js', `${process.cwd()}/tests/generate-tests/injected.js`)
    .evaluate((rootSelector) => {
      return window.traverseReactDOM(rootSelector)
    }, rootSelector)

  console.log('🍕', keys)

  await browser
    .end()
}

runTestGenSuite()
