<template>
  <el-container>
    <el-aside width="100px">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
    </el-aside>
    <el-main>
      <div class="container">
        <div class="img" />
        <div class="content">
          {{ xxxx }}
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'production'
}
</script>

<style lang="scss" scoped>
.el-container {
  .el-aside {
    min-height: 400px;
    width: 100px;
    .item {

    }
  }
  .el-main {
    .container {

    }
  }
}
</style>

