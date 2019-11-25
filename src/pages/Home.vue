<template>
  <Layout>
    <Search />
    <FilterBy />
    <PeopleList />
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import Search from "@/components/Search";
import FilterBy from "@/components/FilterBy";
import PeopleList from "@/components/PeopleList";

export default {
  components: {
    Layout,
    Search,
    FilterBy,
    PeopleList
  }
};
</script>
