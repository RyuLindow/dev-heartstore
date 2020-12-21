<template>
  <div class="about">
    <AboutLeft1></AboutLeft1>
    <AboutRight1></AboutRight1>
  </div>
</template>


<script>
import axios from 'axios'
import AboutLeft1 from '@/components/AboutLeft1.vue'
import AboutRight1 from '@/components/AboutRight1.vue'

export default {
  name: 'About',
  components: {
    AboutLeft1,
    AboutRight1
  },
    mounted() {
    axios.get('https://cdn.umbraco.io/content/4ca57f73-a25e-44da-be9c-489fee1c5c03')
        .then(response => console.log(response.data))
        .catch(error => {
        console.log(error, 'Failed getting the API data from the About page');
    });
  }
}
</script>

<style scoped lang="scss">
@import "/src/assets/vars.scss";

.about {
  background-color: $white;
}

</style>