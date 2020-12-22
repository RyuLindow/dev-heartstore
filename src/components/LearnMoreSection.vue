<template>
    <div class="learn-more">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                  {{APIdata.lowerTitle}}
                </h1>
                <p class="lead">
                  {{APIdata.lowerText}}
                </p>
                <div class="hero-btn">
                  <!-- {{APIdata.lowerButtonLink}} - parameter to get the button link-->
                    <button class="btn btn-outline-secondary"><router-link class="btn-blue" to="/about">{{APIdata.lowerButtonText}}</router-link></button>
                </div>
              </div>
            </div>
            <div class="col-md-7">
                <div>
                  <!--{{APIdata.lowerImage.umbracoFile.src}} - parameter to get the image source-->
                    <img class="featurette-image img-fluid mx-auto" src="/images/headless_blue_arrows.png" width="360" height="360" aria-label="heartcore omnichannel">
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LearnMoreSection',
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

.learn-more{
  padding: 4rem 0 6rem 0;
  width: 100%;
  text-align: left;
  background-color: $white;
}

.hero-title {
  color: $blue;
}

.learn-more__image {
  width: 12vw;
}

.btn {
  margin-bottom: 1rem;
}

.btn-outline-secondary {
  background-color: $white;
  border-color: $lightblue;
}

.btn-outline-secondary:hover {
  background-color: $beige;
  border-color: $blue;
}

.btn-blue {
  color: $blue;
}

.btn-blue:hover {
  text-decoration: none;
}
</style>