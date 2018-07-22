const VoteModel = require('./vote.model')

function Rushee( data = {} ) {
    return {
        firstName: data.FirstName,
        lastName: data.LastName,
        pic: data.Picture || "Not provided", //optional param
        id: data.GTID,
        phone: data.PhoneNumber || "Not provided", //optional param
        year: data.Year,
        major: data.Major,
        votes: VoteModel(data.YesTotal, data.NoTotal, data.UserVote, data.BidStatus)
    };
}

module.exports = Rushee;

