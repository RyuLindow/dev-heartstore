<template>

    <div class="sidebar">
      <ul class="list">
        <li>
          <strong>Published</strong>: January 07, 2020
        </li>
        <li>
          <strong>Read time</strong>: {{SidebarData.readTime}} min. read
        </li>
        <li>
          <strong>Category</strong>: 
          <a href="#">{{SidebarData.categories}}</a>
        </li>
        <li class="flex-wrap">
          <a href="#" class="tag" v-for="tag in SidebarData.tags" :key="tag">{{tag}}</a>
        </li>
      </ul>
    </div>

</template>

<script scoped>
import axios from 'axios'
export default {
  name: 'Sidebar',
  components: {

  },
  data() {
    return {
      SidebarData: [],
    }
  },
    mounted() {
    axios.get('https://cdn.umbraco.io/content/url?url=/home/blog-area/new-hire-darek-szatkowski/')
        .then((response) => {
        this.SidebarData = response.data;
      })
      .catch(error => {
        console.log(error, 'Failed getting the API data');
      });
  }
}
</script>

<style scoped lang="scss">
@import "/src/assets/blogPost.scss";

</style>