<template>
  <div class="about">
    <AboutLeft1></AboutLeft1>
    <AboutRight1></AboutRight1>
  </div>
</template>


<script>
import AboutLeft1 from '@/components/AboutLeft1.vue'
import AboutRight1 from '@/components/AboutRight1.vue'

export default {
  name: 'About',
  components: {
    AboutLeft1,
    AboutRight1
  }
}
</script>

<style scoped lang="scss">
@import "/src/assets/vars.scss";

.about {
  background-color: $white;
}

</style>