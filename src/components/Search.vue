<template>
  <b-card>
    <b-form @submit.prevent="doSearch">
      <b-row>
        <b-col>
          <label class="sr-only">Name</label>
          <b-input v-model="name" placeholder="All characters" />
        </b-col>
        <b-col>
          <b-spinner v-if="listing" />
          <b-button v-else type="submit">Search</b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      name: ''
    }
  },
  computed: {
    ...mapState('people', ['listing'])
  },
  methods: {
    ...mapActions('people', ['load']),
    ...mapMutations('people', ['reset']),
    doSearch () {
      this.reset()
      this.load(this.getParams())
    },
    getParams () {
      const params = {}

      if (this.name.length > 0) {
        params.search = this.name
      }

      return params
    }
  }
}
</script>