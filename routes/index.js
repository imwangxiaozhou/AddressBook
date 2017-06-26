var express = require('express');
var router = express.Router();
var mongoose =require('../config/db');
var Contacts = require('../models/contacts');
var mysql = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//注册
router.post('/user/signup',function (req, res) {
	//此处为加入MySQL数据库版本开始
	// var user = req.body;
	// var username = user.newname;
	// var userpassword = user.newpassword;
	// var userid = mysql.add(username,userpassword,function(err,con){
	// 	console.log(con);
	// 	if (err) {
	// 		console.log(err);
	// 	}
	// 	res.redirect('/user/main'){
	// 		id:userid;
	// 	}
	// })
	// 此处为加入MySQL数据库版本结束
	res.redirect('/user/main')
});

//联系人页面
router.get('/user/main',function (req, res) {
	var user = req.body;
	console.log(req.body);
	//此处为加入mysql数据库版本
// 	var username = mysql.select(id,function(err,con){
// 		console.log(con);
// 		if (err) {
// 			console.log(err);
// 		}
// 	}) 
// //查询所有用户
// 	Contacts.fetch(username,function (err, con) {
// 		console.log(con);
// 		if (err) {
// 			console.log(err);
// 		}
// 		res.render('main', {
// 				title: ' 联系人页面',
// 				contacts:con
// 			})
// 	})
// 	// 此处为加入MySQL数据库版本结束

		Contacts.fetch(function (err, con) {
		console.log(con);
		if (err) {
			console.log(err);
		}
		res.render('main', {
				title: ' 联系人页面',
				contacts:con
			})
	})
	
		
});

//添加联系人页面
router.get('/contact/add',function(req,res){
	res.render('add',{
		title:'添加联系人'
	})
})

//删除联系人
router.delete('/contact/delete',function(req,res) {
	var id = req.query.id;
	console.log(id);
	if(id) {
		Contacts.remove({_id: id},function(err,movie) {
			if(err){
				console.log(err);
			}
			else{
				res.json({success: 1});
			}
		})
	}
});

//处理添加表单
router.post('/contact/addnewone',function (req, res) {
	var contact = req.body;
	console.log(req.body);
  //   if(contact!=null && contact!=""){
		// 	console.log("->"+contact+"<-reapet name")
		// 	return res.redirect('/')
		// }
		// else{
			var contact = new Contacts({
				contactname:contact.addname,
				number:contact.addnumber
			})

				contact.save(function (err, user) {
				if(err){
					console.log(err)
				}
				console.log(contact)
				res.redirect('/user/main')
			})
		// }
});

//登出
router.get('/user/logout',function (req, res) {
	delete  req.session.user;

	res.redirect('/');
});

module.exports = router;
