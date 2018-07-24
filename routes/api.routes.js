const express = require('express')
const Rushee = require('../api/models/rushee.model')
const VoteModel = require('../api/models/vote.model')
const db = require('../localDB.js') //test database
const router = express.Router()

/* =============== BEGIN ALL ROUTES =============== */

/*
    GET a list of rushees
 */
router.get('/rushees', function (req, res, next) {
    var username = "bglowniak"; //TODO: query with signed in user
    var rushees = [];
    db.query("SELECT FirstName, LastName, Picture, GTID, PhoneNumber, " +
                     "Year, Major, BidStatus, " +
                     "SUM(IF(VoterName=?, Value, 0)) AS UserVote, " +
                     "COUNT(IF(Value=1, 1, null)) AS YesTotal, " +
                     "COUNT(IF(Value=-1, 1, null)) AS NoTotal " +
                     "FROM Rushee LEFT OUTER JOIN Vote ON GTID=RusheeGTID " +
                     "GROUP BY GTID", [username],
        function(err, results) {
        if (err) {
            res.status(500).send({"error": err});
        } else {
            results.forEach(function(data) {
                rushees.push(Rushee(data))
            });
            res.status(200).send({"rushees": rushees});
        }
    });
});

/*
    GET a rushee by id
*/
//TODO: query for comments
router.get('/rushees/:id', function (req, res, next) {
    var username = "bglowniak" //TODO implement login
    db.query("SELECT FirstName, LastName, Picture, GTID, PhoneNumber, " +
                     "Year, Major, BidStatus, " +
                     "SUM(IF(VoterName=?, Value, 0)) AS UserVote, " +
                     "COUNT(IF(Value=1, 1, null)) AS YesTotal, " +
                     "COUNT(IF(Value=-1, 1, null)) AS NoTotal " +
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

/*
    POST a rushee to the system
*/
router.post('/rushees', function (req, res, next) {
    if (!(req.body.id && req.body.firstName && req.body.lastName && req.body.year && req.body.major)) {
        res.status(400).send({"error": "Missing required parameters"});
    } else {
        var newRushee = [req.body.id,
                         req.body.firstName,
                         req.body.lastName,
                         req.body.phone || null,           //phone number optional
                         req.body.pic || null,             //pic optional
                         req.body.year,
                         req.body.major,
                         null,                             //point of contact not part of API docs (yet)
                         "none",                           //default bid status is none
                         0, 0];                            //no yes and no votes to start
        db.query("INSERT INTO Rushee VALUES (?)", [newRushee], function (err, results) {
            if (err) {
                if (err.errno == 1062) {
                    res.status(403).send({"error": "Parameter error: " + err.sqlMessage});
                } else {
                    res.status(500).send({"error": err});
                }
            } else {
                console.log(results);
                //TODO: FIX OUTPUT, currently does not output according to API docs
                res.status(201).send({"rushee": results[0]});
            }
        });
    }
});

router.put('/rushees', function (req, res, next) {

});

router.post('/rushees/:id/vote', function (req, res, next) {
    var tempUsername = "bglowniak";
    if (!(req.body.vote !== undefined && req.params.id)) { //verify that we have vote and id
        res.status(400).send({"error": "a non-optional param was left out"});
    } else if (req.body.vote == 1 || req.body.vote == -1) { //update or insert new vote
        var newVote = [tempUsername, req.params.id, req.body.vote, false];
        db.query("INSERT INTO Vote VALUES (?) ON DUPLICATE KEY UPDATE Value=?", [newVote, req.body.vote], function(err, results) {
            if (err) {
                if (err.errno == 1452) {
                    res.status(404).send({"error": "no rushee exists with the given id"});
                } else {
                    res.status(500).send({"error": err.sqlMessage});
                }
            } else {
                postVoteResponseHelper(res, req.params.id, req.body.vote);
            }
        });
    } else if (req.body.vote == 0) { //delete previous vote
        db.query("DELETE FROM Vote WHERE RusheeGTID=? AND VoterName=?", [req.params.id, tempUsername],
            function(err, results) {
                if (err) {
                    res.status(500).send({"error": err.sqlMessage});
                    //if the id doesn't exist, no rows are affected on delete and no error is thrown
                } else {
                    postVoteResponseHelper(res, req.params.id, req.body.vote);
                }
            });
    } else { //the value of vote was unexpected
        res.status(400).send({"error": "the vote parameter was misformatted"});
    }
});

/* =============== END ROUTES =============== */

function postVoteResponseHelper(res, rusheeGTID, value) {
    db.query("SELECT BidStatus, " +
             "COUNT(IF(Value=1, 1, null)) AS YesTotal, " +
             "COUNT(IF(Value=-1, 1, null)) AS NoTotal " +
             "FROM Rushee LEFT OUTER JOIN Vote ON GTID=RusheeGTID " +
             "WHERE GTID=? " +
             "GROUP BY GTID", [rusheeGTID],
             function(err, results) {
                if (err) {
                    res.status(500).send({"error": err.sqlMessage});
                } else {
                    res.status(201).send(JSON.stringify(VoteModel(results[0].YesTotal, results[0].NoTotal,
                                                                  value, results[0].BidStatus)));
                }
    });
}

module.exports = router
