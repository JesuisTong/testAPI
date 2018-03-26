<template>
  <div class="pixiv">
    <imgItem v-for="item in imgs" :item="item" :key="item.id" />
  </div>
</template>

<script>
import imgItem from "../modules/imgItem";

export default {
  name: 'pixivImgs',
  components: {
    imgItem
  },
  created: function () {
    $.ajax({
      url: '//47.91.209.93:3001/api/rank/day',
      type: 'GET',
      data: {
        date: null,
        page: 2
      }
    }).done(res => {
      this.imgs = res.illusts;
    });
  },
  data: function () {
    return {
      imgs: [],
    };
  }
}
</script>

<style lang="scss" scoped>
.pixiv {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>


