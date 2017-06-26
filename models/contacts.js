var mongoose = require('mongoose')
var ContactsSchema = require('../schemas/contacts')
var Contacts = mongoose.model('Contacts',ContactsSchema)
module.exports = Contacts