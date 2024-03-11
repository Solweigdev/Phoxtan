<script setup lang="ts">
type Props = {
  type: string
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="`alert alert-${props.type}`">
    <slot />
  </div>
</template>