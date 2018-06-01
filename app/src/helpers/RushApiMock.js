const DELAY = 1000

let fakeIds = 0

function fakeRushee (id, data = {}) {
  if (id === undefined) {
    id = fakeIds
    fakeIds++
  }
  return {
    id: id,
    firstName: data.firstName || 'Fake',
    lastName: data.lastName || 'Rushee',
    pic: data.pic || 'https://images-na.ssl-images-amazon.com/images/I/51kpW-tYzRL.jpg',
    phone: data.phone || '',
    year: data.year || Math.floor(Math.random() * 3) + 1,
    major: data.major || 'Undecided',
    status: '_',
    votes: {
      totals: {
        yes: 0,
        no: 0
      },
      user: {
        vote: 0
      }
    }
  }
}

function fakeRusheeList (seed = false) {
  let fakeRushees = []
  for (let i = 0; i < 10; i++) {
    fakeRushees.push(fakeRushee((seed) ? i : undefined))
  }
  return fakeRushees
}

const fakeRushees = fakeRusheeList(0)

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
      setTimeout(() => resolve(fakeRushee(data.id, data)), DELAY)
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
      console.log(id)
      fakeRushees.forEach(rushee => {
        console.log(rushee)
      })
      setTimeout(() => {
        let i = fakeRushees.findIndex(rushee => {
          return rushee.id === id
        })
        console.log(i)
        if (i > -1) {
          let rushee = fakeRushees[i]
          if (vote !== rushee.votes.user.vote) {
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
          }
          resolve(rushee.votes)
        } else {
          reject(new Error('Rushee not found'))
        }
      }, DELAY)
    })
  }
}
