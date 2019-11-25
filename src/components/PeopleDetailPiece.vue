<template>
  <div v-if="text !== 'n/a'">
    <dl class="row my-0">
      <dt :class="[label]" class="col-auto text-capitalize">{{ label|label }}</dt>
      <dd class="col">{{ text }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    text: {
      type: [String, Number],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.opening_crawl, .title {
  width: 100%;
}
</style>