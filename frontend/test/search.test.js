const expect = require('chai').expect
const ctrl = require('../src/music-project/search/controller')
const model = require('../src/music-project/search/model')

describe('#createQuery', function(){
    it('will not return a query if there is no input value', function(){
        const actual = ctrl.createQuery()
        expect(actual).to.equal(false)
        })
    it('will return a properly formatted query', function(){
        const actual = ctrl.createQuery('The%20Beatles')
        expect(actual).to.have.string('&type=album%2Cartist&limit=5')
        expect(actual).to.not.have.string(' ')
    })
    })

describe('#msToMins', function(){
    it('should return a string formatted as time', function(){
        const actual = ctrl.msToMins(323400)
        expect(actual).to.be.a('string')
        expect(actual).to.equal('5:24')
    })
})
