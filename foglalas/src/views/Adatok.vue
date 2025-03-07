<script >
import { useIdoStore } from '@/stores/fog.js'
import { useToast } from 'vue-toastification'

export default{    
    props: ['time'],
    setup(props) {
    const store = useIdoStore();
    const toast = useToast();
    const name = ref('');
    const phone = ref('');
    
    const submitBooking = async () => {
      await store.foglalas(name.value, phone.value, props.time);
      toast.success('Foglalás sikeres!');
    };

    return { name, phone, submitBooking };
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