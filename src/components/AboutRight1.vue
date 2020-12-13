<template>
  <div class="about-section">

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading text-align--left">Build an application in Umbraco Heartcore<span class="text-muted"> and we'll take care of it for you.</span></h2>
        <p class="lead text-align--left">The headless Umbraco CMS allows you to split your backoffice and your frontend in two parts. You can choose to host your frontends anywhere you like while your backoffice updated and secured.
          <ul class="list-icon">
            <li>The backoffice is kept updated and secured, so you don't have to spend time on patches and security fixes</li>
            <li>We'll manage the API so you don't have yet another codebase to worry about</li>
            <li>Hosting and CDN is included to give you a secure place for your content that guarantees low latency when displayed worldwide</li>
            <li>GraphQL and Preview API to ensure high performance in your solution and give your editors an even greater experience</li>
        </ul>
        </p>
        </div>
      <div class="col-md-5 order-md-1">
        <img class="featurette-image img-fluid mx-auto" src="/images/heartcore.gif" width="500" height="500" aria-label="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AboutRight1'
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