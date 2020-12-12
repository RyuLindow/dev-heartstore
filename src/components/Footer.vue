<template>
  <div>
    
    <ul class="list-group">
      <li class="list-group-item"><a href="https://umbraco.com/products/umbraco-heartcore/free-intro-to-umbraco-heartcore/">Umbraco Heartcore Webinar</a></li>
      <li class="list-group-item"><a href="https://our.umbraco.com/documentation/Umbraco-Heartcore/">Umbraco Heartcore Documentation</a></li>
      <li class="list-group-item"><a href="https://umbraco.com/umbraco-heartcore-pricing/">Umbraco Heartcore Pricing</a></li>
      <li class="list-group-item"><a href="https://umbraco.com/products/umbraco-heartcore/">Umbraco Heartcore Product Page</a></li>
      <li class="list-group-item"><a href="https://umbraco.com/blog/?tag=umbraco%20heartcore">Umbraco Heartcore Blog</a></li>

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
  background-color: $ColorLightBlue;
}
ul li:nth-child(odd) {
  background-color: $ColorBlue;
}

.list-group {
  color: $ColorWhite;
}


</style>
