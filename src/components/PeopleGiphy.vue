<template>
  <div>
    <b-img v-if="image" :src="image" width="240" rounded fluid />
  </div>
</template>

<script>
export default {
  props: {
    query: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      image: null
    }
  },
  created () {
    this.getUrl()
  },
  methods: {
    async getUrl () {
      try {
        const params = {
          api_key: 'otwd2W9elaY0195lFod7kkdI8af0fZ01',
          q: this.query,
          limit: 1,
          rating: 'PG'
        }
        const image = await this.$http.get('https://api.giphy.com/v1/gifs/search', { params })
        this.image = image.data.data[0].images.original.url
      } catch (e) {
        alert('Algo deu errado ao carregar a imagem')
      }
    }
  }
}
</script>

<style scoped></style>
