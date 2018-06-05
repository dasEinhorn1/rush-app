import Vue from 'vue'
import RusheeProfilePic from '@/components/partials/RusheeProfilePic'
import Rushee from '@/fixtures/RusheeFixture'

const Constructor = Vue.extend(RusheeProfilePic)

function init (rushee) {
  return new Constructor({propsData: {rushee: rushee}}).$mount()
}

describe('RusheeProfilePic.vue', function () {
  describe('Image', function () {
    it('should exist', function () {
      const rushee = Rushee.fake()
      const vm = init(rushee)
      expect(vm.$el.querySelector('img.profile')).to.exist
    })
    it('should have a status wrapper', function () {
      const rushee = Rushee.fake()
      const vm = init(rushee)
      expect(vm.$el.querySelector('div.icon-wrap'))
    })
    it('should have the right profile picture', function () {
      const profilePic = 'https://www.w3schools.com/w3images/avatar2.png'
      const rushee = Rushee.fake(0, { pic: profilePic })
      const vm = init(rushee)
      expect(vm.$el.querySelector('img.profile').src).to.equal(profilePic)
    })
    it('should have alternate text', function () {
      const rushee = Rushee.fake(0)
      const vm = init(rushee)
      expect(vm.$el.querySelector('img.profile').alt).to.exist
      expect(vm.$el.querySelector('img.profile').alt).to.include('profile')
    })
    it("should have alternate text with the rushee's name", function () {
      const rushee = Rushee.fake(0)
      const vm = init(rushee)
      expect(vm.$el.querySelector('img.profile').alt).to.include(rushee.firstName)
      expect(vm.$el.querySelector('img.profile').alt).to.include(rushee.lastName)
    })
  })
})
