<template>
  <main class="contact-page">
    <section class="contact-hero" :class="showContent ? 'animate-in' : 'is-hidden'">
      <div class="hero-copy">
        <span class="eyebrow">Contact</span>
        <h1>Let’s connect and build something direct and useful.</h1>
        <p>
          Send a message, reach out through social channels, or drop a quick note if you want to talk
          about work, collaboration, or an idea.
        </p>
      </div>

      <div class="contact-points">
        <div class="point-card">
          <span class="point-label">Response</span>
          <strong>Usually within a few days</strong>
        </div>
        <div class="point-card point-card-accent">
          <span class="point-label">Focus</span>
          <strong>Front-end, UI, and practical builds</strong>
        </div>
        <div class="point-card">
          <span class="point-label">Location</span>
          <strong>Bekasi, Indonesia</strong>
        </div>
      </div>
    </section>

    <section class="contact-layout" :class="showContent ? 'animate-in delay-1' : 'is-hidden'">
      <form class="contact-form-card" @submit.prevent="sendMessage">
        <div class="section-head">
          <span class="eyebrow eyebrow-alt">Message</span>
          <h2>Send a quick note</h2>
        </div>

        <div class="field-group">
          <label for="name">Your name</label>
          <input
            v-model="formData.name"
            id="name"
            type="text"
            placeholder="John Doe"
            class="input-field"
            required
          />
        </div>

        <div class="field-group">
          <label for="message">Your message</label>
          <textarea
            v-model="formData.message"
            id="message"
            rows="5"
            placeholder="Tell me about your project or idea..."
            class="input-field textarea"
            required
          ></textarea>
        </div>

        <div class="captcha-card">
          <label for="captcha">Solve this: {{ num1 }} + {{ num2 }} = ?</label>
          <input
            v-model.number="captchaAnswer"
            type="number"
            id="captcha"
            placeholder="Answer"
            class="input-field captcha-input"
            required
          />
        </div>

        <button type="submit" class="submit-btn" :disabled="isLoading">
          {{ isLoading ? 'Sending...' : 'Send Message' }}
        </button>
      </form>

      <aside class="contact-side-card">
        <div class="section-head">
          <span class="eyebrow">Elsewhere</span>
          <h2>Find me here</h2>
        </div>

        <div class="social-links">
          <a href="https://wa.me/+6285179986368" target="_blank" rel="noreferrer" class="social-icon" aria-label="WhatsApp">
            <i class="fab fa-whatsapp"></i>
          </a>
          <a href="https://t.me/vionite" target="_blank" rel="noreferrer" class="social-icon" aria-label="Telegram">
            <i class="fab fa-telegram"></i>
          </a>
          <a href="https://instagram.com/reysiregars" target="_blank" rel="noreferrer" class="social-icon" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/reynaldi-siregar-490b8b261" target="_blank" rel="noreferrer" class="social-icon" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>

        <div class="contact-note">
          <p>
            If you prefer a social message over email, those links are the fastest way to reach me.
          </p>
        </div>
      </aside>
    </section>
  </main>
</template>

<script>
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export default {
  name: 'ContactView',
  props: {
    showContent: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      formData: {
        name: '',
        message: '',
      },
      isLoading: false,
      num1: 0,
      num2: 0,
      captchaAnswer: null,
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
          confirmButtonColor: '#111111',
          background: '#f7f3e8',
          color: '#111111',
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
          confirmButtonColor: '#111111',
          background: '#f7f3e8',
          color: '#111111',
        });

        this.formData = {
          name: '',
          message: '',
        };
        this.generateCaptcha();
      } catch (error) {
        console.error('Error sending email:', error);
        await Swal.fire({
          title: 'Error!',
          text: 'Failed to send message. Please try again later.',
          icon: 'error',
          confirmButtonColor: '#111111',
          background: '#f7f3e8',
          color: '#111111',
        });
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.generateCaptcha();
  },
};
</script>

<style scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-hero,
.contact-layout {
  border: 3px solid #111111;
  background: #f7f3e8;
  box-shadow: 8px 8px 0 #111111;
}

.contact-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.8fr);
  gap: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, #ffd84d 0%, #f7f3e8 48%, #53d9a7 100%);
}

.hero-copy,
.contact-points,
.contact-form-card,
.contact-side-card {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.hero-copy h1 {
  margin: 0;
  max-width: 12ch;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 0.96;
  font-weight: 900;
}

.hero-copy p {
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.55;
  font-weight: 600;
}

.eyebrow {
  display: inline-flex;
  width: fit-content;
  padding: 0.45rem 0.7rem;
  border: 3px solid #111111;
  background: #ff5c4d;
  box-shadow: 4px 4px 0 #111111;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.eyebrow-alt {
  background: #2f6bff;
  color: #f7f3e8;
}

.contact-points {
  justify-content: flex-end;
}

.point-card {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 0.8rem 0.9rem;
  border: 3px solid #111111;
  background: #f7f3e8;
  box-shadow: 4px 4px 0 #111111;
}

.point-card-accent {
  background: #ffd84d;
}

.point-label {
  font-size: 0.72rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.point-card strong {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  line-height: 1.35;
}

.contact-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(16rem, 0.9fr);
  gap: 1rem;
  padding: 1rem;
}

.contact-form-card,
.contact-side-card {
  padding: 1rem;
  border: 3px solid #111111;
  background: #f7f3e8;
  box-shadow: 5px 5px 0 #111111;
}

.section-head {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-head h2 {
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.35rem;
  line-height: 1.05;
  font-weight: 900;
}

.field-group,
.captcha-card {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.field-group label,
.captcha-card label {
  font-size: 0.75rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.input-field {
  width: 100%;
  padding: 0.85rem 0.95rem;
  border: 3px solid #111111;
  background: #fffdf5;
  box-shadow: 4px 4px 0 #111111;
  color: #111111;
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.input-field:focus {
  transform: translate(1px, 1px);
  box-shadow: 2px 2px 0 #111111;
}

.textarea {
  resize: vertical;
  min-height: 8rem;
}

.captcha-input {
  max-width: 10rem;
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.9rem 1.1rem;
  border: 3px solid #111111;
  background: #ff5c4d;
  box-shadow: 5px 5px 0 #111111;
  color: #111111;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.9rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.submit-btn:hover:not(:disabled) {
  transform: translate(3px, 3px);
  box-shadow: 1px 1px 0 #111111;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.social-links {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}

.social-icon {
  display: grid;
  place-items: center;
  height: 3.1rem;
  border: 3px solid #111111;
  background: #ffd84d;
  box-shadow: 4px 4px 0 #111111;
  color: #111111;
  font-size: 1.35rem;
}

.contact-note {
  padding: 0.85rem;
  border: 3px solid #111111;
  background: #2f6bff;
  box-shadow: 4px 4px 0 #111111;
  color: #f7f3e8;
  font-size: 0.92rem;
  line-height: 1.55;
  font-weight: 600;
}

.animate-in {
  animation: riseIn 0.55s ease-out forwards;
}

.delay-1 {
  animation-delay: 0.08s;
}

.is-hidden {
  opacity: 0;
}

@keyframes riseIn {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 900px) {
  .contact-hero,
  .contact-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .contact-hero,
  .contact-layout {
    padding: 0.85rem;
  }

  .social-links {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .contact-form-card,
  .contact-side-card {
    padding: 0.85rem;
  }

  .submit-btn {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-in {
    animation: none;
    opacity: 1;
    transform: none;
  }

  .input-field,
  .submit-btn,
  .social-icon {
    transition: none;
  }
}
</style>