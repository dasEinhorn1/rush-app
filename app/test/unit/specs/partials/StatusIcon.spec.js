import Vue from 'vue'
import StatusIcon from '@/components/partials/StatusIcon'
import { StatusType, Status } from '@/helpers/StatusConfig'
const Constructor = Vue.extend(StatusIcon)

function initIcon (status) {
  return new Constructor({propsData: {status: status}}).$mount()
}

describe('StatusIcon.vue', function () {
  describe('Existence', function () {
    it('should not exist if there is no status', function () {
      const vm = initIcon(StatusType.NONE)
      expect(vm.$el.firstChild).to.not.exist
    })
    it('should exist if accepted', function () {
      const vm = initIcon(StatusType.ACCEPTED)
      expect(vm.$el.firstChild).to.exist
    })
    it('should exist if blackballed', function () {
      const vm = initIcon(StatusType.BLACK_BALL)
      expect(vm.$el.firstChild).to.exist
    })
    it('should exist if bid', function () {
      const vm = initIcon(StatusType.HAS_BID)
      expect(vm.$el.firstChild).to.exist
    })
    it('should exist if eligible', function () {
      const vm = initIcon(StatusType.ELIGIBLE)
      expect(vm.$el.firstChild).to.exist
    })
    it('should exist if fast track', function () {
      const vm = initIcon(StatusType.FAST_TRACK)
      expect(vm.$el.firstChild).to.exist
    })
  })
  describe('Icons', function () {
    Object.entries(StatusType)
      .filter(([name, type]) => type !== StatusType.NONE && typeof type !== 'function')
      .forEach(([name, type]) => {
        it('should have the right background color for ' + name, function () {
          const vm = initIcon(type)
          const actualIcon = vm.$el.querySelector('svg').dataset.icon
          const expectedIcon = Status.icon(type).iconName
          expect(actualIcon).to.equal(expectedIcon)
        })
      })
  })
  describe('Background Colors', function () {
    Object.entries(StatusType)
      .filter(([name, type]) => type !== StatusType.NONE && typeof type !== 'function')
      .forEach(([name, type]) => {
        it('should have the right background color for ' + name, function () {
          const vm = initIcon(type)
          const actualBgColor = vm.$el.style.backgroundColor
          const expectedBgColor = Status.bgColor(type)
          expect(actualBgColor).to.equal(expectedBgColor)
        })
      })
  })
})
