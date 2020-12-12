<template>
  <div>
    
    <ul class="list-group">
      <li class="list-group-item"><a class="footer-link" href="https://umbraco.com/blog/?tag=umbraco%20heartcore">Umbraco Heartcore Blog</a></li>
      <li class="list-group-item"><a class="footer-link" href="https://umbraco.com/products/umbraco-heartcore/free-intro-to-umbraco-heartcore/">Umbraco Heartcore Webinar</a></li>
      <li class="list-group-item"><a class="footer-link" href="https://our.umbraco.com/documentation/Umbraco-Heartcore/">Umbraco Heartcore Documentation</a></li>
      <li class="list-group-item"><a class="footer-link" href="https://umbraco.com/umbraco-heartcore-pricing/">Umbraco Heartcore Pricing</a></li>
      <li class="list-group-item"><a class="footer-link" href="https://umbraco.com/products/umbraco-heartcore/">Umbraco Heartcore Product Page</a></li>

    </ul>

  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "/src/assets/vars.scss";

ul li:nth-child(even) {
  background-color: $LightBlue;
}
ul li:nth-child(odd) {
  background-color: $Blue;
}

.list-group {
  color: $White;
  position: fixed;
  bottom: 0;
  border-radius: 0;
  width: 100%;
}

.footer-link {
  color: $White;

}
  .footer-link:hover {
    color: $Beige;
    font-size: 1.1rem;
  }
</style>
