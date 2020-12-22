<template>
  <div class="home">
      <h1 class="featurette-heading">{{APIdata.welcomeTitle}}</h1>
        <p class="lead">{{APIdata.welcomeText}}</p>
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
  data() {
    return {
      APIdata: [],
    }
  },
    mounted() {
    axios.get('https://cdn.umbraco.io/content/ebd19dc8-1ee7-4505-ab4d-cd0797d6a62d')
      .then((response) => {
        this.APIdata = response.data;
        console.log(response.data)
      })
      .catch(error => {
        console.log(error, 'Failed getting the API data from the Home page');
      });
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