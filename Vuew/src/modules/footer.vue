<template>
  <div class="footer">
    <div class="content">
      <p class="tel">
        <i class="el-icon-phone" />
        联系电话：<a :href="`tel:${tel}`">{{ tel }}</a>
      </p>
      <div class="lawyer">法律信息：</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data: function () {
    return {
      tel: '057100001111'
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 160px;
  padding: 25px 15px;
  background-color: #333;
  box-sizing: border-box;
  .content {
    color: #fff;
    .tel {
      font-size: 24px;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
    .lawyer {
      float: right;
    }
  }
}
</style>
