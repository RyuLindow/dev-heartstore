<template>
  <div class="home">
    <!--The v-html allows for rendering content from the Rich text editor as html instead of a string which means that styling classes added to text in the backoffice are rendered on the frontend-->
      <h1 class="featurette-heading" v-html="APIdata.welcomeTitle"></h1>
      <p class="lead" v-html="APIdata.welcomeText"></p>
    <Hero></Hero>
    <LearnMore></LearnMore>
  </div>
</template>


<script>
import axios from 'axios'
import Hero from '@/components/Home/Hero.vue'
import LearnMore from '@/components/Home/LearnMore.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    LearnMore
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
        console.log(error, 'Failed getting the API data');
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