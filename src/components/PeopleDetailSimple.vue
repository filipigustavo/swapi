<template>
  <div>
    <h2 v-if="label" class="text-capitalize">{{ label|label }}</h2>
    <template v-for="(v,k,i) in dat">
      <template v-if="!escapeFields.includes(k)">
        <dl :key="i+k" class="row">
          <dt class="col-auto text-capitalize">{{ k|label }}</dt>
          <dd class="col">{{ v }}</dd>
        </dl>
      </template>
    </template>
    <div v-if="loading" class="d-block w-100 text-center">
      <b-spinner />
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: null
    },
    url: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      dat: null,
      escapeFields: ["created", "edited", "url", "residents", "films", "characters", "planets", "starships", "vehicles", "species", "people", "pilots"],
      loading: false
    }
  },
  created () {
    this.load()
  },
  methods: {
    async load () {
      try {
        this.loading = true
        const url = this.url.replace('https://swapi.co/api/', '')
        const { data } = await this.$http.get(url)
        this.dat = data
        this.loading = false
      } catch (e) {
        this.loading = false
      }
    }
  }
}
</script>
