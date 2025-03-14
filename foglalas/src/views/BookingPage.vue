<template>
    <div class="booking-container">
      <h2>Foglalás megerősítése</h2>
      <p>Választott időpont: <strong>{{ day }} - {{ hour }}</strong></p>
  
      <form @submit.prevent="submitBooking">
        <label for="name">Név:</label>
        <input v-model="name" id="name" type="text" required />
  
        <label for="phone">Telefonszám:</label>
        <input v-model="phone" id="phone" type="text" required />
  
        <button type="submit" :disabled="!name || !phone">Foglalás</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  import { useToast } from 'vue-toastification';
  
  export default {
    name: 'BookingPage',
    props: ['day', 'hour'],
    setup(props) {
      const router = useRouter();
      const toast = useToast();
      const name = ref('');
      const phone = ref('');
  
      const submitBooking = async () => {
        await axios.post('http://localhost:3000/idopontok', {
          day: props.day,
          hour: props.hour,
          booked: true,
          name: name.value,
          phone: phone.value
        });
  
        toast.success('Foglalás sikeres!');
        router.push('/booking/:service');
      };
  
      return {
        name,
        phone,
        submitBooking
      };
    }
  };
  </script>
  
  <style scoped>
  .booking-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    background: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  
  .booking-container h2 {
    text-align: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  form label {
    margin-top: 10px;
  }
  
  form input {
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  form button {
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
  
  form button:disabled {
    background-color: #ccc;
  }
  </style>
  