<template>
  <Layout>
    <Search />
    <FilterBy />
    <PeopleList />
  </Layout>
</template>

<script>
import Search from "@/components/Search";
import FilterBy from "@/components/FilterBy";
import PeopleList from "@/components/PeopleList";

export default {
  components: {
    Search,
    FilterBy,
    PeopleList
  }
};
</script>
