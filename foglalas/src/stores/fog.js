import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useToast } from 'vue-toastification'

export const useIdoStore = defineStore('ido', () => {
  const ido = ref([])

  const loadAll = () => {
    fetch("http://localhost:3000/idopontok")
      .then(resp => resp.json())
      .then(data => ido.value = data)
  }

  return { loadAll  }
})
