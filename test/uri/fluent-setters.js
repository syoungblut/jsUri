var expect = require('chai').expect

var Uri = (typeof(require) === 'function') ? require('../../Uri') : window.Uri

describe('Uri', function() {
  describe('fluent setters', function() {
    var u

    it('can fluently add a path and anchor', function() {
      u = new Uri('www.yahoo.com')
        .setPath('/index.html')
        .setAnchor('content')
      expect(u.toString()).to.equal('www.yahoo.com/index.html#content')
    })

    it('can fluently replace host and protocol', function() {
      u = new Uri('www.yahoo.com/index.html')
        .setHost('test.com')
        .setProtocol('https')
      expect(u.toString()).to.equal('https://test.com/index.html')
    })

    it('can fluently construct a url out of nothing', function() {
      u = new Uri()
        .setPath('/index.html')
        .setAnchor('content')
        .setHost('www.test.com')
        .setPort(8080)
        .setUserInfo('username:password')
        .setProtocol('https')
        .setQuery('this=that&some=thing')
      expect(u.toString()).to.equal('https://username:password@www.test.com:8080/index.html?this=that&some=thing#content')
    })

    it('can fluently destroy all parts of a url', function() {
      u = new Uri('https://username:password@www.test.com:8080/index.html?this=that&some=thing#content')
        .setPath(null)
        .setAnchor(null)
        .setHost(null)
        .setPort(null)
        .setUserInfo(null)
        .setProtocol(null)
        .setQuery(null)
      expect(u.toString()).to.equal('')
    })
  })
})
