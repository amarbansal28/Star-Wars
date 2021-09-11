<template>
  <div>
    <h1>People - Know Them</h1>
    <div class="panel">
      <div class="card" v-for="people in peopleData" :key="people.name">
        <img src="../assets/avatar.png" alt="Avatar" />
        <div class="container">
          <div style="margin-top: 5px">
            <strong>{{ people.name }}</strong>
          </div>
          <div>Height: {{ people.height }} cms</div>
          <div>Weight: {{ people.mass }} lbs</div>
          <div>Eye Color: {{ people.eye_color }}</div>
          <div>Skin Color: {{ people.skin_color }}</div>
          <div>Hair Color: {{ people.hair_color }}</div>
          <div>Gender: {{ people.gender }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "People",
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
      const response = await fetch("https://swapi.dev/api/people/");
      const data = await response.json();
      this.peopleData = data.results;
    },
  },
};
</script>
