<template>
  <b-card>
    <b-form @submit.prevent="doSearch">
      <b-row>
        <b-col>
          <label class="sr-only">Name</label>
          <b-input v-model="name" placeholder="All characters" />
        </b-col>
        <b-col cols="auto">
          <b-spinner v-if="listing" />
          <b-button v-else type="submit">Search</b-button>
        </b-col>
        <b-col>
          <label class="sr-only">Birth</label>
          <b-input v-model="birth" placeholder="Birth Date" />
        </b-col>
        <b-col>
          <label class="sr-only">Gender</label>
          <b-form-select v-model="gender" :options="genders" />
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
  created () {
    window.console.log('store',this.$store.state)
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