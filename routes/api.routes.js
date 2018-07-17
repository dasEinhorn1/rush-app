const express = require('express')
const Rushee = require('../api/models/rushee.model')

const testDB = require('../localDB.js')

/*
 Feel free to split up routes more if you want
*/
const router = express.Router()
/*
    GET a list of rushees
 */
router.get('/rushees', function (req, res, next) {
    //get rushee info
    dummyData = {
        "Name": "Brian Glowniak",
        "Picture": "fakepic.png",
        "GTID": "903215431",
        "PhoneNumber": "6304182372",
        "Year": 3,
        "Major": "Computer Science",
        "BidStatus": "none"
    }

    //get vote count for each rushee
    //keys may be different based on actual database query
    dummyVotes = {
        "yes": 20,
        "no": 7,
        "userVote": 1 //what did the current signed in user vote
    }

    var testRushee = Rushee(dummyData, dummyVotes)

    testDB.query("SELECT * FROM Rushee", function(err, results) {
        if (err) {
            console.log(error)
        } else {
            console.log(results)
        }
    });
    res.status(200).send({"rushee": JSON.stringify(testRushee)})
})

module.exports = router
