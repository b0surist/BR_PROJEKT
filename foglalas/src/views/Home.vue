<script >
import { useRouter } from 'vue-router';

export default {
  name: 'Home',
  setup() {
    const router = useRouter();
    const navigateToBooking = (service) => {
      router.push({ name: 'booking', params: { service } });
    };
    return { navigateToBooking };
  }
};
</script>

<template>
   <div>
    <h1>Válassz egy szolgáltatást</h1>
    <ul>
      <li @click="navigateToBooking('pszichológus')">Pszichológus</li>
    </ul>
  </div>
</template>

<style>
</style>
