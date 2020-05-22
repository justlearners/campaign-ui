const { v1: uuidv1 } = require('uuid');

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "test",
  database: "campaign"
});

module.exports = { 

saveConfig : function(config){
    return new Promise(function (resolve, reject) {
            console.log("Connected!");
            var sql = "INSERT INTO app_config (config_categ,config_key,config_value,is_active,created_by) VALUES ?";
            var values = [
                [config.categ,config.key,config.val,'y',config.createdBy]
            ];
            con.query(sql, [values], function (err, result) {
                if (err) {
                    reject({ status: "error", message: err.message});
                } else {
                    resolve("success");
                    console.log("Number of records inserted: " + result.affectedRows);
                }                
            });
        });
    },

 saveGroup : function(group){
    return new Promise(function (resolve, reject) {
            var gid=uuidv1();
            console.log('gid--',gid);
            console.log("Connected!");
            var sql = "INSERT INTO cgroup(gname,is_active,created_by) VALUES ?";
            var values = [
                [group.name,group.active,'admin']
            ];
            con.query(sql, [values], function (err, result) {
                if (err) {
                    reject({ status: "error", message: err.message});
                } else {
                    resolve("success");
                    console.log("Number of records inserted: " + result.affectedRows);
                }                
            });
      });
 },

 saveType : function(campaignTyp){
    return new Promise(function (resolve, reject) {
            var tid=uuidv1();
            console.log('tid--',tid);
            console.log("Connected!");
            var sql = "INSERT INTO campaign_type(tname,created_by) VALUES ?";
            var values = [
                [campaignTyp.name,'admin']
            ];
            con.query(sql, [values], function (err, result) {
                if (err) {
                    reject({ status: "error", message: err.message});
                } else {
                    resolve("success");
                    console.log("Number of records inserted: " + result.affectedRows);
                }                
            });
      });
 },
 saveCampaign : function(campaign){
    return new Promise(function (resolve, reject) {
            var cid=uuidv1();
            console.log('cid--',cid);
            console.log("Connected!");
            var sql = "INSERT INTO campaign (tid,name,shortDesc,is_active,created_by) VALUES ?";
            var values = [
                [campaign.typeId,campaign.name,campaign.shortDesc,'y',campaign.createdBy]
            ];
            con.query(sql, [values], function (err, result) {
                if (err) {
                    reject({ status: "error", message: err.message});
                } else {
                    resolve("success");
                    console.log("Number of records inserted: " + result.affectedRows);
                }                
            });
      });
 },

 saveCampaignGroup : function(cmpgngrp){
    return new Promise(function (resolve, reject) {
            var cgid=uuidv1();
            console.log('cgid--',cgid);
            console.log("Connected!");
            var sql = "INSERT INTO campaign_group (cid,gid) VALUES ?";
            var values = [
                [cmpgngrp.cid,cmpgngrp.gid]
            ];
            con.query(sql, [values], function (err, result) {
                if (err) {
                    reject({ status: "error", message: err.message});
                } else {
                    resolve("success");
                    console.log("Number of records inserted: " + result.affectedRows);
                }                
            });
      });
 },

 saveUser : function(user){
    return new Promise(function (resolve, reject) {
            var uid=uuidv1();
            console.log('uid--',uid);
            console.log("Connected!");
            var sql = "INSERT INTO user (uname,emailid,contact,address,city,country,created_by) VALUES ?";
            var values = [
                [user.uname,user.emailid,user.contact,user.address,user.city,user.country,user.createdBy]
            ];
            con.query(sql, [values], function (err, result) {
                if (err) {
                    reject({ status: "error", message: err.message});
                } else {
                    resolve("success");
                    console.log("Number of records inserted: " + result.affectedRows);
                }                
            });
      });
 },

 saveBooking : function(booking){
    return new Promise(function (resolve, reject) {
            var bid=uuidv1();
            console.log('bid--',bid);
            console.log("Connected!");
            var sql = "INSERT INTO booking (cid,uid,booking_date,slot,created_by) VALUES ?";
            var values = [
                [booking.cid,booking.uid,booking.booking_date,booking.slot,booking.createdBy]
            ];
            con.query(sql, [values], function (err, result) {
                if (err) {
                    reject({ status: "error", message: err.message});
                } else {
                    resolve("success");
                    console.log("Number of records inserted: " + result.affectedRows);
                }                
            });
      });
 },

 getSlotList : function(){
    return new Promise(function (resolve, reject) {
            console.log("Connected!");
            var sql = "SELECT * FROM app_config where config_categ ='slot'";            
            con.query(sql,function (err, result) {
                if (err) {
                    reject({ status: "error", message: err.message});
                } else {
                    resolve(result);
                    console.log("Data: " + result);
                }                
            });
      });
 },

 getCampaignList : function(){
    return new Promise(function (resolve, reject) {
            console.log("Connected!");
            var sql = "SELECT * FROM campaign where is_active ='y'";            
            con.query(sql,function (err, result) {
                if (err) {
                    reject({ status: "error", message: err.message});
                } else {
                    resolve(result);
                    console.log("Data: " + result);
                }                
            });
      });
 },

 getCampaign : function(cid){
    return new Promise(function (resolve, reject) {
            console.log("Connected!",cid);
            var sql = "SELECT * FROM campaign where cid =?";  
            var values = [cid];          
            con.query(sql,[values],function (err, result) {
                if (err) {
                    reject({ status: "error", message: err.message});
                } else {
                    resolve(result);
                    console.log("Data: " + result);
                }                
            });
      });
 },
 getBookings : function(cid){
    return new Promise(function (resolve, reject) {
            console.log("Connected!",cid);
            var sql = "SELECT * FROM booking where cid =?";  
            var values = [cid];          
            con.query(sql,[values],function (err, result) {
                if (err) {
                    reject({ status: "error", message: err.message});
                } else {
                    resolve(result);
                    console.log("Data: " + result);
                }                
            });
      });
 },
 getBookingsAndUsers : function(cid){
    return new Promise(function (resolve, reject) {
            console.log("Connected!",cid);
            var sql = "SELECT * FROM booking b,user u where b.cid =? and b.uid=u.uid";  
            var values = [cid];          
            con.query(sql,[values],function (err, result) {
                if (err) {
                    reject({ status: "error", message: err.message});
                } else {
                    resolve(result);
                    console.log("Data: " + result);
                }                
            });
      });
 },
 getBookingsFullDetails : function(cid){
    return new Promise(function (resolve, reject) {
            console.log("Connected!",cid);
            var sql = "SELECT b.*,u.*,config.config_key,config.config_value FROM booking b,user u,app_config config where b.cid =? "+
                     " and b.uid=u.uid and b.slot=config.id";  
            var values = [cid];          
            con.query(sql,[values],function (err, result) {
                if (err) {
                    reject({ status: "error", message: err.message});
                } else {
                    resolve(result);
                    console.log("Data: " + result);
                }                
            });
      });
 }
}