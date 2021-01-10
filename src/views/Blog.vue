<template>
  <div class="blog">
      <BlogArea></BlogArea>
  </div>
</template>


<script>
import BlogArea from '@/components/Blog/BlogArea/BlogArea.vue'


export default {
  name: 'Blog',
  components: {
      BlogArea
  },
}
</script>

<style scoped lang="scss">
@import "/src/assets/vars.scss";

.about {
  background-color: $white;
}

</style>