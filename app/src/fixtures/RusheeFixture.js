import VoteFixture from '@/fixtures/VoteFixture'
import { randInt } from '@/helpers/Random'
import faker from 'faker'

function fake (id = 0, data = {}, opts = {}) {
  return {
    id: id,
    firstName: data.firstName || faker.name.firstName() || 'Fake',
    lastName: data.lastName || faker.name.lastName() || 'Fakeman',
    pic: data.pic || faker.image.avatar() || 'https://www.w3schools.com/w3images/avatar2.png',
    phone: data.phone || '',
    year: data.year || randInt(1, 4),
    major: data.major || 'Undecided',
    votes: VoteFixture.fake(data.votes, opts.randomizeVotes || false)
  }
}

function fakeMany (count, offset, opts = {}) {
  let rushees = []
  for (let i = offset; i < count + offset; i++) {
    rushees.push(fake(i, {}, opts))
  }
  return rushees
}

export default {
  fake: fake,
  fakeMany: fakeMany
}
