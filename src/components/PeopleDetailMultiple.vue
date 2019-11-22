<template>
  <div>
    <h2 class="text-capitalize">{{ label|label }}</h2>
    <PeopleDetailSimple v-for="(url, index) in arr" :key="index" :url="url" />
  </div>
</template>

<script>
import PeopleDetailSimple from '@/components/PeopleDetailSimple'

export default {
  components: {
    PeopleDetailSimple
  },
  props: {
    label: {
      type: String,
      required: true
    },
    arr: {
      type: Array,
      required: true
    }
  }
}
</script>
