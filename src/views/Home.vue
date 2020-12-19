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
    axios.get('https://cdn.umbraco.io/content/f1f50fa1-6686-4b03-aa9f-e412bace07ea')
    .then( function() {
      console.log('Data: ')
    })
    .catch( function(){
      console.log('get home data failed')
    })
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