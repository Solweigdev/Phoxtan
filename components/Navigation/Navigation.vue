<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <UContainer as="nav" class="flex flex-row-reverse py-5">
    <ClientOnly>
      <UButton
          :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
          color="gray"
          variant="ghost"
          aria-label="Theme"
          @click="isDark = !isDark"
      />
      <template #fallback>
        <div class="w-8 h-8" />
      </template>
    </ClientOnly>
  </UContainer>
</template>

<style scoped>

</style>