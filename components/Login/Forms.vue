<script setup lang="ts">
const { login } = useAuth();

const router = useRouter();
const data = reactive({
  email: "",
  password: "",
})

const { submit, inProgress, validationErrors: errors } = useSubmit(
    () => {
      return login(data)
    },
    {
      onSuccess: () => router.push('/'),
      onError: () => console.log('Errorss', errors)
    }
)
</script>

<template>
  <form @submit.prevent="submit">
    <Alert v-if="Object.keys(errors).length !== 0" type="danger">{{ errors.email[0] }}</Alert>
    <fieldset>
      <label for="email">
        <input
            id="email"
            type="email"
            placeholder="Email"
            autocomplete="given-email"
            required
            autofocus
            v-model="data.email"
        >
      </label>
      <label for="password">
        <input
            id="password"
            type="password"
            placeholder="Mot de passe"
            autocomplete="current-password"
            required
            autofocus
            v-model="data.password"
        >
      </label>
    </fieldset>
    <input type="submit" value="Se connecter" :disabled="inProgress">
  </form>
</template>

<style scoped>

</style>