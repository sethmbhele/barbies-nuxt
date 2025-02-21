<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
if (process.client) {
  document.body.classList.add('has-booking', 'has-additional-menu-content')
}
</script>
