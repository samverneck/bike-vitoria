const { describe, it } = global
import { expect } from 'chai'

import factory from './app-factory'
import App from './app'

describe('app-factory', () => {
  describe('#create', () => {
    it('should an instance of App', () => {
      const service = factory.create()

      return expect(service).to.be.instanceOf(App)
    })
  })
})
