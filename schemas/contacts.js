var mongoose = require('mongoose')

var ContactsSchema = new mongoose.Schema({
	contactname:String,
	number:String,
	meta:{
		createAt:{
			type:Date,
			default:Date.now()
		},
		updateAt:{
			type:Date,
			default:Date.now()
		}
	}
})

ContactsSchema.pre('save',function(next){
	if (this.isNew) {
		this.meta.createAt = this.meta.updateAt = Date.now()
	}
	else{
		this.meta.updateAt = Date.now()
	}

	next()
})


ContactsSchema.statics = {
	fetch:function(cb){
		return this
		.find({})
		.sort('meta.updateAt')
		.exec(cb)
	},
	findById:function(id,cb){
		return this
		.findOne({_id:id})
		.exec(cb)
	},
	fetchByValue:function (v,cb) {
		return this
		.find({value:v})
		.sort('meta.updateAt')
		.exec(cb)
	}
}

module.exports = ContactsSchema;