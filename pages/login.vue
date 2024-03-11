<script setup lang="ts">
definePageMeta({ middleware: ["guest"] });
</script>

<template>
  <nav class="container">
    <Logo />
  </nav>

  <main class="container">
    <h3 class="title">Se connecter</h3>
    <LoginForms />
  </main>
</template>

<style scoped lang="scss">


.title {
  text-align: center
}
</style>
