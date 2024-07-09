<script setup>

import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import { ref } from "vue";
import { useAmiiboStore } from "@/stores/amiibo";
import {computed, onBeforeMount} from "vue";
import { storeToRefs } from "pinia";

const amiiboStore = useAmiiboStore();
const { fetchAllAmiibo } = amiiboStore;
const currentPage = ref(1);
const { allAmiibo } = storeToRefs(amiiboStore);

onBeforeMount(async () => {
  await fetchAllAmiibo();
});

const paginatedAmiibo = computed(() => {
  const start = (currentPage.value - 1) * 10;
  const end = start + 10;
  return allAmiibo.value.slice(start, end);
})

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const totalPages = computed(() => {
  return Math.ceil(allAmiibo.value.length / 10);
});
</script>

<template>
  <div id="page-wrapper">
    <the-header title="Liste"></the-header>

    <!-- Main -->
    <section id="main">
      <div class="container">

        <!-- Content -->
        <article class="box post">

          <header>
            <h2>Ma Collection (10 par 10)</h2>
            <p>Page {{ currentPage }}/{{ totalPages }} </p>
          </header>
          <p>
            <table>
              <tr>
                <th>Character</th>
                <th>game Series</th>
                <th>Action</th>
              </tr>
              <tr v-for="amiibo in paginatedAmiibo"
                  :key="amiibo.tail">
                <td>{{ amiibo.character }}</td>
                <td>{{ amiibo.gameSeries}}</td>
                <td><router-link :to="`detail/${amiibo.tail}`">voir</router-link></td>
              </tr>
            </table>
          </p>
          <button @click="prevPage" :disabled="currentPage === 1">Précédent</button>
          <button @click="nextPage" :disabled="currentPage === totalPages">Suivant</button>
        </article>

      </div>
    </section>

    <the-footer></the-footer>
  </div>
</template>

<style scoped>

</style>