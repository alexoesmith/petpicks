<script setup lang="ts">
const user = useSupabaseUser();
const cookieName = useRuntimeConfig().public.supabase.cookieName;
const redirectPath = useCookie(`${cookieName}-redirect-path`).value;

watch(
  user,
  () => {
    if (user.value) {
      useCookie(`${cookieName}-redirect-path`).value = null;
      return navigateTo(redirectPath || "/");
    } else {
      return navigateTo("/login");
    }
  },
  { immediate: true }
);
</script>

<template>
  <UContainer :ui="{ constrained: 'max-w-xl' }">
    <p class="text-xl font-semibold text-center">Redirecting...</p>
  </UContainer>
</template>
