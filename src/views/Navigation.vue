<template>
    <div>
        <div>
         <b-navbar>
            <template slot="start">
                <b-navbar-item href="#">
                    <router-link to="/">Home</router-link>
                </b-navbar-item>
                <b-navbar-item href="#">
                    <router-link to="About">About</router-link>
                </b-navbar-item>
            </template>
        </b-navbar>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    a {
        color: black;
    }

</style>