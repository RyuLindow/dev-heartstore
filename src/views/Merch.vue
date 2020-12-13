<template>
  <div class="merch">
    <h1>This is the merch page</h1>
    <a href="https://getbootstrap.com/docs/5.0/layout/grid/">Grid</a>
    <br>
    <a href="https://getbootstrap.com/docs/5.0/content/figures/">Figures</a>

    <MerchItem></MerchItem>
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
}

</style>

