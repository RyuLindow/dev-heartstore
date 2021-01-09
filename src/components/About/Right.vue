<template>
  <div class="about-section">

    <div class="row featurette" >
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading text-align--left" v-html="APIdata.lowerHeroTitle"></h2>
        <p class="lead text-align--left" v-html="APIdata.lowerHeroText">
          <ul class="list-icon">
            <!-- For each call for the list of features -->
            <li v-for="listItem in APIdata.lowerHeroListItems" :key="listItem">{{listItem}}</li>
          </ul>
        </p>
        </div>
      <div class="col-md-5 order-md-1">
            <!-- V-bind that renders the image source -->
        <img class="featurette-image img-fluid mx-auto" v-bind:src="APIdata.lowerHeroImage._url" width="500" height="500" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Right',
  data() {
    return {
      APIdata: [],
    }
  },
    mounted() {
    axios.get('https://cdn.umbraco.io/content/4ca57f73-a25e-44da-be9c-489fee1c5c03')
      .then((response) => {
        this.APIdata = response.data;
      })
      .catch(error => {
        console.log(error, 'Failed getting the API data from the Home page');
      });
  }
}
</script>

<style scoped lang="scss">
@import "/src/assets/vars.scss";
@import "/src/assets/main.scss";

.mx-auto {
  padding-top: 7rem;
}

@media (max-width: 992px) {
  .mx-auto {
  padding-top: 0rem;
}
}

</style>