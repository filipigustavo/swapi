<template>
  <b-card-body class="position-relative">
    <b-card-title>
      {{ people.name }}
      <small>{{ people.gender }}</small>
    </b-card-title>
    <b-card-sub-title>
      appears in {{ people.films.length }} movies
    </b-card-sub-title>

    <router-link :to="link" v-slot="{ href, route, navigate, isActive, isExactActive }">
      <b-link :href="href" class="stretched-link" @click="setCurrent">{{ people.name }} details</b-link>
    </router-link>
  </b-card-body>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    people: {
      type: Object,
      required: true
    }
  },
  computed: {
    link () {
      const id = this.people.url.split('/').slice(-2)
      return `/people/${id[0]}`
    }
  },
  methods: {
    ...mapActions('people', ['save']),
    setCurrent () {
      this.save(['current', this.people])
    }
  }
}
</script>