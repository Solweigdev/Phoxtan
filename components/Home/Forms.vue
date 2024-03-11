<script setup lang="ts">
const { verify } = useWebsite();
const data = reactive({
  link: ""
})

const { submit, inProgress, succeeded, validationErrors: errors } = useSubmit(
    () => { return verify(data) },
    {
      onSuccess: () => console.log('Site WEB GOOO', succeeded),
      onError: () => console.log('Errors', errors)
    }
)
</script>

<template>
  <form @submit.prevent="submit">
    <fieldset>
        <UInput
            icon="i-heroicons-magnifying-glass-20-solid"
            size="lg"
            :trailing="false"
            color="primary"
            variant="outline"
            placeholder="https://..."
            type="text"
            :required="true"
            :autofocus="true"
            v-model="data.link"
        />
      <UButton type="submit" label="Verifier le site web" size="xl" class="mt-3" block :disabled="inProgress" />
      <UDivider label="OU" class="my-5" />
      <UButton type="button" variant="outline" label="Signaler un site web" size="xl" block />
    </fieldset>
  </form>
</template>

<style scoped>

</style>