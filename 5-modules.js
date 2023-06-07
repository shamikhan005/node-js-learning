// Modules - Encapsulated code (only share minimum)
// CommonJS, every file is module (by default)

const names = require('./3-names')
const sayHi = require('./4-utlis')
const data = require('./6-alternative-flavour')
require('./7-mind-grenade')



sayHi('shami')
sayHi(names.jonas)
sayHi(names.murph)

