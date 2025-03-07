<script setup>
import { useIdoStore } from '@/stores/fog.js'

export default{
    props: ['time'],
    setup(props){
        const store = useIdoStore();
        
    }
}

</script>

<template>
    <div class="container">
        <h1>Foglalás: {{  time }}</h1>
        <form @submit.prevent="submitBooking">
            <input v-model="name" placeholder="név", required>
            <input v-model="phone" placeholder="telefonszám", required>
            <button type="submit">Foglalás</button>
        </form>
    </div>
</template>

<style>

</style>