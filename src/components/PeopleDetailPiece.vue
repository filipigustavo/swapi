<template>
  <div>
    <dl class="row">
      <dt class="col-auto text-capitalize">{{ label|label }}</dt>
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