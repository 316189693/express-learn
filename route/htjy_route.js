var express = require('express');
var router = express.Router();
var config = require( "../config.json" );
var mysqlUtil = require( "../util/mysql_util");
var mysql = new mysqlUtil({
    host: config.db_host_htjy,
    port: config.db_port_htjy,
    user: config.db_user_htjy,
    password: config.db_password_htjy,
    database: config.db_database_htjy
});

router.get('htjy-test',  async function(req, res, next) {
    try {
        console.time("test");
        var rst = await mysql.query("select * from test where id = 250972 order by id desc limit 1;");
        await mysql.query("INSERT INTO id " +
            "( fk_student_id, fk_user_id, fk_company_id, order_log_text, order_log_created_date, fk_order_group_id, order_log_type, order_log_stage,  order_log_system)" +
            "VALUES(  1955, 11, 'test api01', '2020-03-10 14:11:27', 151082, 0, 0, 0);");
        res.json(rst);
        console.timeEnd("test");
    } catch (err) {
        console.error(err);
        res.status(500);
        if (err instanceof Error) {
            res.json({'msg': err.message, 'stack': err.stack});
        } else {
            res.json({'msg': err, 'stack': ""});
        }
    }
});


module.exports = router;