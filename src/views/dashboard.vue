<template>
  <div>
    <h1>dashboard</h1>
    <el-button
      @click="
        () => {
          this.$router.push({ name: 'ConsoleChild1' });
        }
      "
      >控制台</el-button
    >
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>    