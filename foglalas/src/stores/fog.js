import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios, { Axios } from 'axios'
import { useToast } from 'vue-toastification'

export const useIdoStore = defineStore('ido', () => {
  const ido = ref([])
  const availableTime = []
  const bookedTime = []
  const toast = useToast()
  const loadAll = () => {
  ('http://localhost:3000/idopontok')
      .then(resp => resp.json())
      .then(data => ido.value = data)
  }
  const Time = () => {
    const idok = []
    for(i = 8; i <= 16; i++){
      idok.push(`${i}:00`)
    }
    this.availableTime = idok.filter(t => !this.bookedTime.includes(t)) 
  }

  const Foglalas = () => {
    axios.post('https://localhost:3000/idopontok', {time, name, phone})
    this.bookedTime.push(time)
    this.Time()
    toast.success('A foglalás sikeres')
  }

  return { loadAll, Time, Foglalas }

})
