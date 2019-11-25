<template>
  <div>
    <h2 class="text-capitalize d-block">{{ label|label }}</h2>
    <div class="d-flex justify-content-between flex-wrap">
      <PeopleDetailSimple v-for="(url, index) in arr" :key="index" :url="url" :class="[label]" class="card-size mb-4" />
    </div>
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

<style lang="scss" scoped>
.card-size {
  min-width: calc(50% - 15px);
  max-width: calc(50% - 15px);
  &:nth-child(even) {
    margin-left: 15px;
  }
  &:nth-child(odd) {
    margin-right: 15px;
  }
  @media(max-width: 767px) {
    min-width: 100%;
    max-width: 100%;
    &:nth-child(even) {
      margin-left: 0;
    }
    &:nth-child(odd) {
      margin-right: 0;
    }
  }
}
</style>