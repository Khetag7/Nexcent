import { ref } from 'vue'
import { defineStore } from 'pinia'

import ArrowRight from '@/assets/images/ArrowRight.svg'

export const usebtnCompStore = defineStore('btnCompStore', () => {
  const items = ref(
  [
      {
          name: 'Register',
          id: 0,
          path: '/#'
      },
      {
          name: 'Learn More',
          id: 1,
          path: '/#'
      },
      {
          name: 'Learn More',
          id: 2,
          path: '/#'
      },
      {
          name: 'Get a Demo',
          id: 3,
          path: '/#',
          icon: ArrowRight
          
      },

  ])
  return {
    items
  }
})
