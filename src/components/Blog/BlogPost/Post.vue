<template>
  <main>
    <section class="post">
        <div class="container">
            <div class="columns is-mobile is-multiline">              

              <div class="section blogpost">
                <div class="umb-container relative overflow-visible-lg">
                  <div class="columns">
                    <div class="column is-12-mobile is-8-tablet is-offset-2-tablet is-6-desktop is-offset-3-desktop">

                      <div class="author is-spaced-bottom">
                        <div class="author-image">
                          <img src="/images/author.jpg" alt="author avatar" class="img is-round" style="height: 40px;">
                          </div>
                          <div class="author-description is-small">
                            <span>Written by </span>
                            <span>{{PostData._writerName}}</span>
                          </div>
                        </div>

                        <div class="content">

                          <div class="blogpost-teaser">
                            <h2>{{PostData.headline}}</h2>
                          </div>

                          <div class="umb-grid">
                            <div class="umb-container">
                              <div class="columns">
                                <div class="column is-12 grid-section__cell">
                                  <div class="content grid-section__cell-content">

                                    <p v-html="PostData.bodyText"></p>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                  <Sidebar></Sidebar>

              </div>
            </div>
          </div>
        </div>
    </section>
  </main>
</template>

<script scoped>
import axios from 'axios'
import Sidebar from '@/components/Blog/BlogPost/Sidebar.vue'

export default {
  name: 'Post',
  components: {
    Sidebar
  },
  data() {
    return {
      PostData: [],
    }
  },
    mounted() {
    axios.get('https://cdn.umbraco.io/content/url?url=/home/blog-area/new-hire-darek-szatkowski/')
        .then((response) => {
        this.PostData = response.data;
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