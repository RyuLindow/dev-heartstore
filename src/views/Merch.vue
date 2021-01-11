<template>
  <div class="merch">
    <div class="merch-section">
      <h1 class="featurette-heading" v-html="APIdata.welcomeTitle"></h1>
      <p class="lead" v-html="APIdata.welcomeText"></p>
    <MerchItem></MerchItem>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import MerchItem from '@/components/Merch/MerchItem.vue'
export default {
  name: 'Merch',
  components: {
    MerchItem
  },
  data() {
    return {
      APIdata: [],
    }
  },
    mounted() {
    axios.get('https://cdn.umbraco.io/content/f1f50fa1-6686-4b03-aa9f-e412bace07ea')
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

.merch {
  background-color: $white;
  padding-bottom: 4rem;
}

.merch-section {
  width: 80%;
  margin: 0 10%;
}

.featurette-heading {
  padding-top: 2rem;
}

</style>

