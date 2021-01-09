<template>
  <div class="about">
    <Left></Left>
    <Right></Right>
  </div>
</template>


<script>
import axios from 'axios'
import Left from '@/components/About/Left.vue'
import Right from '@/components/About/Right.vue'

export default {
  name: 'About',
  components: {
    Left,
    Right
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