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
            <td v-for="hour in hours" :key="hour">
              <button 
                :disabled="isBooked(day, hour)" 
                @click="navigateToBooking(day, hour)"
              >
                {{ hour }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'BookingTable',
    setup() {
      const router = useRouter();
      const days = ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek'];
      const hours = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];
      const bookedTimes = ref([]);
  
      const fetchBookedTimes = async () => {
        const response = await axios.get('http://localhost:3000/idopontok?booked=true');
        bookedTimes.value = response.data;
      };
  
      const isBooked = (day, hour) => {
        return bookedTimes.value.some(appointment => appointment.day === day && appointment.hour === hour);
      };
  
      const navigateToBooking = (day, hour) => {
        router.push(`/foglalas/${day}/${hour}`);
      };
  
      onMounted(fetchBookedTimes);
  
      return {
        days,
        hours,
        bookedTimes,
        isBooked,
        navigateToBooking
      };
    }
  };
  </script>
  
  <style scoped>
.booking-table {
  width: 100%;
  border-collapse: collapse;
}

.booking-table th,
.booking-table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
}

.booking-table button {
  padding: 10px;
  border: none;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
}

.booking-table button:disabled {
  background-color: #ccc;
}

@media (max-width: 768px) {
  .booking-table th,
  .booking-table td {
    padding: 8px;
  }

  .booking-table {
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .booking-table th,
  .booking-table td {
    display: block;
    text-align: left;
    width: 100%;
  }
}
</style>