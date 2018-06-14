<template lang="html">
  <div
    v-if='status != "_"'
    class="status-icon icon-bg"
    :style='{backgroundColor: bgColor, color: color}'>
    <font-awesome-icon transform='shrink-3' :icon='icon'/>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { Status } from '@/helpers/StatusConfig'

export default {
  props: ['status'],
  computed: {
    icon () {
      return Status.icon(this.status)
    },
    bgColor () {
      return Status.bgColor(this.status)
    },
    color () {
      return Status.color(this.status)
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="css" scoped>
  .icon-bg {
    width: 100%;
    height: 100%;
    position: relative;
  }
  svg {
    display: block;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
</style>
