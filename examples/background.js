function setBrowser (world, browser) {
  world.browser = browser
}

exports.bgTeardown = function (world) {
  world.drvs.map(drv => drv.quit())
}

exports.lib = {
  'I set the browser to "(.+)"': setBrowser
}
