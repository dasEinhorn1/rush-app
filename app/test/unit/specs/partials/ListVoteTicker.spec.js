import Vue from 'vue'
import StatusIcon from '@/components/partials/ListVoteTicker'
import Rushee from '@/fixtures/RusheeFixture'
const Constructor = Vue.extend(StatusIcon)

function init (rushee) {
  return new Constructor({propsData: {rushee: rushee}}).$mount()
}

describe('ListVoteTicker.vue', function () {
  describe('Basics', function () {
    it('should exist', function () {
      const rushee = Rushee.fake()
      const vm = init(rushee)
      expect(vm.$el).to.exist
      expect(vm.$el.className).to.equal('ticker')
    })
    it('should show 2 vote options on start', function () {
      const rushee = Rushee.fake()
      const vm = init(rushee)
      const voteButtons = vm.$el.querySelectorAll('button')
      expect(voteButtons).to.exist
      expect(voteButtons.length).to.equal(2)
    })
    it('should have one yes option', function () {
      const rushee = Rushee.fake()
      const vm = init(rushee)
      const yesButton = vm.$el.querySelector('button.yes')
      expect(yesButton).to.exist
      expect(vm.$el.querySelectorAll('button.yes').length).to.equal(1)
    })
    it('should have one no option', function () {
      const rushee = Rushee.fake()
      const vm = init(rushee)
      const noButton = vm.$el.querySelector('button.no')
      expect(noButton).to.exist
      expect(vm.$el.querySelectorAll('button.no').length).to.equal(1)
    })
    it('should start with yes active when user already voted yes', function () {
      const rushee = Rushee.fake(0, {
        votes: {
          totals: { yes: 1, no: 0 },
          user: { vote: 1 }
        }
      })
      const vm = init(rushee)
      const activeButtons = vm.$el.querySelectorAll('button.active')
      expect(activeButtons.length).to.equal(1)
      const activeButton = activeButtons[0]
      expect(activeButton).to.exist
      expect(activeButton.className).to.include('yes')
    })
    it('should start with no active when user already voted no', function () {
      const rushee = Rushee.fake(0, {
        votes: {
          totals: { yes: 0, no: 1 },
          user: { vote: -1 }
        }
      })
      const vm = init(rushee)
      const activeButtons = vm.$el.querySelectorAll('button.active')
      expect(activeButtons.length).to.equal(1)
      const activeButton = activeButtons[0]
      expect(activeButton).to.exist
      expect(activeButton.className).to.include('no')
    })
  })
  describe('Voting action', function () {
    it('should have a vote method', function () {
      const rushee = Rushee.fake()
      const vm = init(rushee)
      expect(vm.vote).to.exist
    })
  })
})
