<template>
<main>
    <section class="blog">
        <div class="container">
            <div class="columns is-mobile is-multiline">              
                        
            <Preview></Preview>

            <Sidebar></Sidebar>

            </div>
        </div>
    </section>
</main>
</template>

<script scoped>
import Preview from '@/components/Blog/BlogArea/Preview.vue'
import Sidebar from '@/components/Blog/BlogArea/Sidebar.vue'

export default {
  name: 'BlogArea',
  components: {
      Preview,
      Sidebar
  },
  data() {
    return {
      BlogAreaData: [],
    }
  }
}
</script>

<style scoped lang="scss">
@import "/src/assets/blog.scss";

</style>