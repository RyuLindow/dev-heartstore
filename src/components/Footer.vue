<template>
  <div class="footer">
    <ul class="list-group">
      <li class="list-group-item"><a class="footer__link" href="https://umbraco.com/products/umbraco-heartcore/free-intro-to-umbraco-heartcore/">Umbraco Heartcore Live Webinar</a></li>
      <li class="list-group-item"><a class="footer__link" href="https://umbraco.com/try-umbraco-heartcore/">Get a free Umbraco Heartcore trial</a></li>
      <li class="list-group-item"><a class="footer__link" href="https://umbraco.com/blog/?tag=umbraco%20heartcore">Umbraco Heartcore Blog</a></li>
      <li class="list-group-item"><a class="footer__link" href="https://umbraco.com/products/umbraco-heartcore/">Umbraco Heartcore Product Page</a></li>
      <li class="list-group-item"><a class="footer__link" href="https://umbraco.com/umbraco-heartcore-pricing/">Umbraco Heartcore Pricing</a></li>
      <li class="list-group-item"><a class="footer__link" href="https://our.umbraco.com/documentation/Umbraco-Heartcore/">Umbraco Heartcore Documentation</a></li>
    </ul>
<!--
  Renders Nested Content links
    <ul class="list-group" v-for="link in APIdata.nestedLinks " :key="link">
      <li class="list-group-item"><a class="footer__link" href="https://umbraco.com/products/umbraco-heartcore/free-intro-to-umbraco-heartcore/">{{link}}</a></li>
    </ul>
-->

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
