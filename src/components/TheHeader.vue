<script setup>
import {defineProps} from "vue";

const props = defineProps({
  title: String
})
</script>

<template>
  <!-- Header -->
  <section id="header">

    <!-- Logo -->
    <h1>{{ title }}</h1>

    <!-- Nav -->
    <nav id="nav">
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/list">Liste Amiibo</RouterLink></li>
      </ul>
    </nav>
    <!-- Banner -->
    <section v-if="title === 'AmiiVue'" id="banner">
      <header>
        <h2>Hey.Bienvenue sur ma collection</h2>
      </header>
    </section>
  </section>
</template>

<style scoped>
.router-link-active {
    background: #d52349;
    color: #fff !important;
    font-weight: 700;
}
</style>