<template>
  <b-card no-body>
    <PeopleListItem v-for="i in 10" :key="i" />
  </b-card>
</template>

<script>
import PeopleListItem from "@/components/PeopleListItem"

export default {
  components: {
    PeopleListItem
  }
}
</script>