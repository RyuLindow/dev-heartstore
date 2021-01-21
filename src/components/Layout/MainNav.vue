<template>
    <div class="mainnav">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <router-link to="/"><img class="logo-image" src="/images/heartstore_logo.png" alt="heartcore logo"></router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" alt="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item clickable">
                        <router-link to="/" class="nav-link nav-item">Home</router-link>
                    </li>
                    <li class="nav-item clickable">
                        <router-link to="/merch" class="nav-link nav-item">Umbraco Merch</router-link>
                    </li>
                    <li class="nav-item clickable">
                        <router-link to="/about" class="nav-link nav-item">About this demo</router-link>
                    </li>
                    <li class="nav-item clickable">
                        <router-link to="/blog" class="nav-link nav-item">Blog</router-link>
                    </li>
                    <li class="nav-item clickable">
                        <router-link to="/graphql" class="nav-link nav-item">GraphQL</router-link>
                    </li>
                </ul>
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
    background-color: $beige;
    margin: 1rem;
}

.mainnav {
    width: 80%;
    margin: 0 10%;
}

.logo-image {
    width: 24vh;
    padding-top: 0;
    margin: -3.2rem 2.4rem 0 1rem;
}

.d-flex {
    margin-left: auto;
}

.btn-blue {
    background-color: $lightblue;
    border-color: $blue;
    color: $white;
    margin-left: 0.4rem;
    
}

.btn-blue:hover {
    background-color: $blue;
    border-color: $blue;
    color: $beige;
    text-decoration: none;
}

.nav-item{
    color: $lightblue !important; 
}

.router-link-exact-active {
    color: $blue !important;
    font-size: 1.2rem;
}


@media (max-width: 1024px){
    .logo-image {
        width: 20vh;
    }
}

@media (max-width:600px){
    .logo-image {
        width: 16vh;
    }
}

@media (max-width:480px){
    .logo-image {
        width: 14vh;
    }
}
</style>