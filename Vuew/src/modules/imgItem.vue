<template>
  <div class="item" @click="onClick(item)">
    <div class="img"  v-bind:style="{ backgroundImage: `url(${item.image_urls.square_medium || item.image_urls.medium})` }"></div>
    <div class="card">
      <div class="artist">{{ item.user.name || '' }}</div>
      <div class="content">{{ item.title || '' }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    onClick: function (item) {
      return () => {
        console.log(item)
        // this.$router.push({ url: item });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  width: 29%;
  height: 30vh;
  box-sizing: border-box;
  margin: 0 2% 3vh;
  border: 1px solid aqua;
  border-radius: 1em;
  background-color: #fff;
  overflow: hidden;
  .img {
    width: 100%;
    height: 70%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .card {
    width: 100%;
    height: 30%;
    box-sizing: border-box;
    padding-top: 5%;
    color: #bbb;
    text-align: center;
    .artist, .content {
      width: 100%;
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
