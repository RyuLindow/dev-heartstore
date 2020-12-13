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
export default {
    name: 'MerchItem'
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