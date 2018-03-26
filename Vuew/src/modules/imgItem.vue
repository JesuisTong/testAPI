<template>
  <div class="item">
    <div class="img"  v-bind:style="{ backgroundImage: `url(${item.image_urls.medium || item.image_urls.large})` }"></div>
    <div class="card">
      <div class="artist">{{ item.user.name || '' }}</div>
      <div class="content">{{ item.title || '' }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="scss" scoped>
.item {
  width: 33%;
  height: 33vh;
  background-color: #fff;
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
    padding-top: 10%;
    color: red;
    .artist, .content {
      width: 100%;
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
