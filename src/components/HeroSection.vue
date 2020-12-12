<template>
    <div class="hero bkgd-white">
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
                <div class="hero-btn mt-5">
                    <button class="btn custom-btn btn-info mr-4">Umbraco Merch</button>
                    <button class="btn custom-btn btn-outline-secondary">About this demo</button>
                </div>
              </div>
            </div>
            <div class="col-md-7">
                <div>
                    <img class="hero-image" src="/images/heartcore.gif" alt="heartcore logo gif">
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
  .hero{
    padding-top: 7rem;
    width: 100%;
    height: 500px;
    text-align: left;
  }

  .hero-image {
    width: 12vw;
  }
</style>