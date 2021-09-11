<template>
  <div>
    <h1>Home</h1>
    <img
      style="width: 100%; height: 400px"
      src="../assets/star-wars.jpeg"
      alt="Avatar"
    />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 10px;
  float: left;
  width: 30%;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.container {
  padding: 2px 16px;
}
.panel {
  display: inline-block;
  overflow: hidden;
}
img {
  float: left;
  height: 160px;
  width: 150px;
  margin-right: 20px;
}
</style>