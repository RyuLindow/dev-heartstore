<template>
  <div class="home">
    <HeroSection></HeroSection>
    <LearnMoreSection></LearnMoreSection>
  </div>
</template>


<script>
import HeroSection from '@/components/HeroSection.vue'
import LearnMoreSection from '@/components/LearnMoreSection.vue'

export default {
  name: 'Home',
  components: {
    HeroSection,
    LearnMoreSection
  }
}
</script>

<style scoped lang="scss">

</style>