const assert = require('assert')
const { By } = require('selenium-webdriver')

async function headerShouldBe (world, scene, header) {
  await Promise.all(world.drvs.map(async drv => {
    await drv.get(world.url)
    await drv.findElement(world.link).click()
    assert.strictEqual(await drv.findElement(By.css('h1')).getText(), header)
  }))
}

exports.lib = {
  'the header should read "(.+)"': headerShouldBe
}
