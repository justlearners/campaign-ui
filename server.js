const express = require('express')
const app = express()
//const bodyParser = require('body-parser')
app.use(express.urlencoded())

const db = require('./db.js');

app.get('/', (req, res) => {
    res.send('Welcome to Node API')
})

app.get('/getData', (req, res) => {
    res.json({'message': 'Hello World'})
})

app.post('/saveCampaignType',(req, res) => {
    try {
      console.log('saveCampaignType invoked--',req.body.campaignTyp);
      var campaignTyp={};
      campaignTyp=JSON.parse(req.body.campaignTyp);
      
      db.saveType(campaignTyp).
          then(function(data){ 
              console.log('data--',data);           
              res.status(200);
              res.send(data);
              })
          .catch(function (err) {
            console.log(err);
            res.statusMessage = err.message;
            res.status(500);
            res.send(err.message);
            res.end();
           });
     }
      catch (err) {
      console.log("error occurred: ",err);
      res.statusMessage = err.message;
      res.status(500);
      res.end();
      } 
  })

  app.post('/saveGroup',(req, res) => {
    try {
      console.log('saveGroup invoked--',req.body.group);
      var group={};
      group=JSON.parse(req.body.group);      
      db.saveGroup(group).
          then(function(data){ 
              console.log('data--',data);           
              res.status(200);
              res.send(data);
              })
          .catch(function (err) {
            console.log(err);
            res.statusMessage = err.message;
            res.status(500);
            res.send(err.message);
            res.end();
           });
     }
      catch (err) {
      console.log("error occurred: ",err);
      res.statusMessage = err.message;
      res.status(500);
      res.end();
      } 
  })  

  app.post('/saveCampaign',(req, res) => {
    try {
      console.log('saveCampaign invoked--',req.body.campaign);
      var campaign={};
      campaign=JSON.parse(req.body.campaign);
      
      db.saveCampaign(campaign).
          then(function(data){ 
              console.log('data--',data);           
              res.status(200);
              res.send(data);
              })
          .catch(function (err) {
            console.log(err);
            res.statusMessage = err.message;
            res.status(500);
            res.send(err.message);
            res.end();
           });
      console.log('campaign name is--',campaign.name);
     }
      catch (err) {
      console.log("error occurred: ",err);
      res.statusMessage = err.message;
      res.status(500);
      res.end();
      } 
  })


  app.post('/saveCampaignGroup',(req, res) => {
    try {
      console.log('saveCampaignGroup invoked--',req.body.cmpgngrp);
      var cmpgngrp={};
      cmpgngrp=JSON.parse(req.body.cmpgngrp);
      
      db.saveCampaignGroup(cmpgngrp).
          then(function(data){ 
              console.log('data--',data);           
              res.status(200);
              res.send(data);
              })
          .catch(function (err) {
            console.log(err);
            res.statusMessage = err.message;
            res.status(500);
            res.send(err.message);
            res.end();
           });
     }
      catch (err) {
      console.log("error occurred: ",err);
      res.statusMessage = err.message;
      res.status(500);
      res.end();
      } 
  })

  app.post('/saveUser',(req, res) => {
    try {
      console.log('saveUser invoked--',req.body.user);
      var user={};
      user=JSON.parse(req.body.user);      
      db.saveUser(user).
          then(function(data){ 
              console.log('data--',data);           
              res.status(200);
              res.send(data);
              })
          .catch(function (err) {
            console.log(err);
            res.statusMessage = err.message;
            res.status(500);
            res.send(err.message);
            res.end();
           });
     }
      catch (err) {
      console.log("error occurred: ",err);
      res.statusMessage = err.message;
      res.status(500);
      res.end();
      } 
  })

  app.post('/saveBooking',(req, res) => {
    try {
      console.log('saveBooking invoked--',req.body.booking);
      var booking={};
      booking=JSON.parse(req.body.booking);      
      db.saveBooking(booking).
          then(function(data){ 
              console.log('data--',data);           
              res.status(200);
              res.send(data);
              })
          .catch(function (err) {
            console.log(err);
            res.statusMessage = err.message;
            res.status(500);
            res.send(err.message);
            res.end();
           });
     }
      catch (err) {
      console.log("error occurred: ",err);
      res.statusMessage = err.message;
      res.status(500);
      res.end();
      } 
  })

  app.post('/saveConfig',(req, res) => {
    try {
      console.log('saveConig invoked--',req.body.config);
      var config={};
      config=JSON.parse(req.body.config);      
      db.saveConfig(config).
          then(function(data){ 
              console.log('data--',data);           
              res.status(200);
              res.send(data);
              })
          .catch(function (err) {
            console.log(err);
            res.statusMessage = err.message;
            res.status(500);
            res.send(err.message);
            res.end();
           });
     }
      catch (err) {
      console.log("error occurred: ",err);
      res.statusMessage = err.message;
      res.status(500);
      res.end();
      } 
  })
  app.get('/slotList',(req, res) => {
    try {
      console.log('slotList invoked--');
      db.getSlotList().
          then(function(data){ 
              console.log('data--',data);           
              res.status(200);
              res.send(data);
              })
          .catch(function (err) {
            console.log(err);
            res.statusMessage = err.message;
            res.status(500);
            res.send(err.message);
            res.end();
           });
     }
      catch (err) {
      console.log("error occurred: ",err);
      res.statusMessage = err.message;
      res.status(500);
      res.end();
      } 
  })
  app.get('/campaignList',(req, res) => {
    try {
      console.log('campaignList invoked--');
      db.getCampaignList().
          then(function(data){ 
              console.log('data--',data);           
              res.status(200);
              res.send(data);
              })
          .catch(function (err) {
            console.log(err);
            res.statusMessage = err.message;
            res.status(500);
            res.send(err.message);
            res.end();
           });
     }
      catch (err) {
      console.log("error occurred: ",err);
      res.statusMessage = err.message;
      res.status(500);
      res.end();
      } 
  })

  app.get('/campaignDetails',(req, res) => {
    try {
      console.log('campaignDetails invoked--',req.query.cid);
      var cid=req.query.cid;
      db.getCampaign(cid).
          then(function(data){ 
              console.log('data--',data);           
              res.status(200);
              res.send(data);
              })
          .catch(function (err) {
            console.log(err);
            res.statusMessage = err.message;
            res.status(500);
            res.send(err.message);
            res.end();
           });
     }
      catch (err) {
      console.log("error occurred: ",err);
      res.statusMessage = err.message;
      res.status(500);
      res.end();
      } 
  })  
 
  app.get('/bookings',(req, res) => {
    try {
      console.log('bookings invoked--',req.query.cid);
      var cid=req.query.cid;
      db.getBookings(cid).
          then(function(data){ 
              console.log('data--',data);           
              res.status(200);
              res.send(data);
              })
          .catch(function (err) {
            console.log(err);
            res.statusMessage = err.message;
            res.status(500);
            res.send(err.message);
            res.end();
           });
     }
      catch (err) {
      console.log("error occurred: ",err);
      res.statusMessage = err.message;
      res.status(500);
      res.end();
      } 
  })  

  app.get('/bookingsWithUser',(req, res) => {
    try {
      console.log('bookingsWithUser invoked--',req.query.cid);
      var cid=req.query.cid;
      db.getBookingsAndUsers(cid).
          then(function(data){ 
              console.log('data--',data);           
              res.status(200);
              res.send(data);
              })
          .catch(function (err) {
            console.log(err);
            res.statusMessage = err.message;
            res.status(500);
            res.send(err.message);
            res.end();
           });
     }
      catch (err) {
      console.log("error occurred: ",err);
      res.statusMessage = err.message;
      res.status(500);
      res.end();
      } 
  })  

  app.get('/bookingFullDetails',(req, res) => {
    try {
      console.log('bookingFullDetails invoked--',req.query.cid);
      var cid=req.query.cid;
      db.getBookingsFullDetails(cid).
          then(function(data){ 
              console.log('data--',data);           
              res.status(200);
              res.send(data);
              })
          .catch(function (err) {
            console.log(err);
            res.statusMessage = err.message;
            res.status(500);
            res.send(err.message);
            res.end();
           });
     }
      catch (err) {
      console.log("error occurred: ",err);
      res.statusMessage = err.message;
      res.status(500);
      res.end();
      } 
  })

var server = app.listen(8085,'0.0.0.0', function () {
    var port = server.address().port;
    console.log("Server started at port", port)
 });