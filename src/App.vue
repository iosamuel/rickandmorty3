<template>
  <div id="nav">
    <router-link to="/episodes">Episodes</router-link> |
    <router-link to="/locations">Locations</router-link> |
    <router-link to="/characters">Characters</router-link>
  </div>
  <router-view />
  <hr />
  <nav>
    <router-link :to="prevComp">Prev</router-link>
    <router-link :to="nextComp">Next</router-link>
  </nav>
</template>

<script setup>
const { ref, provide, computed } = require("vue");
const { useRoute } = require("vue-router");

export const info = ref({
  count: 0,
  pages: 0,
  next: 0,
  prev: 0,
});

provide("info", info);

export const route = useRoute();

export const prevComp = computed(() => ({
  name: route.name,
  params: { page: info.value.prev || route.params.page },
}));

export const nextComp = computed(() => ({
  name: route.name,
  params: { page: info.value.next || route.params.page },
}));
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
