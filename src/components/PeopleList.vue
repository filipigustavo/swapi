<template>
  <b-card no-body class="mt-3 shadow-sm">
    <template v-if="totalLoaded > 0" v-slot:header>
      <p class="lead mb-0">{{ totalLoaded }} results {{ filters }} (showing {{ filtered.length }})</p>
    </template>

    <b-card-body v-if="filtered.length === 0 && !listing">
      <b-card-title class="m-0">No results...</b-card-title>
    </b-card-body>

    <b-list-group v-if="filtered.length > 0" flush>
      <PeopleListItem v-for="people in filtered" :key="people.url" :people="people" />
    </b-list-group>

    <b-card-body v-if="count > filtered.length && !listing">
      <b-button variant="outline-primary" class="d-block w-100" @click="load">Load more</b-button>
    </b-card-body>

    <b-card-body v-if="listing" class="text-center">
      <b-spinner type="grow" label="Loading..." variant="primary" />
    </b-card-body>
  </b-card>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import PeopleListItem from "@/components/PeopleListItem"

export default {
  components: {
    PeopleListItem
  },
  computed: {
    ...mapGetters('people', ['filtered', 'totalLoaded']),
    ...mapGetters('filter', ['gender', 'birth']),
    ...mapState('people', ['count', 'listing']),
    filters () {
      let string = ''
      let filters = []
      let filterString = ''
      if (this.gender || this.birth.length > 0) {
        string += 'filtered by '
      }

      if (this.gender) {
        filters.push(`gender ${this.gender}`)
      }

      if (this.birth.length > 0) {
        filters.push(`birth year ${this.birth}`)
      }

      filterString = filters.join(' and ')

      return `${string}${filterString}`
    }
  },
  methods: {
    ...mapActions('people', ['load'])
  }
}
</script>