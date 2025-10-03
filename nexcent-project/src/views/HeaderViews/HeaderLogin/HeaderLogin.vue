<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-left">
        <div class="logo">
          <span class="logo-icon">🌿</span>
          <h1>YourBrand</h1>
        </div>
        <h2 class="welcome-text">С возвращением!</h2>
        <p class="subtitle">Войдите в свой аккаунт</p>
        
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email"
              v-model="loginData.email"
              placeholder="your@email.com"
              required
            >
          </div>
          
          <div class="form-group">
            <label for="password">Пароль</label>
            <input 
              type="password" 
              id="password"
              v-model="loginData.password"
              placeholder="Введите пароль"
              required
            >
          </div>
          
          <div class="form-options">
            <label class="checkbox-label">
              <input type="checkbox" v-model="loginData.remember">
              <span class="checkmark"></span>
              Запомнить меня
            </label>
            <a href="#" class="forgot-link">Забыли пароль?</a>
          </div>
          
          <button type="submit" class="login-btn">Войти</button>
        </form>
        
        <div class="divider">
          <span>или</span>
        </div>
        
        <div class="social-login">
          <button class="social-btn google-btn">
            <span class="social-icon">🔍</span>
            Войти через Google
          </button>
          <button class="social-btn github-btn">
            <span class="social-icon">💻</span>
            Войти через GitHub
          </button>
        </div>
        
        <p class="signup-link">
          Нет аккаунта? <router-link to="/signup">Зарегистрироваться</router-link>
        </p>
      </div>
      
      <div class="login-right">
        <div class="decoration">
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
          <div class="circle circle-3"></div>
        </div>
        <div class="illustration">
          <span class="illustration-icon">🔐</span>
          <h3>Безопасный вход</h3>
          <p>Ваши данные защищены</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

interface LoginData {
  email: string
  password: string
  remember: boolean
}

const loginData = ref<LoginData>({
  email: '',
  password: '',
  remember: false
})

const handleLogin = () => {
  console.log('Login data:', loginData.value)
  // Здесь будет логика входа
  router.push('/dashboard')
}
</script>

<style scoped lang="scss">
.login-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fff8 0%, #ffffff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.login-container {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(34, 139, 34, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1000px;
  width: 100%;
  overflow: hidden;
}

.login-left {
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

.login-form {
  .form-group {
    margin-bottom: 24px;
    
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

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: #666;
  
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
}

.forgot-link {
  color: #22c55e;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
}

.login-btn {
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

.social-login {
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

.signup-link {
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

.login-right {
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
    width: 100px;
    height: 100px;
    top: 10%;
    left: 10%;
  }
  
  .circle-2 {
    width: 150px;
    height: 150px;
    bottom: 20%;
    right: 10%;
  }
  
  .circle-3 {
    width: 80px;
    height: 80px;
    bottom: 10%;
    left: 20%;
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

@media (max-width: 768px) {
  .login-container {
    grid-template-columns: 1fr;
  }
  
  .login-right {
    display: none;
  }
  
  .login-left {
    padding: 40px 30px;
  }
}
</style>