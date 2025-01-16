<script setup lang="ts"></script>

<template>
  <header class="py-4 border-b border-gray-200 dark:border-gray-800">
    <UContainer class="flex justify-between items-center">
      <NuxtLink to="/">
        <AppLogo class="w-24" />
      </NuxtLink>
      <div>
        <UButton
          to="/login"
          size="xl"
          icon="i-heroicons-arrow-right-end-on-rectangle"
          label="Login"
          :trailing="true"
        />
      </div>
    </UContainer>
  </header>
</template>
