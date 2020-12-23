<template>
  <div class="footer">
  <!--Renders Nested links - text and links for each item-->
    <ul class="list-group">
      <li class="list-group-item"  v-for="link in APIdata.nestedLinks" :key="link"><a class="footer__link" v-bind:href="link.nestedLink">{{link.linkText}}</a></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Footer',
  data() {
    return {
      APIdata: [],
    }
  },
    mounted() {
    axios.get('https://cdn.umbraco.io/content/ebd19dc8-1ee7-4505-ab4d-cd0797d6a62d')
      .then((response) => {
        this.APIdata = response.data;
      })
      .catch(error => {
        console.log(error, 'Failed getting the API data from the Home page');
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "/src/assets/vars.scss";

ul li:nth-child(even) {
  background-color: $lightblue;
}
ul li:nth-child(odd) {
  background-color: $blue;
}

.list-group {
  color: $white;
  position: relative;
  width: 100%;
  border-radius: 0;
}

.footer__link {
  color: $white;

}

.footer__link:hover {
    color: $beige;
  }
</style>
