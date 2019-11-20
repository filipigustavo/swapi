<template>
  <Layout>
    <b-card>
      <b-card-title>{{ char.name }} <small>{{ char.gender }}</small></b-card-title>
      <b-card-sub-title>appears in {{ char.films.length }} movies</b-card-sub-title>

      <hr>

      <template v-for="(v,k,i) in char">
        <template v-if="!escapeFields.includes(k)">
          <dl :key="i" class="row">
            <dt class="col-auto">{{ k }}</dt>
            <dd class="col">{{ v }}</dd>
          </dl>
        </template>
      </template>

      <router-link to="/">Back</router-link>
    </b-card>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      char: {
        name: "Chewbacca",
        height: "228",
        mass: "112",
        hair_color: "brown",
        skin_color: "unknown",
        eye_color: "blue",
        birth_year: "200BBY",
        gender: "male",
        homeworld: "https://swapi.co/api/planets/14/",
        films: [
          "https://swapi.co/api/films/2/",
          "https://swapi.co/api/films/6/",
          "https://swapi.co/api/films/3/",
          "https://swapi.co/api/films/1/",
          "https://swapi.co/api/films/7/"
        ],
        species: ["https://swapi.co/api/species/3/"],
        vehicles: ["https://swapi.co/api/vehicles/19/"],
        starships: [
          "https://swapi.co/api/starships/10/",
          "https://swapi.co/api/starships/22/"
        ],
        created: "2014-12-10T16:42:45.066000Z",
        edited: "2014-12-20T21:17:50.332000Z",
        url: "https://swapi.co/api/people/13/"
      },
      escapeFields: ["name", "gender", "created", "edited", "url"]
    };
  }
};
</script>
