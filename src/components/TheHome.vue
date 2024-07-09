<script setup>

import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import AmiiboCard from "@/components/AmiiboCard.vue";
import {useAmiiboStore} from "@/stores/amiibo";
import {useRouter} from "vue-router";
import {onBeforeMount} from "vue";
import {storeToRefs} from "pinia";

const router = useRouter()
const amiiboStore = useAmiiboStore();
const {fetchThreeAmiibo} = amiiboStore;
const {threeAmiibo} = storeToRefs(amiiboStore)

onBeforeMount(async () => {
  await fetchThreeAmiibo()
})
</script>

<template>
  <div id="page-wrapper">
    <the-header title="AmiiVue"></the-header>
    <!-- Intro -->
    <!-- ici vous pouvez choisir 3 amiibos au hasard ou juste vos trois préférés -->
    <section id="intro" class="container">
      <div class="row">
        <amiibo-card v-for="amiibo in threeAmiibo"
                     :key="amiibo.tail"
                     :character="amiibo.amiibo[0]">
        </amiibo-card>
      </div>
      <footer>
        <ul class="actions">
          <li><router-link to="/list" class="button large">Liste complète</router-link></li>
        </ul>
      </footer>
    </section>
    <the-footer></the-footer>
  </div>
</template>

<style scoped>

</style>