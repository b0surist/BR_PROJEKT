<script >
import { ref } from 'vue';
import axios from 'axios';

export default {
  name: 'BookingTable',
  setup() {

    const days = ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek'];
    const hours = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];
    const bookedTimes = ref([]);
    const selectedTime = ref(null);
    const name = ref('');
    const phone = ref('');

    const fetchBookedTimes = async () => {
      const response = await axios.get('http://localhost:5000/appointments?booked=true');
      bookedTimes.value = response.data;
    };

    const isBooked = (day, hour) => {
      return bookedTimes.value.some(
        (appointment) => appointment.day === day && appointment.hour === hour
      );
    };


    const selectTime = (day, hour) => {
      selectedTime.value = { day, hour };
    };

  
    const submitBooking = async () => {
      if (selectedTime.value && name.value && phone.value) {
        await axios.post('http://localhost:5000/appointments', {
          day: selectedTime.value.day,
          hour: selectedTime.value.hour,
          booked: true,
          name: name.value,
          phone: phone.value
        });

        fetchBookedTimes(); 
      }
    };


    fetchBookedTimes();

    return {
      days,
      hours,
      bookedTimes,
      selectedTime,
      name,
      phone,
      isBooked,
      selectTime,
      submitBooking
    };
  }
};
</script>

<template>
    <div>
    <h1>Időpontfoglalás</h1>
    <table class="booking-table">
      <thead>
        <tr>
          <th></th>
          <th>8:00</th>
          <th>9:00</th>
          <th>10:00</th>
          <th>11:00</th>
          <th>12:00</th>
          <th>13:00</th>
          <th>14:00</th>
          <th>15:00</th>
          <th>16:00</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(day, index) in days" :key="index">
          <td>{{ day }}</td>
          <td v-for="(hour, hourIndex) in hours" :key="hourIndex">
            <button
              :disabled="isBooked(day, hour)"
              @click="selectTime(day, hour)"
            >
              {{ hour }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="selectedTime">
      <h3>Foglalás: {{ selectedTime.day }} - {{ selectedTime.hour }}</h3>
      <form @submit.prevent="submitBooking">
        <label for="name">Név:</label>
        <input v-model="name" id="name" type="text" required />

        <label for="phone">Telefonszám:</label>
        <input v-model="phone" id="phone" type="text" required />

        <button type="submit" :disabled="!name || !phone">Foglalás</button>
      </form>
    </div>
  </div>
</template>

<style>

</style>