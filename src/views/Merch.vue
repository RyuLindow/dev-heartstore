<template>
  <div class="merch">
    <div class="merch-section">


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

</style>

