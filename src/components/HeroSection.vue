<template>
    <div class="hero">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                  Umbraco Heartstore
                </h1>
                <p>
                  The #umbazing Umbraco Merch only here at Umbraco Heartstore!
                  T-shirts, hoodies, socks, and other goodies can be found here, so give it a look 😊
                </p>
                <div class="hero-btn">
                  <button class="btn btn-info"><router-link class="btn-white" to="/about">Umbraco Merch</router-link></button>
                </div>
              </div>
            </div>
            <div class="col-md-7">
                <div>
                  <img class="featurette-image img-fluid mx-auto" src="/images/heartcore.gif" width="360" height="360" aria-label="">
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "HeroSection"
};
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