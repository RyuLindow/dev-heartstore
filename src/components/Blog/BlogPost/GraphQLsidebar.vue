<template>

    <div class="sidebar">
      <ul class="list">
        <li>
          <strong>Published</strong>: {{SidebarData.hero.createDate.split("T")[0]}}
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
  name: 'GraphQLsidebar',
  components: {

  },
  data() {
    return {
      SidebarData: [],
    }
  },
    mounted() {
//GraphQL POST call to the GraphQL demo article start
      axios({
      url: 'https://graphql.umbraco.io',
      headers: {
      "umb-project-alias": "dev-heartstore",
      },
      method: "post",
      data: {
        query: `
          {
            content(url: "/home/graphql-blog-area/graphql-presentation/") {
              ... on BlogArticle {
                readTime
                categories
                tags
                hero {
                  createDate
                }
              }
            }
          }
        `
      }
    })
    .then((result) => {
      this.SidebarData = result.data.data.content;
      console.log(result.data.data.content)
    });
//GraphQL POST call to the GraphQL demo article end
  }
}



</script>

<style scoped lang="scss">
@import "/src/assets/blogPost.scss";

</style>