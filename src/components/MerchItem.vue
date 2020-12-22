<template>
  <div class="merch-item">
        <div class="flex">

            <div class="card">
                <img src="/images/heartcore_omnichannel.gif" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Umbraco Hoodie</h5>
                    <p class="card-text">Awesome hoodie to keep you warm while you build awesome Umbraco sites!</p>
                    <a href="#" class="btn btn-info">Add to cart</a>
                </div>
            </div>
            <div class="card">
                <img src="/images/heartcore_omnichannel.gif" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Umbraco Hoodie</h5>
                    <p class="card-text">Awesome hoodie to keep you warm while you build awesome Umbraco sites!</p>
                    <a href="#" class="btn btn-info">Add to cart</a>
                </div>
            </div>
            <div class="card">
                <img src="/images/heartcore_omnichannel.gif" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Umbraco Hoodie</h5>
                    <p class="card-text">Awesome hoodie to keep you warm while you build awesome Umbraco sites!</p>
                    <a href="#" class="btn btn-info">Add to cart</a>
                </div>
            </div>
            <div class="card">
                <img src="/images/heartcore_omnichannel.gif" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Umbraco Hoodie</h5>
                    <p class="card-text">Awesome hoodie to keep you warm while you build awesome Umbraco sites!</p>
                    <a href="#" class="btn btn-info">Add to cart</a>
                </div>
            </div>
            <div class="card">
                <img src="/images/heartcore_omnichannel.gif" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Umbraco Hoodie</h5>
                    <p class="card-text">Awesome hoodie to keep you warm while you build awesome Umbraco sites!</p>
                    <a href="#" class="btn btn-info">Add to cart</a>
                </div>
            </div>
            <div class="card">
                <img src="/images/heartcore_omnichannel.gif" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Umbraco Hoodie</h5>
                    <p class="card-text">Awesome hoodie to keep you warm while you build awesome Umbraco sites!</p>
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

</style>