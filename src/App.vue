<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="page_1">
    <hr>
    <div class="container">
      <AccountComponent />
      <HomeComponent />
    </div>
    <hr>
  </div>
</template>

<script>
import AccountComponent from '@/components/AccountComponent';
import HomeComponent from "@/middileware/HomeComponent";

export default {
  name: 'App',
  components: {
    AccountComponent,
    HomeComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 32%;
}
</style>
