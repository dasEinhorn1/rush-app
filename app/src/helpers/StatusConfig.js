import { faCheck, faCircle, faExclamation, faBolt, faBan } from '@fortawesome/fontawesome-free-solid'
import { randInt } from '@/helpers/Random'

const green = '#007A33'
const red = '#FF381E'
const blue = '#2F91AF'
const white = 'white'

const thresholds = {
  BLACK_BALL: (yes, no) => no > 5,
  FAST_TRACK: (yes, no) => yes > 20 && yes < 40,
  BID: (yes, no) => yes >= 40
}

const StatusType = {
  ACCEPTED: 'A',
  HAS_BID: 'B',
  ELIGIBLE: 'E',
  FAST_TRACK: 'F',
  BLACK_BALL: 'Z',
  NONE: '_',
  fromVotes: function (yes, no) {
    if (thresholds.BLACK_BALL(yes, no)) {
      return StatusType.BLACK_BALL
    } else if (thresholds.FAST_TRACK(yes, no)) {
      return StatusType.FAST_TRACK
    } else if (thresholds.BID(yes, no)) {
      return ([
        StatusType.ACCEPTED,
        StatusType.HAS_BID,
        StatusType.ELIGIBLE])[randInt(2)]
    }
    return StatusType.NONE
  }
}

const DEFAULT_CONFIG = {
  color: white,
  icon: faCheck,
  backgroundColor: green
}

const STATUS_CONFIGS = {}

STATUS_CONFIGS[StatusType.ACCEPTED] = {
  ...DEFAULT_CONFIG
}
STATUS_CONFIGS[StatusType.HAS_BID] = {
  icon: faCircle,
  color: green,
  backgroundColor: 'transparent'
}
STATUS_CONFIGS[StatusType.ELIGIBLE] = {
  ...DEFAULT_CONFIG,
  icon: faExclamation
}
STATUS_CONFIGS[StatusType.FAST_TRACK] = {
  ...DEFAULT_CONFIG,
  icon: faBolt,
  backgroundColor: blue
}
STATUS_CONFIGS[StatusType.BLACK_BALL] = {
  ...DEFAULT_CONFIG,
  icon: faBan,
  backgroundColor: red
}

STATUS_CONFIGS[StatusType.NONE] = {
  icon: {},
  color: '',
  backgroundColor: ''
}

const Status = {
  icon: (type) => {
    return STATUS_CONFIGS[type].icon
  },
  color: (type) => {
    return STATUS_CONFIGS[type].color
  },
  bgColor: (type) => {
    return STATUS_CONFIGS[type].backgroundColor
  }
}

const getRusheeStatus = (rushee) => rushee.votes.status

export { StatusType, Status, getRusheeStatus }
