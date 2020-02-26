let mysql = require('mysql');
class MysqlUtil {
    constructor(options) {
        this.options = {
            host: null,
            port: null,
            user: null,
            password:null,
            database: null
      };
      if (!options){
          throw Error("Please input mysql configure info");
      }
      Object.assign(this.options, options);
      this.instance = mysql.createPool(this.options);
      this.instance.getConnection(function(err, connect) {
          if (err) {
              console.log(err);
          }
          console.log("connect to mysql success");
      });
  }

  async query(sql) {
        let that = this.instance;
        return await new Promise(function(resolve, reject){
                that.query(sql, function(err, result){
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result)
                    }
                });
            });
    }

}

module.exports = MysqlUtil;