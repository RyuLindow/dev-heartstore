<template>
    <div class="learn-more">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                  Learn more about Heartstore
                </h1>
                <p>
                  This demo was built using Umbraco Heartcore. A headless version of the Umbraco CMS made for projects with multiple frontends
                </p>
                <div class="hero-btn mt-5">
                    <button class="btn btn-outline-secondary">About this demo</button>
                </div>
              </div>
            </div>
            <div class="col-md-7">
                <div>
                    <img class="learn-more__image" src="/images/headless_blue_arrows.png" alt="heartcore omnichannel">
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "LearnMoreSection"
};
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

  .learn-more__image {
    width: 12vw;
  }

  .btn {
    margin-bottom: 1rem;
  }

  .btn-outline-secondary {
    background-color: $white;
    border-color: $lightblue;
    color: $lightblue;
  }

  .btn-outline-secondary:hover {
    background-color: $beige;
    border-color: $blue;
    color: $blue;
  }
</style>