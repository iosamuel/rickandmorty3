import { request as fetchGQL } from "graphql-request";
import { ref, inject, watchEffect } from "vue";
import { useRoute } from "vue-router";

export function useQuery(query) {
  let results = ref([]);
  const info = inject("info");
  const route = useRoute();

  watchEffect(() => {
    fetchGQL("https://rickandmortyapi.com/graphql", query, {
      page: parseInt(route.params.page)
    }).then(({ data }) => {
      results.value = data.results;
      info.value = data.info;
    });
  });

  return {
    results
  };
}
