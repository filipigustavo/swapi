<template>
  <b-list-group-item class="position-relative">
    <b-card-title class="d-inline">
      {{ people.name }}
      <small>{{ people.gender }}</small>
    </b-card-title>
    <b-card-sub-title class="d-inline">
      appears in {{ people.films.length }} movies
    </b-card-sub-title>

    <router-link :to="link" v-slot="{ href, route, navigate, isActive, isExactActive }" class="d-inline ml-3">
      <b-link :href="href" class="stretched-link" @click="setCurrent">see details</b-link>
    </router-link>
  </b-list-group-item>
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