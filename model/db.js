/*----------This is Nhieu's code----------*/

/*function db(host, user, pass, dbname, mysql) {
    var self = this;
    this.host = host;
    this.user = user;
    this.pass = pass;
    this.dbname = dbname;
    this.mysql = mysql;
    this.createConnection=this.mysql.createConnection({
        host: this.host,
        user: this.user,
        password: this.pass,
        database: this.dbname
    });
};
/*
db.prototype.createCV=function(req,callback){
    var conn=this.createConnection;
    
};

db.prototype.readCVById = function (req, callback) {
    var conn = this.createConnection;
    if (conn) {
        try {
            conn.connect(function(err) {            
                if(err) {         
                    var flag=false;
                    var data=err;                           
                    console.log('error when connecting to db:', err);
                    callback(flag, data);
                    conn.end();
                }                                    
            });   
            var idcv = req.params.idcv;
            strquery = 'SELECT * FROM curriculum_vitae WHERE Id=?';
            conn.query(strquery, [idcv], function (err, rows, fields) {
                var data = null;
                var flag = false;
                if (!err) {
                    data = rows;
                    flag = true;
                }
                else {
                    data = err;
                    console.log("There is error");
                }
                callback(flag, data);
                conn.end();
            });
        }
        catch (err) {
            console.log(err);
        }
    }
};

db.prototype.updateContactInfo = function (req, callback) {
    var conn = this.createConnection();
    if (conn) {
        try {
            conn.connect(function(err) {            
                if(err) {         
                    var flag=false;
                    var data=err;                           
                    console.log('error when connecting to db:', err);
                    callback(flag, data);
                    conn.end();
                }                                    
            });   
            // var schema = {
            //     'email': {
            //         notEmpty: true,
            //         isEmail: {
            //             errorMessage: 'Invalid Email'
            //         }
            //     }
            // };
            // req.checkBody(schema);
            var idcv = req.params.idcv,
                firstname = req.body.firstname,
                lastname = req.body.lastname,
                email = req.body.email,
                phone = req.body.phone,
                website = req.body.website,
                address = req.body.address;
            strquery = "INSERT INTO contact_info(FirstName,LastName,Email,Phone,Website,Address,CV_Id) VALUES(?,?,?,?,?,?,?)";
            conn.query(strquery, [firstname, lastname, email, phone, website, address, idcv], function (err, rows, fields) {
                var data = null,
                    flag = false;
                if (!err) {
                    data = rows;
                    flag = true;
                }
                else {
                    data = err;
                    console.log("There is error");
                }
                callback(flag, data);
                conn.end();
            });
        }
        catch (err) {
            console.log(err);
        }
    }
};

/*--------------------*/

function db(host, user, pass, dbname, mysqlmodel) {
    var self = this;
    this.host = host;
    this.user = user;
    this.pass = pass;
    this.dbname = dbname;
    this.mysqlmodel = mysqlmodel;
    this.MyAppModel = this.mysqlmodel.createConnection({
        host     : this.host,
        user     :  this.user,
        password : this.pass,
        database : this.dbname,
    });
    this.User = this.MyAppModel.extend({
        tableName: 'user'
    });
    this.CV = this.MyAppModel.extend({
        tableName: 'cv'
    });
};



module.exports = db;