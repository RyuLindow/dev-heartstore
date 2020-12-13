<template>
    <div class="learn-more">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                  Learn more about Heartstore
                </h1>
                <p class="lead">
                  This demo was built using Umbraco Heartcore. A headless version of the Umbraco CMS allows you to show your content on different platform with only one backoffice!
                  That way, you can manage it one in one place and your editors will have a much easier time working with content.
                </p>
                <div class="hero-btn">
                    <button class="btn btn-outline-secondary"><router-link class="btn-blue" to="/about">About this demo</router-link></button>
                </div>
              </div>
            </div>
            <div class="col-md-7">
                <div>
                    <img class="featurette-image img-fluid mx-auto" src="/images/headless_blue_arrows.png" width="360" height="360" aria-label="heartcore omnichannel">
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