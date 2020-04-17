<template>
  <div id="app">
    <input type="button" value="点击弹窗" @click="openConfirm" /> 
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    openConfirm() {
      this.$crazyConfirm.open({
        title: 'Title',
        content: 'Content',
        cancel() {
          alert('cancel');
        },
        confirm() {
          alert('confirm');
        }
      })
    }
  },
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
</style>
