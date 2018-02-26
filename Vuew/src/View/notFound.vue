<template>
  <div id='404-not-found'>
    Darling in the FranXX
    <p>Image for xx</p>
    <!-- <p>{{ JSON.string$router }}</p> -->
    <img class='ima' src='../assets/015.jpg' alt='error'>
    <router-link to="/index">Index</router-link>
  </div>
</template>


<script>
export default {
  created: function () {
    console.log(this.$router);
  },
  computed: {
    username () {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
  #404-not-found {
    text-align: center;
    font-size: 24px;
    color: aqua;
    p {
      color: red;
    }
    .ima {
      width: 200px;
      height: 200px;
    }
  }
</style>

