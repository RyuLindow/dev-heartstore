<template>
  <div class="home">
      <h1 class="featurette-heading">Umbraco Heartstore</h1>
        <p class="lead">The e-commerce web app demo built with <span class="text-muted">Umbraco Heartcore</span> and <span class="text-muted">Vue.js</span>
        </p>
    <HeroSection></HeroSection>
    <LearnMoreSection></LearnMoreSection>
  </div>
</template>


<script>
import axios from 'axios'
import HeroSection from '@/components/HeroSection.vue'
import LearnMoreSection from '@/components/LearnMoreSection.vue'

export default {
  name: 'Home',
  components: {
    HeroSection,
    LearnMoreSection
  },
  mounted() {
    axios.get('https://cdn.umbraco.io/content/ebd19dc8-1ee7-4505-ab4d-cd0797d6a62d')
  .then(data => console.log(data))
  }
}
</script>

<style scoped lang="scss">
@import "/src/assets/vars.scss";

.featurette-heading {
  padding-top: 2rem;
}

.home {
  background-color: $white;
}

.text-muted {
  color: $lightblue !important;
}

</style>