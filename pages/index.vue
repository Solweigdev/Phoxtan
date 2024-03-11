<script lang="ts" setup>
// const { isLoggedIn } = useAuth();
</script>

<template>
  <main class="h-screen bg-slate-950 bg-[url('/assets/img/bg_w.jpg')] dark:bg-[url('/assets/img/bg_b.jpg')] bg-cover">
    <Navigation  />
    <div class="header flex items-center">
      <UContainer as="header" class="flex gap-64 align-center ">
        <div class="flex-1">
          <h1 class="text-5xl font-bold text-slate-950 dark:text-slate-100">Protégez-vous des Arnaques en ligne</h1>
          <p class="text-slate-400 dark:text-slate-400 mt-3">Démasquez les sites frauduleux: Signalez, vérifiez et naviguez en toute confiance sur internet.</p>
          <div class="mt-20 flex gap-7">
            <UButton label="Voir les sites 👀" size="xl" color="primary">
            </UButton>
            <UButton label="Comment ça marche ? 👇" size="xl" variant="ghost">
            </UButton>
          </div>
        </div>
        <div class="border border-slate-400 py-5 px-10 basis-5/12">
          <h2 class="text-center font-bold mb-8">Saisissez un site web pour vérifier sa fiabilité.</h2>
          <HomeForms />
        </div>
      </UContainer>
    </div>
  </main>
</template>

<style>
.header {
  height: calc(100% - 72px);
}
</style>