const express = require('express')
const Rushee = require('../api/models/rushee.model')

const db = require('../localDB.js') //test database

/*
 Feel free to split up routes more if you want
*/
const router = express.Router()
/*
    GET a list of rushees
 */
router.get('/rushees', function (req, res, next) {
    //get rushee info
    var username = "bglowniak"; //TODO: query with signed in user
    var rushees = [];
    db.query("SELECT FirstName, LastName, Picture, GTID, PhoneNumber, " +
                     "Year, Major, BidStatus, YesTotal, NoTotal, " +
                     "SUM(IF(VoterName=?, Value, 0)) AS UserVote " +
                     "FROM Rushee LEFT OUTER JOIN Vote ON GTID=RusheeGTID " +
                     "GROUP BY GTID", [username],
        function(err, results) {
        if (err) {
            res.status(500).send({"error": err});
        } else {
            results.forEach(function(rusheeData) {
                rushees.push(Rushee(rusheeData))
            });
            res.status(200).send({"rushees": rushees})
        }
    });
});

//TODO: query for comments
router.get('/rushees/:id', function (req, res, next) {
    var username = "bglowniak" //TODO implement login
    db.query("SELECT FirstName, LastName, Picture, GTID, PhoneNumber, " +
                     "Year, Major, BidStatus, YesTotal, NoTotal, " +
                     "SUM(IF(VoterName=?, Value, 0)) AS UserVote " +
                     "FROM Rushee LEFT OUTER JOIN Vote ON GTID=RusheeGTID " +
                     "WHERE Rushee.GTID=? " +
                     "GROUP BY GTID", [username, req.params.id],
        function(err, results) {
            if (err) {
                res.status(500).send({"error": err});
            } else if (results.length == 0) {
                res.status(404).send({"error": "no rushee exists with the given id"});
            } else {
                res.status(200).send({"rushee": Rushee(results[0])});
            }
        });
});

router.post('/rushees', function (req, res, next) {
    if (!(req.body.id && req.body.firstName && req.body.lastName && req.body.year && req.body.major)) {
        res.status(400).send({"error": "Missing required parameters"});
    } else {
        var newRushee = [req.body.id,
                         req.body.firstName,
                         req.body.lastName,
                         req.body.phone || "Not provided", //phone number optional
                         req.body.pic || "Not provided",   //pic optional
                         req.body.year,
                         req.body.major,
                         "",                               //point of contact not part of API docs (yet)
                         "none",                           //default bid status is none
                         0, 0];                            //0 yes and no votes to start
        db.query("INSERT INTO Rushee VALUES (?)", [newRushee], function (err, results) {
            if (err) {
                if (err.errno == 1062) {
                    res.status(403).send({"error": "A rushee with this id already exists"});
                } else {
                    res.status(500).send({"error": err});
                }
            } else {
                res.status(201).send({"rushee": results[0]});
            }
        });
    }
});

router.put('/rushees', function (req, res, next) {

});

module.exports = router
