<template>
    <div class="hero">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                  {{APIdata.upperTitle}}
                </h1>
                <p class="lead">
                  {{APIdata.upperText}}
                </p>
                <div class="hero-btn">
                  <!-- Binds the value parameter to the button link-->
                  <button class="btn btn-info"><router-link class="btn-white" v-bind:to="APIdata.upperButtonLink">{{APIdata.upperButtonText}}</router-link></button>
                </div>
              </div>
            </div>
            <div class="col-md-7">
                <div>
                  <!-- Bings the url to the image source-->
                  <img class="featurette-image img-fluid mx-auto" v-bind:src="APIdata.upperImage._url" width="360" height="360" alt="heartcore gif">
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HeroSection',
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

.hero{
  padding: 4rem 0 4rem 0;
  width: 100%;
  text-align: left;
  background-color: $white;
}

.hero-title {
  color: $blue;
}

.hero-image {
  width: 12vw;
}

.btn {
  margin-bottom: 1rem;
}

.btn-info {
  background-color: $blue;
  border-color: $lightblue;
}

.btn-info:hover {
  background-color: $blue;
  border-color: $blue;
}

.btn-white {
  color: $white;
}

.btn-white:hover {
  color: $beige;
  text-decoration: none;
}
</style>