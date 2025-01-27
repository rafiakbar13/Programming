<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
  <Header>
    <template v-slot:header>
      <h1 class="green">ini header</h1>
    </template>
  </Header>

  <Footer>
    <template v-slot:footer>
      <h1 class="green">ini Footer</h1>
    </template>
  </Footer>
</template>
