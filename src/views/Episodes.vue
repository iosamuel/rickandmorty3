<template>
  <h1>Episodes</h1>

  <ul class="data-list">
    <li v-for="episode in episodes" :key="episode.id">
      {{ episode.name }}
    </li>
  </ul>
</template>

<script>
import { useQuery } from "../composables/useQuery";

export default {
  setup() {
    const { results } = useQuery(/* GraphQL */ `
      query($page: Int) {
        data: episodes(page: $page) {
          info {
            count
            pages
            next
            prev
          }
          results {
            id
            name
            air_date
            episode
            created
          }
        }
      }
    `);

    return {
      episodes: results,
    };
  },
};
</script>

<style>
</style>