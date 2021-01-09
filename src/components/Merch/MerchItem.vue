<template>
  <div class="merch-item">
        <div class="flex">

            <div class="card zoom" v-for="merch in APIdata.merchList" :key="merch">
                <img v-bind:src="merch.merchImage._url" class="card-img-top" v-bind:alt="merch.merchImageAltTag">
                <div class="card-body">
                    <h3 class="card-title">{{merch.merchName}}</h3>
                    <p class="card-text">{{merch.merchDescription}}</p>
                    <h5 class="card-title">{{merch.merchPrice}}{{merch.merchPriceCurrency}}</h5>
                    <a href="#" class="btn btn-info">Add to cart</a>
                </div>
            </div>

            
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MerchItem',
  data() {
    return {
      APIdata: [],
    }
  },
    mounted() {
    axios.get('https://cdn.umbraco.io/content/f1f50fa1-6686-4b03-aa9f-e412bace07ea')
        .then((response) => {
        this.APIdata = response.data;
      })
      .catch(error => {
        console.log(error, 'Failed getting the API data from the Home page');
      });
  }
}
</script>

<style scoped lang="scss">
@import "/src/assets/vars.scss";
@import "/src/assets/main.scss";

.btn-info {
    background-color: $lightblue;
    border-color: $blue;
}

.btn-info:hover {
    background-color: $blue;
}

.flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
    width: 24rem;
    margin: 4rem 2rem 0 2rem;
}

.zoom {
  transition: transform .2s;
}

.zoom:hover {
  transform: scale(1.05);
}

</style>