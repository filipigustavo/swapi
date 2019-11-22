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
          <template v-if="!escapeFields.includes(k) && v.length > 0">
            <PeopleDetailSimple v-if="k === 'homeworld'" :key="i+k" :label="k" :url="v" />
            <PeopleDetailMultiple v-else-if="['films', 'species', 'vehicles', 'starships'].includes(k)" :key="i+k" :label="k" :arr="v" />
            <dl v-else :key="i+k" class="row">
              <dt class="col-auto text-capitalize">{{ k|label }}</dt>
              <dd class="col">{{ v }}</dd>
            </dl>
          </template>
        </template>

        <router-link to="/">Back</router-link>
      </template>
    </b-card>
  </Layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PeopleDetailSimple from '@/components/PeopleDetailSimple'
import PeopleDetailMultiple from '@/components/PeopleDetailMultiple'

export default {
  components: {
    PeopleDetailSimple,
    PeopleDetailMultiple
  },
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
