<template>
  <h1>Locations</h1>

  <ul class="data-list">
    <li v-for="location in locations" :key="location.id">
      {{ location.name }}
    </li>
  </ul>
</template>

<script>
import { useQuery } from "../composables/useQuery";

export default {
  setup() {
    const { results } = useQuery(/* GraphQL */ `
      query($page: Int) {
        data: locations(page: $page) {
          info {
            count
            pages
            next
            prev
          }
          results {
            id
            name
            type
            dimension
            created
          }
        }
      }
    `);

    return {
      locations: results,
    };
  },
};
</script>

<style>
</style>