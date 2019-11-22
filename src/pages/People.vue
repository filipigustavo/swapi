<template>
  <Layout>
    <b-card>
      <template v-if="listing">
        <div class="d-block w-100 text-center">
          <b-spinner />
        </div>
      </template>

      <template v-else>
        <b-card-title>{{ current.name }} <small>{{ current.gender }}</small></b-card-title>
        <b-card-sub-title>appears in {{ current.films.length }} movies</b-card-sub-title>

        <hr>

        <template v-for="(v,k,i) in current">
          <template v-if="!escapeFields.includes(k)">
            <dl :key="i" class="row">
              <dt class="col-auto">{{ k }}</dt>
              <dd class="col">{{ v }}</dd>
            </dl>
          </template>
        </template>

        <hr>

        <router-link to="/">Back</router-link>
      </template>
    </b-card>
  </Layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      escapeFields: ["name", "gender", "created", "edited", "url"]
    };
  },
  computed: {
    ...mapState('people', ['current', 'listing'])
  },
  created () {
    if (!this.current) {
      this.loadCurrent(this.$route.params.id)
    }
  },
  methods: {
    ...mapActions('people', ['loadCurrent'])
  }
};
</script>
