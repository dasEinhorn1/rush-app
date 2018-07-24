const VoteModel = require('./vote.model')

function Rushee( data = {} ) {//( id, firstName, lastName, picture, phone, year, major, yesTotal, noTotal, userVote, bidStatus ) {
    return {
        firstName: data.FirstName,
        lastName: data.LastName,
        pic: data.Picture || null, //optional param
        id: data.GTID,
        phone: data.PhoneNumber || null, //optional param
        year: data.Year,
        major: data.Major,
        votes: VoteModel(data.YesTotal, data.NoTotal, data.UserVote, data.BidStatus)
    };
}

module.exports = Rushee;

