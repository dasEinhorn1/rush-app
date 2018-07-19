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
    db.query("SELECT Name, Picture, GTID, PhoneNumber, " +
                     "Year, Major, BidStatus, YesTotal, NoTotal, " +
                     "SUM(IF(VoterName=?, Value, null)) AS UserVote " +
                     "FROM Rushee LEFT OUTER JOIN Vote ON GTID=RusheeGTID " +
                     "GROUP BY GTID", [username],
        function(err, results) {
        if (err) {
            res.status(500).send({"Error": err});
        } else {
            results.forEach(function(rusheeData) {
                rushees.push(Rushee(rusheeData))
            });
            res.status(200).send({"rushees": rushees})
        }
    })
})

module.exports = router
