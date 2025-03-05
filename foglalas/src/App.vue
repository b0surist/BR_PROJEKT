<script setup>
import { onMounted } from 'vue' 
import { RouterLink, RouterView } from 'vue-router'
import { useIdoStore } from '@/stores/fog.js'

const IdoStore = useIdoStore()

onMounted(() => {
    IdoStore.LoadALL()
})
</script>

<template>
  <nav>
    <RouterLink to="/">Idopont</RouterLink>
    <RouterLink to="/adatok">Adatok</RouterLink>
  </nav>
  <RouterView />
</template>

