<template>
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/people">People</router-link>
    </li>
    <li>
      <router-link to="/films">Films</router-link>
    </li>
    <li>
      <router-link to="/species">Species</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  display: inline-block;
  padding: 1em 0.5em;
}
</style>