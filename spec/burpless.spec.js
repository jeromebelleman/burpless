const burpless = require('../burpless')

describe("strip", function() {

  it("should strip a string", function() {
    expect(burpless.strip('  foo  ')).toEqual('foo');
  });

});

describe("cwd", function() {

  it("should concatenate the script working directory to the path", function() {
    expect(burpless.cwd('foo').slice(-12)).toEqual('burpless/foo');
  });

});

describe("stroll", function() {

  it("should return an array of matching file paths", function() {
    const paths = burpless.stroll('.js')
    expect(paths.filter(path => !path.endsWith('.js')).length).toEqual(0);
  });

});
