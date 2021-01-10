<template>                          

    <div class="column is-12-mobile is-4-desktop">

        <!--CATEGORIES WIDGET START-->
        <div class="widget">
            <h3 class="widget-header">{{SidebarData.categoriesTitle}}</h3>
            <nav class="widget-content">
                <ul class="categories">
                    <li v-for="category in SidebarData.categories" :key="category">
                        <a href="#">{{category}}</a>    
                    </li>
                </ul>
            </nav>
        </div>
        <!--CATEGORIES WIDGET END-->

        <!--TAGS WIDGET START-->
        <div class="widget">  
            <div class="widget-header">
                <h3>{{SidebarData.tagsTitle}}</h3>
            </div>
            <nav class="widget-content">
                <a href="#" class="tag" v-for="tag in SidebarData.tags" :key="tag">{{tag}}</a>
            </nav>
        </div>
        <!--TAGS WIDGET END-->

    </div>

</template>

<script scoped>
import axios from 'axios'

export default {
  name: 'Sidebar',
  data() {
    return {
      SidebarData: [],
    }
  },
    mounted() {
    axios.get('https://cdn.umbraco.io/content/af1ed190-29b1-4b4e-862e-e482ef2f6c73')
        .then((response) => {
        this.SidebarData = response.data;
        console.log(response.data)
      })
      .catch(error => {
        console.log(error, 'Failed getting the API data from the Home page');
      });
  }
}
</script>

<style scoped lang="scss">
@import "/src/assets/blog.scss";

.widget:first-of-type {
  margin-top: 1rem;
}

</style>