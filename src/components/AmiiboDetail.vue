<script setup>
import {onBeforeMount } from "vue";
import {useRouter, useRoute} from "vue-router";
import {storeToRefs} from "pinia";
import {useAmiiboStore} from "@/stores/amiibo";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

const route = useRoute()
const {fetchOneAmiibo} = useAmiiboStore()
const {currentAmiibo} = storeToRefs(useAmiiboStore())

onBeforeMount(async () => {
  const {params:{amiiboId}} = route
  await fetchOneAmiibo(amiiboId)
})
</script>

<template>
  <div id="page-wrapper">
    <the-header title="Détail"></the-header>
    <section id="main">
      <div class="container">
        <div class="row">
          <div class="col-4 col-12-medium">

            <!-- Sidebar -->
            <section class="box">
              <header>
                <h3>Infos</h3>
              </header>
              <p> amiiboSeries: <b>{{ currentAmiibo.amiibo[0].amiiboSeries }}</b> <br />
                character: {{ currentAmiibo.amiibo[0].character }}<br />
                gameSeries: {{ currentAmiibo.amiibo[0].gameSeries }}<br />
                type: {{ currentAmiibo.amiibo[0].type }}
              </p>

            </section>
            <section class="box">
              <header>
                <h3>Dates sorties</h3>
              </header>

              <ul class="divided">
                <li v-for="(date, region) in currentAmiibo.amiibo[0].release" :key="region">
                  {{ region }}: {{ date }}</li>
              </ul>

            </section>

          </div>
          <div class="col-8 col-12-medium imp-medium">

            <!-- Content -->
            <article class="box post">
              <a href="#" class="featured"><img :src="currentAmiibo.amiibo[0].image" alt="" /></a>
              <header>
                <h2>{{ currentAmiibo.amiibo[0].character }}</h2>
                <p>{{ currentAmiibo.amiibo[0].type }}</p>
              </header>
            </article>

          </div>
        </div>
      </div>
    </section>
    <the-footer></the-footer>
  </div>
</template>

<style scoped>

</style>