import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useHeaderStore = defineStore('HeaderStore', () => {
  const items = ref(
  [
      {
          name: 'Home',
          id: 0,
          path: '/'
      },
      {
          name: 'Service',
          id: 1,
          path: '/service'
      },
      {
          name: 'Feature',
          id: 2,
          path: '/#feature'
      },
      {
          name: 'Product',
          id: 3,
          path: '/#product'
      },
      {
          name: 'Testimonial',
          id: 4,
          path: '/#testimonial'
      },
      {
          name: 'FAQ',
          id: 5,
          path: '/#faq'
      },

  ])
  return {
    items
  }
})
