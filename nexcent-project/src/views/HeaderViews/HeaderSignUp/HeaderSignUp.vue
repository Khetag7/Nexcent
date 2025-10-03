<template>
  <div class="signup-page">
    <div class="signup-container">
      <div class="signup-left">
        <div class="decoration">
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
          <div class="circle circle-3"></div>
        </div>
        <div class="illustration">
          <span class="illustration-icon">🚀</span>
          <h3>Начните путешествие</h3>
          <p>Присоединяйтесь к нашему сообществу</p>
        </div>
      </div>
      
      <div class="signup-right">
        <div class="logo">
          <span class="logo-icon">🌿</span>
          <h1>YourBrand</h1>
        </div>
        <h2 class="welcome-text">Создайте аккаунт</h2>
        <p class="subtitle">Заполните информацию ниже</p>
        
        <form @submit.prevent="handleSignUp" class="signup-form">
          <div class="form-row">
            <div class="form-group">
              <label for="firstName">Имя</label>
              <input 
                type="text" 
                id="firstName"
                v-model="signupData.firstName"
                placeholder="Ваше имя"
                required
              >
            </div>
            <div class="form-group">
              <label for="lastName">Фамилия</label>
              <input 
                type="text" 
                id="lastName"
                v-model="signupData.lastName"
                placeholder="Ваша фамилия"
                required
              >
            </div>
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email"
              v-model="signupData.email"
              placeholder="your@email.com"
              required
            >
          </div>
          
          <div class="form-group">
            <label for="password">Пароль</label>
            <input 
              type="password" 
              id="password"
              v-model="signupData.password"
              placeholder="Создайте пароль"
              required
            >
          </div>
          
          <div class="form-group">
            <label for="confirmPassword">Подтвердите пароль</label>
            <input 
              type="password" 
              id="confirmPassword"
              v-model="signupData.confirmPassword"
              placeholder="Повторите пароль"
              required
            >
          </div>
          
          <label class="checkbox-label">
            <input type="checkbox" v-model="signupData.agreeTerms">
            <span class="checkmark"></span>
            Я согласен с <a href="#">условиями использования</a> и <a href="#">политикой конфиденциальности</a>
          </label>
          
          <button type="submit" class="signup-btn">Создать аккаунт</button>
        </form>
        
        <div class="divider">
          <span>или</span>
        </div>
        
        <div class="social-signup">
          <button class="social-btn google-btn">
            <span class="social-icon">🔍</span>
            Зарегистрироваться через Google
          </button>
          <button class="social-btn github-btn">
            <span class="social-icon">💻</span>
            Зарегистрироваться через GitHub
          </button>
        </div>
        
        <p class="login-link">
          Уже есть аккаунт? <router-link to="/login">Войти</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

interface SignUpData {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  agreeTerms: boolean
}

const signupData = ref<SignUpData>({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeTerms: false
})

const handleSignUp = () => {
  console.log('Signup data:', signupData.value)
  // Здесь будет логика регистрации
  router.push('/dashboard')
}
</script>

<style scoped lang="scss">
.signup-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fff8 0%, #ffffff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.signup-container {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(34, 139, 34, 0.1);
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  max-width: 1100px;
  width: 100%;
  overflow: hidden;
}

.signup-left {
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  
  .circle {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
  }
  
  .circle-1 {
    width: 120px;
    height: 120px;
    top: 15%;
    right: 15%;
  }
  
  .circle-2 {
    width: 80px;
    height: 80px;
    bottom: 25%;
    left: 10%;
  }
  
  .circle-3 {
    width: 150px;
    height: 150px;
    bottom: 10%;
    right: 20%;
  }
}

.illustration {
  text-align: center;
  color: white;
  z-index: 1;
  
  .illustration-icon {
    font-size: 4rem;
    margin-bottom: 20px;
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  p {
    opacity: 0.9;
  }
}

.signup-right {
  padding: 60px 50px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
  
  .logo-icon {
    font-size: 2rem;
  }
  
  h1 {
    color: #22c55e;
    font-size: 1.8rem;
    font-weight: 700;
  }
}

.welcome-text {
  color: #1a1a1a;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.subtitle {
  color: #666;
  margin-bottom: 40px;
}

.signup-form {
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
    
    label {
      display: block;
      color: #333;
      margin-bottom: 8px;
      font-weight: 500;
    }
    
    input {
      width: 100%;
      padding: 15px;
      border: 2px solid #e8f5e8;
      border-radius: 10px;
      font-size: 16px;
      transition: all 0.3s ease;
      
      &:focus {
        outline: none;
        border-color: #22c55e;
        box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
      }
      
      &::placeholder {
        color: #999;
      }
    }
  }
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.4;
  
  input {
    display: none;
  }
  
  .checkmark {
    width: 18px;
    height: 18px;
    border: 2px solid #e8f5e8;
    border-radius: 4px;
    position: relative;
    transition: all 0.3s ease;
    flex-shrink: 0;
    margin-top: 2px;
  }
  
  input:checked + .checkmark {
    background: #22c55e;
    border-color: #22c55e;
    
    &::after {
      content: '✓';
      color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 12px;
    }
  }
  
  a {
    color: #22c55e;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
}

.signup-btn {
  width: 100%;
  background: #22c55e;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 30px;
  
  &:hover {
    background: #16a34a;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(34, 197, 94, 0.3);
  }
}

.divider {
  text-align: center;
  margin: 30px 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #e8f5e8;
  }
  
  span {
    background: white;
    padding: 0 15px;
    color: #666;
  }
}

.social-signup {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px;
  border: 2px solid #e8f5e8;
  border-radius: 10px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
  
  &:hover {
    border-color: #22c55e;
    transform: translateY(-1px);
  }
}

.login-link {
  text-align: center;
  color: #666;
  
  a {
    color: #22c55e;
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
}

@media (max-width: 768px) {
  .signup-container {
    grid-template-columns: 1fr;
  }
  
  .signup-left {
    display: none;
  }
  
  .signup-right {
    padding: 40px 30px;
  }
  
  .form-row {
    grid-template-columns: 1fr !important;
  }
}
</style>