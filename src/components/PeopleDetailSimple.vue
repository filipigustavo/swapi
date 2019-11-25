<template>
  <b-card bg-variant="light" class="shadow-sm">
    <b-card-title v-if="label" class="text-capitalize">{{ label|label }}</b-card-title>
    <template v-for="(v,k,i) in dat">
      <template v-if="!escapeFields.includes(k)">
        <PeopleDetailPiece :key="i+k" :label="k" :text="v" />
      </template>
    </template>
    <div v-if="loading" class="d-block w-100 text-center">
      <b-spinner type="grow" label="Loading..." variant="secondary" />
    </div>
  </b-card>
</template>

<script>
import PeopleDetailPiece from '@/components/PeopleDetailPiece'

export default {
  components: {
    PeopleDetailPiece
  },
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
      escapeFields: ["created", "edited", "url", "residents", "films", "characters", "planets", "starships", "vehicles", "species", "people", "pilots", "homeworld"],
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
        const { data } = await this.$http.get(this.url)
        this.dat = data
        this.loading = false
      } catch (e) {
        this.loading = false
      }
    }
  }
}
</script>
