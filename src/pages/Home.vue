<template>
  <Layout>
    <Search />
    <PeopleList />
  </Layout>
</template>

<script>
import Search from "@/components/Search";
import PeopleList from "@/components/PeopleList";

export default {
  components: {
    Search,
    PeopleList
  }
};
</script>
