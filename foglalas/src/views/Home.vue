<script >
import { useIdoStore } from '@/stores/fog.js'
import { onMounted } from 'vue'
export default{
    setup(){
        const pont = useIdoStore()
        onMounted(pont.loadAll())
        return {availableTime: pont.availableTime}
    }
}

</script>

<template>
    <div class="container">
        <h1>Időpont foglalas</h1>
        <ul>
            <li v-for="time in availableTime" :key="time">
                {{ time }}
            </li>
        </ul>
    </div>
    <RouterLink to="/adatok">Foglalás</RouterLink>
</template>

<style>
</style>
