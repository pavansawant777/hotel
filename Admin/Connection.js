mysql=require('mysql')
conn=mysql.createConnection({
    host:'bkavqvcx1sdsergg5jjr-mysql.services.clever-cloud.com',user:"up2nui2qqxn25tuy",password:"9kUp34pQbzxjTdXPibCR",database:"bkavqvcx1sdsergg5jjr"
})
util=require('util')
execute=util.promisify(conn.query).bind(conn)
module.exports = execute
