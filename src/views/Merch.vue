<template>
  <div class="merch">
    <div class="merch-section">
        <h1 class="featurette-heading">Umbraco Heartstore</h1>
        <p class="lead">The only place to get your Umbraco Merch! Take a look at what we have 😉
        </p>

    <MerchItem></MerchItem>
        </div>
  </div>
</template>


<script>
import MerchItem from '@/components/MerchItem.vue'

export default {
  name: 'Merch',
  components: {
    MerchItem
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

