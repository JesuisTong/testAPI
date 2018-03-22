<template>
  <div class="navigator">
    <div v-for="nav in navList" :key="nav">
      {{ nav.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigator',
  data() {
    console.log(this.props);
    return {
      ...this.props
    }
  },
}
</script>

<style lang="scss" scoped>

</style>


