<template>
  <div class="service-page">
    <header class="page-header">
      <h1>Наши услуги</h1>
      <p>Мы предлагаем широкий спектр профессиональных услуг</p>
      <router-link to="/"> Вернуться обратно</router-link>
    </header>

    <div class="services-grid">
      <div 
        v-for="service in services" 
        :key="service.id" 
        class="service-card"
      >
        <div class="service-icon">
          <span>{{ service.icon }}</span>
        </div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
        <button 
          class="service-btn"
          @click="selectService(service)"
        >
          Подробнее
        </button>
      </div>
    </div>

    <div v-if="selectedService" class="selected-service">
      <h2>Вы выбрали: {{ selectedService.title }}</h2>
      <p>{{ selectedService.fullDescription }}</p>
      <button @click="selectedService = null" class="close-btn">
        Закрыть
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Service {
  id: number
  icon: string
  title: string
  description: string
  fullDescription: string
}

const services = ref<Service[]>([
  {
    id: 1,
    icon: '💻',
    title: 'Веб-разработка',
    description: 'Создание современных веб-приложений',
    fullDescription: 'Полный цикл разработки веб-приложений с использованием современных технологий и фреймворков.'
  },
  {
    id: 2,
    icon: '📱',
    title: 'Мобильные приложения',
    description: 'Разработка приложений для iOS и Android',
    fullDescription: 'Создание нативных и кроссплатформенных мобильных приложений.'
  },
  {
    id: 3,
    icon: '🎨',
    title: 'UI/UX Дизайн',
    description: 'Создание интуитивных интерфейсов',
    fullDescription: 'Проектирование пользовательских интерфейсов с учетом UX лучших практик.'
  },
  {
    id: 4,
    icon: '☁️',
    title: 'Облачные решения',
    description: 'Развертывание и поддержка облачной инфраструктуры',
    fullDescription: 'Миграция в облако, настройка и оптимизация облачных сервисов.'
  }
])

const selectedService = ref<Service | null>(null)

const selectService = (service: Service) => {
  selectedService.value = service
}
</script>

<style scoped lang="scss">
.service-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    color: #2c3e50;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: #7f8c8d;
    font-size: 1.2rem;
  }
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.service-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  }

  .service-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: #7f8c8d;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
}

.service-btn {
  background: #42c248;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background: #3fac51;
  }
}

.selected-service {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 2rem;
  border-left: 4px solid #3498db;

  h2 {
    color: #2c3e50;
    margin-bottom: 1rem;
  }

  p {
    color: #7f8c8d;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
}

.close-btn {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #c0392b;
  }
}

@media (max-width: 768px) {
  .service-page {
    padding: 1rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>