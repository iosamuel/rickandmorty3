<template>
  <h1>Characters</h1>

  <ul class="data-list">
    <li v-for="character in characters" :key="character.id">
      <img :src="character.image" />
      {{ character.name }}
    </li>
  </ul>
</template>

<script>
import { useQuery } from "../composables/useQuery";

export default {
  setup() {
    const { results } = useQuery(/* GraphQL */ `
      query($page: Int) {
        data: characters(page: $page) {
          info {
            count
            pages
            next
            prev
          }
          results {
            id
            name
            image
          }
        }
      }
    `);

    return {
      characters: results,
    };
  },
};
</script>

<style>
</style>