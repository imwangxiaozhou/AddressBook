var mysql  = require('mysql'); 
var connection = mysql.createConnection({    
  host     : '127.0.0.1',      
  user     : 'root',             
  password : 'root123',      
  port: '3306',                  
  database: 'users',
});
 

function add(username,userpassword){
	var res;
	connection.connect();
 
var  userAddSql = 'INSERT INTO users(id,name,password) VALUES(0,?,?)';
var  userAddSql_Params = [username, userpassword];
//增 add
connection.query(userAddSql,userAddSql_Params,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }       
res = result.id;
});
 return res;
connection.end();
}

function selsect(userid){
	var res;
	connection.connect();
 
	var  userGetSql = 'SELECT * FROM users';
//查 query
connection.query(userGetSql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }       
res = result.name;

});
 return res;
connection.end();
}
