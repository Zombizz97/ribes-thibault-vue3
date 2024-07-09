<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  character: Object,
})
</script>

<template>
  <div class="col-4 col-12-medium">
    <section class="middle">
      <img :src="character.image"  alt=""/>
      <header>
        <h2>{{ character.character }}</h2>
      </header>
      <p>{{ character.gameSeries }}</p>
    </section>
  </div>
</template>

<style scoped>

</style>