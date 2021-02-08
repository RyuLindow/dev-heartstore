<template>
  <div class="contact">
      <ContactForm></ContactForm>
  </div>
</template>


<script>
import axios from 'axios'
import ContactForm from '@/components/Contact/ContactForm.vue'

export default {
  name: 'Contact',
  components: {
      ContactForm
  },
  data() {
    return {
      APIdata: [],
    }
  },
    mounted() {
        
      axios({
      url: 'https://graphql.umbraco.io',
      method: "post",
      data: {
        query: `
            {
            content(url: "/home/") {
                ... on Home {
                name
                children {
                    edges {
                    node {
                        name

                    }
                    }
                }
                }
            }
            }

        `
      }
    })
    .then((response) => {
    this.APIdata = response.data.data.content.children.edges;
    console.log(response.data.data.content.children.edges)
    })


  }
}
</script>

<style scoped lang="scss">
@import "/src/assets/vars.scss";

.contact {
  padding-bottom: 6rem;
  background-color: $white;
}

</style>



