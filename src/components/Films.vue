<template>
  <div>
    <h1>Films</h1>
    <div class="panel">
      <div class="card" v-for="people in peopleData" :key="people.name">
        <div class="container">
          <div style="margin-top: 5px">
            <strong>{{ people.title }}</strong>
          </div>
          <div>Episode: {{ people.episode_id }}</div>
          <div>Director: {{ people.director }}</div>
          <div>Producer: {{ people.producer }}</div>
          <div>Release Date: {{ people.release_date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Films",
  data() {
    return {
      peopleData: {},
    };
  },
  beforeMount() {
    this.getData();
  },
  methods: {
    async getData() {
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();
      this.peopleData = data.results;
    },
  },
};
</script>