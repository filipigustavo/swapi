<template>
  <b-card no-body class="mt-5">
    <b-card-body v-if="filtered.length === 0">
      <b-card-title class="m-0">No results...</b-card-title>
    </b-card-body>

    <PeopleListItem v-for="people in filtered" :key="people.url" :people="people" />

    <b-card-body v-if="count > filtered.length && !listing">
      <b-button variant="primary" class="d-block w-100" @click="load">Load more</b-button>
    </b-card-body>

    <b-card-body v-if="listing && filtered.length > 0" class="text-center">
      <b-spinner />
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
    ...mapGetters('people', ['filtered']),
    ...mapState('people', ['count', 'listing'])
  },
  methods: {
    ...mapActions('people', ['load'])
  }
}
</script>