<template>
  <transition name="fadeZoomOut">
    <section class="contact fade-zoom-out">
      <div class="container">
        <h1 class="contact-title">Let's connect!</h1>
        <p class="contact-description">
          Drop me a message if you have any questions,<br>
          leave your email as well so I can reach out if needed.
        </p>
        <form class="contact-form" @submit.prevent="sendMessage">
          <div class="input-wrapper">
            <input
              v-model="formData.name"
              type="text"
              placeholder="Your Name"
              class="input-field"
              required
            />
          </div>
          <div class="input-wrapper">
            <textarea
              v-model="formData.message"
              rows="4"
              placeholder="Your Message"
              class="input-field textarea"
              required
            ></textarea>
          </div>

          <div class="captcha-wrapper">
            <label for="captcha" class="captcha-label">Please solve: {{ num1 }} + {{ num2 }} = ?</label>
            <input
              v-model.number="captchaAnswer"
              type="number"
              id="captcha"
              placeholder="Answer"
              class="input-field"
              required
            />
          </div>

          <button 
            type="submit" 
            class="submit-btn"
            :disabled="isLoading"
          >
            {{ isLoading ? 'Sending...' : 'Send Message' }}
          </button>
        </form>

        <div class="social-links">
          <a href="https://wa.me/+6285179986368" target="_blank" class="social-icon">
            <i class="fab fa-whatsapp"></i>
          </a>
          <a href="https://t.me/vionite" target="_blank" class="social-icon">
            <i class="fab fa-telegram"></i>
          </a>
          <a href="https://instagram.com/reysiregars" target="_blank" class="social-icon">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/reynaldi-siregar-490b8b261" target="_blank" class="social-icon">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export default {
  name: "ContactView",
  data() {
    return {
      formData: {
        name: '',
        message: ''
      },
      isLoading: false,
      num1: 0,
      num2: 0,
      captchaAnswer: null
    };
  },
  methods: {
    generateCaptcha() {
      this.num1 = Math.floor(Math.random() * 10) + 1;
      this.num2 = Math.floor(Math.random() * 10) + 1;
      this.captchaAnswer = null;
    },
    async sendMessage() {
      if (this.captchaAnswer !== this.num1 + this.num2) {
        Swal.fire({
          title: 'Incorrect Captcha',
          text: 'Please solve the math problem correctly.',
          icon: 'error',
          confirmButtonColor: '#1e90ff',
          background: '#1f1f1f',
          color: '#ffffff'
        });
        this.generateCaptcha();
        return;
      }
      
      this.isLoading = true;
      try {
        const serviceId = 'service_4euvsrs';
        const templateId = 'template_muvt74j';
        const publicKey = 'HmOnXza70bkghQVKw';
        
        const templateParams = {
          from_name: this.formData.name,
          message: this.formData.message,
          to_name: 'Reynaldi',
        };

        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        
        await Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully.',
          icon: 'success',
          confirmButtonColor: '#1e90ff',
          background: '#1f1f1f',
          color: '#ffffff'
        });
        
        // Clear form
        this.formData = {
          name: '',
          message: ''
        };
        this.generateCaptcha();
        
      } catch (error) {
        console.error('Error sending email:', error);
        await Swal.fire({
          title: 'Error!',
          text: 'Failed to send message. Please try again later.',
          icon: 'error',
          confirmButtonColor: '#1e90ff',
          background: '#1f1f1f',
          color: '#ffffff'
        });
      } finally {
        this.isLoading = false;
      }
    }
  },
  mounted() {
    this.generateCaptcha();
  }
};
</script>

<style scoped>
@keyframes fadeZoomOut {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(30px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.fade-zoom-out {
  animation: fadeZoomOut 0.8s ease-in-out;
}

/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  .fade-zoom-out {
    animation: none;
    opacity: 1 !important;
    transform: none !important;
  }
}

.contact {
  background: #141414;
  color: #ffffff;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
}

.container {
  max-width: 600px;
  width: 100%;
  text-align: center;
  padding: 40px 20px;
}

.contact-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #f5f5f5;
}

.contact-description {
  font-size: 1rem;
  margin-bottom: 30px;
  color: #bbbbbb;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-wrapper {
  position: relative;
}

.input-field {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid transparent;
  background-color: #1f1f1f;
  color: #ffffff;
  font-size: 1rem;
  border-radius: 20px;
  outline: none;
  transition: all 0.3s ease;
}

.input-field:hover,
.input-field:focus {
  border-color: #1e90ff;
  box-shadow: 0 0 8px rgba(30, 144, 255, 0.5);
  background-color: #222;
}

.input-field::placeholder {
  color: #777;
}

.textarea {
  resize: none;
}

.submit-btn {
  background-color: #1e90ff;
  color: #ffffff;
  border: none;
  padding: 12px;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.submit-btn:hover {
  background-color: #1c7cd6;
  transform: translateY(-3px);
}

.submit-btn:active {
  transform: translateY(1px);
}

.social-links {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background-color: #1c7cd6;
  transform: translateY(-3px);
}

.social-icon:active {
  transform: translateY(1px);
}

.captcha-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 2px;
}

.captcha-label {
  font-size: 1rem;
  color: #f5f5f5;
  white-space: nowrap;
}

.captcha-wrapper .input-field {
  width: 100px;
  text-align: center;
}

/* Hide number input arrows */
.input-field[type=number]::-webkit-inner-spin-button,
.input-field[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}

.input-field[type=number] {
  -moz-appearance: textfield;
  appearance: textfield;
}

@media (max-width: 768px) {
  .contact-title {
    font-size: 2rem;
  }
  
  .contact-description {
    font-size: 0.9rem;
  }
  
  .input-field {
    font-size: 0.9rem;
    padding: 8px 10px;
  }
}

@media (max-width: 380px) {
  .captcha-wrapper {
    flex-direction: column;
    gap: 10px;
  }
}
</style>