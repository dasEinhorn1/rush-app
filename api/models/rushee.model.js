const VoteModel = require('./vote.model')

function Rushee( data = {} ) {

    if (data.Name !== undefined) {
        var splitName = data.Name.split(" ")
    }

    return {
        firstName: splitName[0] || "",
        lastName: splitName[1] || "",
        pic: data.Picture,
        id: data.GTID,
        phone: data.PhoneNumber,
        year: data.Year,
        major: data.Major,
        votes: VoteModel(data.YesTotal, data.NoTotal, data.UserVote, data.BidStatus)
    };
}

module.exports = Rushee;

