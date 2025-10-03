<template>
  <div class="about-page">
    <!-- Hero секция -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">О нашей компании</h1>
        <p class="hero-subtitle">Мы создаем инновационные решения с 2020 года</p>
      </div>
    </section>
    <router-link to="/" :style="{padding: '100px'}">Вернуться обратно</router-link>

    <!-- Основной контент -->
    <div class="container">
      <!-- О компании -->
      <section class="about-section">
        <div class="about-content">
          <div class="about-text">
            <h2>Наша история</h2>
            <p>
              Мы начали свой путь как небольшая команда энтузиастов, объединенных общей целью - 
              создавать качественные digital-продукты. За годы работы мы выросли в надежного партнера 
              для десятков компаний по всему миру.
            </p>
            <p>
              Наш подход сочетает в себе техническое мастерство, креативное мышление и глубокое 
              понимание потребностей бизнеса.
            </p>
          </div>
          <div class="about-image">
            <div class="image-placeholder">
              🚀
            </div>
          </div>
        </div>
      </section>

      <!-- Наши ценности -->
      <section class="values-section">
        <h2>Наши ценности</h2>
        <div class="values-grid">
          <div 
            v-for="value in values" 
            :key="value.id" 
            class="value-card"
          >
            <div class="value-icon">{{ value.icon }}</div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Value {
  id: number
  icon: string
  title: string
  description: string
}


const values = ref<Value[]>([
  {
    id: 1,
    icon: '🎯',
    title: 'Качество',
    description: 'Стремимся к совершенству в каждом проекте'
  },
  {
    id: 2,
    icon: '🤝',
    title: 'Партнерство',
    description: 'Выстраиваем долгосрочные отношения с клиентами'
  },
  {
    id: 3,
    icon: '💡',
    title: 'Инновации',
    description: 'Постоянно изучаем и внедряем новые технологии'
  },
  {
    id: 4,
    icon: '⚡',
    title: 'Эффективность',
    description: 'Оптимизируем процессы для достижения лучших результатов'
  }
])

</script>

<style scoped lang="scss">
.about-page {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.about-section {
  padding: 4rem 0;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text {
  h2 {
    color: #2c3e50;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  p {
    color: #7f8c8d;
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
}

.about-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 300px;
  height: 200px;
  background: #f8f9fa;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  border: 2px dashed #e9ecef;
}

.values-section {
  padding: 4rem 0;
  text-align: center;

  h2 {
    color: #2c3e50;
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.value-card {
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .value-icon {
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
    line-height: 1.6;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .container {
    padding: 0 1rem;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>