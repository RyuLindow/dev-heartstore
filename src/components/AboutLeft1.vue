<template>
  <div class="about-section">

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading text-align--left">Built in Vue.js <span class="text-muted">using Umbraco Heartcore as backoffice.</span></h2>
        <p class="lead text-align--left">This web app is in constant development and will be updated as the time goes.
          <br>
          Here's a list of things and features that will be added in the future:
          <ul class="list-icon">
            <li>Code snippet examples</li>
            <li>Detailed tutorial on <a href="https://our.umbraco.com/documentation/Umbraco-Heartcore/">our.umbraco.com</a></li>
            <li>Dynamic sections</li>
            <li>Dynamic menu</li>
            <li>Dynamic colors</li>
            <li>Omnichannel</li>
            <li>And more!</li>
          </ul>
        </p>
        </div>
      <div class="col-md-5 test">
        <img class="featurette-image img-fluid mx-auto" src="/images/headless_blue_arrows.png" width="500" height="500" aria-label="arrows">
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
    name: 'AboutLeft1'
}
</script>

<style scoped lang="scss">
@import "/src/assets/vars.scss";
@import "/src/assets/main.scss";

.mx-auto {
  padding-top: 8rem;
}

@media (max-width: 992px) {
  .mx-auto {
  padding-top: 0rem;
}
}


</style>