<script setup>
import { useIdoStore } from '@/stores/fog.js'

const pont = useIdoStore()
</script>

<template>
    <h1>Időpont foglalás</h1>
    <p>Időpontok:</p>
    <div v-for="p in pont.ido" :key="p.ido">
        <p>Nap: {{ p.Nap }}</p>
        <p>Ido: {{ p.Ido }}</p>
    </div>
    <RouterLink to="/adatok">Foglalás</RouterLink>
</template>

<style>
</style>
