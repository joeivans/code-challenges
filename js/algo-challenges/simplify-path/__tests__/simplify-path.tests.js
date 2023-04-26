const {simplifyPath} = require('../index');

describe('Simplify Path', function () {
  it(`'/home' => '/home'`, function () {
    const result = simplifyPath('/home');
    expect(result).toEqual('/home');
  });

  it(`'/../' => '/'`, function () {
    const result = simplifyPath('/../');
    expect(result).toEqual('/');
  });

  it(`'/home//foo/' => '/home/foo'`, function () {
    const result = simplifyPath('/home//foo/');
    expect(result).toEqual('/home/foo');
  });

  it(`'/home/../foo/' => '/foo'`, function () {
    const result = simplifyPath('/home/../foo/');
    expect(result).toEqual('/foo');
  });

  it(`'/home/test/../foo/' => '/home/foo'`, function () {
    const result = simplifyPath('/home/test/../foo/');
    expect(result).toEqual('/home/foo');
  });

  it(`'/home/...//foo/' => '/home/.../foo'`, function () {
    const result = simplifyPath('/home/...//foo/');
    expect(result).toEqual('/home/.../foo');
  });

  it(`'/home/...' => '/home/...'`, function () {
    const result = simplifyPath('/home/...');
    expect(result).toEqual('/home/...');
  });

  it(`'/' => '/'`, function () {
    const result = simplifyPath('/');
    expect(result).toEqual('/');
  });
});
