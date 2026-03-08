import assert from 'assert'

import IframeView from '../src/managers/views/iframe'

describe('IframeView', function () {
  it('returns early when highlight range cannot be resolved', function () {
    const view = new IframeView({ index: 0 }, {})
    view.contents = {
      range() {
        return null
      },
    }

    const result = view.highlight('epubcfi(/6/2!/4,/1:0,/1:1)')

    assert.equal(result, undefined)
    assert.equal(view.pane, undefined)
    assert.equal(Object.keys(view.highlights).length, 0)
  })

  it('returns early when underline range cannot be resolved', function () {
    const view = new IframeView({ index: 0 }, {})
    view.contents = {
      range() {
        return null
      },
    }

    const result = view.underline('epubcfi(/6/2!/4,/1:0,/1:1)')

    assert.equal(result, undefined)
    assert.equal(view.pane, undefined)
    assert.equal(Object.keys(view.underlines).length, 0)
  })
})