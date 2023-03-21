<template>
  <div id="app">
    <header class="header">
      <NavBar />
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
name: 'app',
components: { NavBar }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --black-M: #303030;
  --black-S: #444;
  --black-L: #222;
  --grey: #ddd;
  --font-color: #fff;
  --white: #cecaca;
  --radios-default: 16px 0 16px 0;
  --radios-second: 0 16px 0 16px;
  --shadow: 0 2px 6px rgba(0, 0, 0, 1);
  --shadow-2: 0 2px 6px rgba(255, 244, 244, 0.464);

}

body {
  font-family: 'montserrat', sans-serif;
  background-color: #ccc;
}
.header {
  margin:  0 auto 10px auto;
  background-color: var(--black-L);
  padding: 15px;
  box-shadow: var(--shadow);
  
}
</style>