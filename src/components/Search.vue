<template>
  <b-card>
    <b-form @submit.prevent="doSearch">
      <b-row>
        <b-col>
          <label class="sr-only">Name</label>
          <b-input v-model="name" placeholder="All characters" />
        </b-col>
        <b-col>
          <b-button type="submit">Search</b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    async doSearch() {
      // let { data } = await this.$http.get('/people')
      // this.store
    }
  }
}
</script>