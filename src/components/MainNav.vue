<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <img class="logo-image" src="/images/heartstore_logo.png" alt="heartcore logo gif">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item clickable">
                        <router-link to="/home" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item clickable">
                        <router-link to="/about" class="nav-link">About this demo</router-link>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'MainNav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "/src/assets/vars.scss";
.navbar {
    background-color: $Beige;
}
.logo-image {
    width: 24vh;
    padding-top: 0;
    margin: -4rem 2rem 0 1rem;
}

</style>