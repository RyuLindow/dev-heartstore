<template>
  <div class="form">
      <div class="wrapper">
        <h1>{{CONTACTdata.welcomeTitle}}</h1>
        <h3 v-html="CONTACTdata.welcomeText"></h3>

        <form data-validate="true">
            <section>
                <div class="form-group form-group--horizontal">
                    <label class="form-group__label" for="name">Name: <abbr title="required">*</abbr></label>
                    <input class="form-group__field" id="name" type="text" placeholder="Fill in your name" required v-model="name">
                </div>
                <div class="form-group form-group--horizontal">
                    <label class="form-group__label" for="email">Email: <abbr title="required">*</abbr></label>
                    <input class="form-group__field" id="email" type="email" placeholder="email@email.com" required v-model="email">
                </div>
                <div class="form-group form-group--horizontal">
                    <label class="form-group__label" for="website">Website:</label>
                    <input class="form-group__field" id="website" type="text" placeholder="yourdomain.com" v-model="website">
                </div>
            </section>
            <section>
                <div class="form-group">
                    <label class="form-group__label" for="message">Message: <abbr title="required">*</abbr></label>
                    <textarea class="form-group__field" name="message" id="message" rows="4" required v-model="message"></textarea>
                </div>
            </section>
            <button class="btn btn--wide" type="submit" v-on:click="submitEntry()">Submit</button>
        </form>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'ContactForm',
  components: {
      
  },
  data() {
    return {
      CONTACTdata: [],
      name: '',
      email: '',
      website: '',
      message: ''
    }
  },
    mounted() {

//Form validation
    var forms = document.querySelectorAll('.validate');
    for (var i = 0; i < forms.length; i++) {
    forms[i].setAttribute('novalidate', true);
}   

axios({
      url: 'https://graphql.umbraco.io',
      method: "post",
      data: {
        query: `
            {
                content(url:"/home/contact") {
                    ...on Contact {
                  welcomeTitle
                  welcomeText
                }
              }
            }
        `
      }
    })
    .then((result) => {
      this.CONTACTdata = result.data.data.content;
      console.log(result.data.data.content)
      
    });
  },
    methods: {
      submitEntry: function () {
        let FORMdata = {
          name: this.name,
          email: this.email,
          website: this.website,
          message: this.message
        }
          axios.post('https://api.umbraco.io/forms/a718a2a2-5507-4217-a407-c4d7e6ef61f3/entries', FORMdata)
          .then(response => this.FORMdata = response.FORMdata)


        //Slack integration - requires a method on its own
        /*
          axios.post('https://hooks.slack.com/services/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', { params: FORMdata})
          .then(response => this.FORMdata = response.FORMdata)
          */

      }

  }
}
</script>

<style scoped lang="scss">
@import "/src/assets/vars.scss";
@import "/src/assets/ContactForm/app.scss";

.form {
    background-color: $white;
    padding: 2rem 0 2rem 0;
}

</style>



