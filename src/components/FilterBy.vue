<template>
  <b-card bg-variant="secondary" class="shadow-sm mt-3">
    <b-row>
      <b-col cols="12" sm>
        <label class="sr-only">Birth</label>
        <b-input v-model="birth" size="sm" placeholder="Birth Date" />
      </b-col>
      <b-col cols="12" sm>
        <label class="sr-only">Gender</label>
        <b-form-select v-model="gender" :options="genders" size="sm" class="mt-3 mt-sm-0" />
      </b-col>
      <b-col cols="12" sm="auto">
        <b-button variant="secondary" size="sm" class="border-white w-100 mt-3 mt-sm-0" @click="reset">Reset</b-button>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      genders: [
        { text: 'Gender', value: null },
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
        { text: 'Hermaphrodite', value: 'hermaphrodite' },
        { text: 'N/A', value: 'n/a' }
      ]
    }
  },
  computed: {
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
    reset () {
      this.birth = '',
      this.gender = null
    }
  }
}
</script>