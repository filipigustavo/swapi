<template>
  <div>
    <h2 class="text-capitalize d-block">{{ label|label }}</h2>
    <div class="d-flex justify-content-between custom-size scrollbar-none mx-auto">
      <PeopleDetailSimple v-for="(url, index) in arr" :key="index" :url="url" class="card-size" />
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
.custom-size {
  max-width: 1700px;
  width: auto;
  display: -webkit-box!important;
  display: flex!important;
  flex-wrap: nowrap!important;
  overflow: auto!important;
}
.card-size {
  min-width: 500px;
  max-width: 500px;
  &:not(:first-child):not(:last-child) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  &:first-child {
    margin-right: 1rem;
  }
  &:last-child {
    margin-left: 1rem;
  }
}
</style>