<template>
  <div class="wrapper">
    <StaticPart />
    <Nearby />
  </div>
  <Docker />
</template>

<script>
import Docker from './Docker.vue'
import Nearby from './Nearby.vue'
import StaticPart from './StaticPart.vue'
export default {
  name: 'Home',
  components: {
    Docker,
    Nearby,
    StaticPart
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem .1rem .18rem;
}
</style>
