const assert = require('assert')
const { Builder, By } = require('selenium-webdriver')

function startBrowsers (world, scene, number) {
  world.drvs = []
  for (let i = 0; i < number; i++) {
    world.drvs.push(new Builder().forBrowser('chrome').build())
  }
}

function setUrl (world, scene, url) {
  world.url = url
}

function setLink (world, scene, link) {
  world.link = By.xpath(`//a[text()="${link}"]`)
}

async function headerShouldBe (world, scene, header) {
  for (const drv of world.drvs) {
    await drv.get(world.url)
    await drv.findElement(world.link).click()
    assert.strictEqual(await drv.findElement(By.css('h1')).getText(), header)
  }
}

exports.teardown = function (world) {
  world.drvs.map(drv => drv.quit())
}

exports.lib = {
  'I start (\\d+) browsers': startBrowsers,
  'I set the URL to "(.+)"': setUrl,
  'I set the link to click to "(.+)"': setLink,
  'the header should read "(.+)"': headerShouldBe
}
