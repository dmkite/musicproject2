const expect = require('chai').expect
const {charIsMissing} = require('../controllers/users')

describe('#charIsMissing', function(){
    it('will return error string if password is too short', function(){
        const actual = charIsMissing('passwor')
        expect(actual).to.equal('Your password must be 8 characters or longer')
    })
    it('will return error string if password does not contain a number', function(){
        const actual = charIsMissing('password')
        expect(actual).to.equal('Your password needs a number')
    })
    it('will return error string if password does not contain a capital letter', function(){
        const actual = charIsMissing('password1')
        expect(actual).to.equal('Your password needs a capital letter')
    })
    it('will return error string if password does not contain a special character', function(){
        const actual = charIsMissing('Password1')
        expect(actual).to.equal("Please include a special character like '!', '@', or '*'")
    })
    it('will return false if all parameters are met', function(){
        const actual = charIsMissing('Password1!')
        expect(actual).to.equal(false)
    })
})
