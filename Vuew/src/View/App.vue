<template>
  <div id="app">
    <div>1111111111</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  created: function () {
    $.ajax({
      url: '//47.91.209.93:3001/api/rank/day',
    }).done(console.log);
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang='scss' scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    h1, h2 {
      font-weight: normal;
    }
    ul {
      list-style-type: none;
      padding: 0;
      li {
        display: inline-block;
        margin: 0 10px;
        a {
          color: #42b983;
        }
      }
    }
  }
</style>
