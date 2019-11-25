<template>
  <b-card bg-variant="primary" class="shadow-sm">
    <b-form @submit.prevent="doSearch">
      <b-row>
        <b-col cols="12" sm>
          <label class="sr-only">Name</label>
          <b-input v-model="name" size="lg" placeholder="All characters" />
        </b-col>
        <b-col cols="12" sm="auto">
          <b-button :disabled="listing" variant="primary" size="lg" class="border-white w-100 mt-3 mt-sm-0" type="submit">Search</b-button>
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
      name: '',
      genders: [
        { text: 'Gender', value: null },
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
        { text: 'N/A', value: 'n/a' }
      ]
    }
  },
  computed: {
    ...mapState('people', ['listing']),
    birth: {
      get () {
        return this.$store.state.filter.birth
      },
      set (v) {
        this.save(['birth', v])
      }
    },
    gender: {
      get () {
        return this.$store.state.filter.gender
      },
      set (v) {
        this.save(['gender', v])
      }
    }
  },
  methods: {
    ...mapActions('filter', ['save']),
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