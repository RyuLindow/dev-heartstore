<template>                          

<div class="column is-12-mobile is-12-tablet is-8-desktop">
    <div class="cards is-two"> 

        <div class="card" v-for="preview in PreviewData.content" :key="preview"
        :class="{isFeatured:preview.isFeatured}">
<!--Binds the isFeatured class which can be then toggled in the backoffice, as the API result for isFeatured can be either true or false-->
                     
            <div class="card-content">
                <a href="#">
                    <figure><img v-bind:src="preview.hero._url" v-bind:alt="preview.hero.name" class="card-image"></figure>
                </a>

                <div class="card-content">
                    <a href="#"></a>
                    <a href="#">
                        <div class="card-inner">
                            <div class="card-description">
                                <h3 class="card-title">{{preview.name}}</h3>
                                    <p class="card-teaser">
                                        {{preview.previewText}}
                                    </p>
                            </div>
                            <div class="card-meta">
                                <div class="is-faded">January, 9th 2021</div>
                                <div class="card-extra">
                                    <span class="card-special hidden"
                                    :class="{shown:preview.isFeatured}">
<!--this span is hidden by default is only visible on the featured blog article-->

                                        Hot right now 🔥
                                    </span>
                                    <span>{{preview.readTime}} min. read</span>

                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script scoped>
import axios from 'axios'

export default {
  name: 'Preview',
  data() {
    return {
      PreviewData: [],
    }
  },
    mounted() {
    axios.get('https://cdn.umbraco.io/content/af1ed190-29b1-4b4e-862e-e482ef2f6c73/children')
        .then((response) => {
        this.PreviewData = response.data._embedded;
        console.log(response.data._embedded)
      })
      .catch(error => {
        console.log(error, 'Failed getting the API data');
      });
  }
}
</script>

<style scoped lang="scss">
@import "/src/assets/blog.scss";

</style>