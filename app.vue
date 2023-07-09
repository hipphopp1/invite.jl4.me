<template>
  <div id="app">
    <div class="background">
      <div class="box" @click="routeTo('page1')">
        <h2>Page 1</h2>
      </div>
      <div class="box" @click="routeTo('page2')">
        <h2>Page 2</h2>
      </div>
      <div class="box" @click="routeTo('page3')">
        <h2>Page 3</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    routeTo(page) {
      this.$router.push('/' + page)
    },
  },
}
</script>

<style>
#app {
  font-family: 'Helvetica', sans-serif;
}

.background {
  background: url('path-to-your-image.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.box {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
}

.box:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  transform: scale(1.1);
}

h2 {
  font-size: 2em;
  text-align: center;
}
</style>
