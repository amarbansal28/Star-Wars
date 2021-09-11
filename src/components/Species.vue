<template>
  <div>
    <h1>Species</h1>
    <div class="panel">
      <div class="card" v-for="species in speciesData" :key="species.name">
        <div class="container">
          <div style="margin-top: 5px">
            <strong>{{ species.name }}</strong>
          </div>
          <div>Classification: {{ species.classification }}</div>
          <div>Designation: {{ species.designation }}</div>
          <div>Average Height: {{ species.average_height }} cms</div>
          <div>Skin Color: {{ species.skin_colors }}</div>
          <div>Hair Color: {{ species.eye_colors }}</div>
          <div>Eye Color: {{ species.eye_colors }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Species",
  data() {
    return {
      speciesData: {},
    };
  },
  beforeMount() {
    this.getData();
  },
  methods: {
    async getData() {
      const response = await fetch("https://swapi.dev/api/species/");
      const data = await response.json();
      this.speciesData = data.results;
    },
  },
};
</script>