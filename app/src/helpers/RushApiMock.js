import Rushee from '@/fixtures/RusheeFixture'
import { StatusType } from '@/helpers/StatusConfig'

const DELAY = 200

function fakeRusheeList (count = 10) {
  return Rushee.fakeMany(count, 0, { randomizeVotes: true })
}

const fakeRushees = fakeRusheeList(50)

export default {
  getRushees: (queryParams) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(fakeRushees), DELAY)
    })
  },
  getRushee: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let rushee = fakeRushees.find(rushee => rushee.id === id)
        if (rushee) {
          resolve(rushee)
        } else {
          reject(new Error('Rushee not found'))
        }
      }, DELAY)
    })
  },
  createRushee: (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(Rushee.fake(data.id, data)), DELAY)
    })
  },
  updateRushee: (id, data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let i = fakeRushees.findIndex(rushee => rushee.id === id)
        if (i > 0) {
          let rushee = fakeRushees[i]
          fakeRushees[i] = {...rushee, ...data}
          resolve(fakeRushees[i])
        } else {
          reject(new Error('Rushee not found'))
        }
      }, DELAY)
    })
  },
  vote: (id, vote) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let rushee = fakeRushees.find(rushee => {
          return rushee.id === id
        })
        if (rushee) {
          if (vote !== rushee.votes.user.vote) {
            console.log(vote)
            if (vote === 1) {
              rushee.votes.totals.yes++
              if (rushee.votes.user.vote === -1) {
                rushee.votes.totals.no--
              }
            } else if (vote === 0) {
              if (rushee.votes.user.vote === 1) {
                rushee.votes.totals.yes--
              } else if (rushee.votes.user.vote === -1) {
                rushee.votes.totals.no--
              }
            } else if (vote === -1) {
              if (rushee.votes.user.vote === 1) {
                rushee.votes.totals.yes--
              }
              rushee.votes.totals.no++
            }
            rushee.votes.user.vote = vote
            rushee.votes.status = StatusType.fromVotes(rushee.votes.totals.yes,
              rushee.votes.totals.no)
          }
          resolve(rushee.votes)
        } else {
          reject(new Error('Rushee not found'))
        }
      }, DELAY)
    })
  }
}
