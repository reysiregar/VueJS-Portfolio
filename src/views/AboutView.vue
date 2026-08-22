<template>
  <main class="about-page">
    <section class="hero-card" :class="showContent ? 'animate-in' : 'is-hidden'">
      <div class="hero-layout">
        <div class="hero-copy">
          <span class="eyebrow">About Me</span>
          <h1 class="hero-title">Crafting high-impact interfaces where clean code meets bold design.</h1>

          <div class="hero-text-card">
            <p>
              I’m Reynaldi Siregar, a front-end web developer and Information Systems student based in Bekasi, Indonesia. I transform complex ideas into intuitive, highly responsive, and visually striking web interfaces.
            </p>
            <p>
              My approach bridges design and engineering by writing clean, maintainable code with strict attention to typography, visual hierarchy, and performance to ensure every product looks sharp and feels effortless to use.
            </p>
          </div>
        </div>

        <aside class="hero-side">
          <div class="portrait-frame">
            <img
              src="/img/profile.webp"
              alt="Profile picture of Reynaldi Siregar"
              class="portrait"
            />
          </div>

          <div class="hero-metrics">
            <div class="metric-card">
              <span class="metric-value">Vue</span>
              <span class="metric-label">Primary stack</span>
            </div>
            <div class="metric-card metric-card-accent">
              <span class="metric-value">UI-first</span>
              <span class="metric-label">Design focus</span>
            </div>
            <div class="metric-card">
              <span class="metric-value">2+</span>
              <span class="metric-label">Years building</span>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section class="journey-section" :class="showContent ? 'animate-in delay-1' : 'is-hidden'">
      <div class="section-head">
        <span class="eyebrow eyebrow-alt">Journey</span>
        <h2>Experience & Education</h2>
      </div>

      <div class="journey-grid">
        <article class="panel panel-green">
          <div class="panel-head">
            <span class="panel-icon">Work</span>
            <h3>Experience</h3>
          </div>

          <div class="timeline-stack">
            <div v-for="item in careerTimeline" :key="item.id" class="timeline-card">
              <p class="timeline-period">{{ item.period }}</p>
              <h4>{{ item.role }}</h4>
              <p class="timeline-institution">{{ item.institution }}</p>
              <p class="timeline-description">{{ item.description }}</p>
            </div>
          </div>
        </article>

        <article class="panel panel-blue">
          <div class="panel-head">
            <span class="panel-icon">Study</span>
            <h3>Education</h3>
          </div>

          <div class="timeline-stack">
            <div v-for="item in educationTimeline" :key="item.id" class="timeline-card timeline-card-soft">
              <p class="timeline-period">{{ item.period }}</p>
              <h4>{{ item.institution }}</h4>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="skills-section" :class="showContent ? 'animate-in delay-2' : 'is-hidden'">
      <div class="section-head">
        <span class="eyebrow eyebrow-alt">Toolkit</span>
        <h2>Tech Stack & Development Tools</h2>
      </div>

      <div class="tabs">
        <button class="tab-button" :class="{ active: activeTab === 1 }" @click="activeTab = 1">Tech Stack</button>
        <button class="tab-button tab-button-alt" :class="{ active: activeTab === 2 }" @click="activeTab = 2">Tools</button>
      </div>

      <div v-show="activeTab === 1" class="skill-grid">
        <article v-for="item in tech" :key="item.id" class="skill-card">
          <div class="skill-icon-wrap">
            <img :src="item.imageUrl" :alt="item.name" class="skill-icon" loading="lazy" />
          </div>
          <div>
            <h3>{{ item.name }}</h3>
            <p>{{ item.status }}</p>
          </div>
        </article>
      </div>

      <div v-show="activeTab === 2" class="skill-grid">
        <article v-for="item in tools" :key="item.id" class="skill-card skill-card-alt">
          <div class="skill-icon-wrap skill-icon-wrap-alt">
            <img :src="item.imageUrl" :alt="item.name" class="skill-icon" loading="lazy" />
          </div>
          <div>
            <h3>{{ item.name }}</h3>
            <p>{{ item.status }}</p>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  props: {
    showContent: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeTab: 1,
      tech: [
        { id: 1, name: 'HTML', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png', status: 'Structure & Semantics' },
        { id: 2, name: 'CSS', imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732190.png', status: 'Styling & Animation' },
        { id: 3, name: 'Javascript', imageUrl: 'https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/javascript/javascript.svg', status: 'Core Logic & ES6+' },
        { id: 4, name: 'VueJS', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp', status: 'Primary Framework' },
        { id: 5, name: 'NodeJS', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png', status: 'Runtime & APIs' },
        { id: 6, name: 'Tailwind', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', status: 'Utility-First UI' },
        { id: 7, name: 'ReactJS', imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png', status: 'Component Systems' },
      ],
      tools: [
        { id: 1, name: 'Git', imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png', status: 'Version Control' },
        { id: 2, name: 'GitHub', imageUrl: '/img/github-icon.svg', status: 'Project Management' },
        { id: 3, name: 'NPM', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png', status: 'Package Manager' },
        { id: 4, name: 'Vercel', imageUrl: 'https://vercel.com/favicon.ico', status: 'Deployment' },
        { id: 5, name: 'XAMPP', imageUrl: 'https://www.apachefriends.org/images/xampp-logo-ac950edf.svg', status: 'Local Server' },
        { id: 6, name: 'Postman', imageUrl: '/img/postman-icon.svg', status: 'API Testing' },
        { id: 7, name: 'Figma', imageUrl: '/img/figma-icon.svg', status: 'Design' },
        { id: 8, name: 'Docker', imageUrl: '/img/docker-icon.svg', status: 'Containerization' },
      ],
      timeline: [
        { id: 6, type: 'career', institution: 'RND Kreatif (rndkreatif.tech)', period: '2024 - Present', role: 'Founder & Lead Developer', description: 'Founded a creative digital agency delivering bespoke web development, custom business websites, and dedicated website maintenance services.' },
        { id: 1, type: 'education', institution: 'SMA Negeri 9 Kota Bekasi', period: 'July 2020 - Mei 2023' },
        { id: 2, type: 'education', institution: 'Gunadarma University', period: 'September 2023 - Present' },
        { id: 3, type: 'career', institution: 'PT. Kereta Api Indonesia', period: 'March 2026 - Present', role: 'Data Entry Specialist', description: 'Managed participant registration and high-volume data verification for the MOTIS Lebaran 2026 Program, ensuring accuracy, operational efficiency, and professional on-site customer service.' },
        { id: 4, type: 'education', institution: 'ASAH Program by Dicoding', period: 'August 2025 - December 2025' },
        { id: 5, type: 'career', institution: 'PT. Royal Trust', period: 'August 2025 - September 2025', role: 'Data Entry', description: "Streamlined and maintained corporate data pipelines, ensuring rigorous data integrity, systematic verification, and fast database updates." },
      ],
    };
  },
  computed: {
    careerTimeline() {
      return this.timeline.filter((item) => item.type === 'career');
    },
    educationTimeline() {
      return this.timeline.filter((item) => item.type === 'education');
    },
  },
};
</script>

<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.hero-card,
.panel,
.skills-section {
  border: 3px solid #111111;
  background: #f7f3e8;
  box-shadow: 8px 8px 0 #111111;
}

.hero-card,
.skills-section {
  padding: clamp(0.9rem, 2vw, 1.35rem);
}

.hero-card {
  background: linear-gradient(135deg, #ffd84d 0%, #f7f3e8 42%, #53d9a7 100%);
}

.section-head,
.panel-head {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 0.5rem 0.75rem;
  border: 3px solid #111111;
  background: #ff5c4d;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  box-shadow: 5px 5px 0 #111111;
}

.eyebrow-alt {
  background: #2f6bff;
  color: #f7f3e8;
}

.hero-title,
.section-head h2,
.panel-head h3,
.skill-card h3,
.timeline-card h4 {
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 900;
  color: #111111;
}

.hero-title {
  max-width: 20ch;
  margin: 0;
  font-size: clamp(1.85rem, 3vw, 3.2rem);
  line-height: 1.05;
}

.hero-layout,
.journey-grid {
  display: grid;
  gap: 1rem;
}

.hero-layout {
  grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.8fr);
  align-items: start;
  margin-top: 0.9rem;
}

.hero-copy {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  align-self: start;
}

.hero-text-card {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  max-width: 42rem;
  padding: 1rem 1.05rem;
  border: 3px solid #111111;
  background: rgba(247, 243, 232, 0.9);
  box-shadow: 4px 4px 0 #111111;
  font-size: 0.98rem;
  line-height: 1.5;
  font-weight: 600;
}

.hero-side {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.portrait-frame {
  padding: 0.3rem;
  border: 3px solid #111111;
  background: #ff5c4d;
  box-shadow: 4px 4px 0 #111111;
  margin-left: auto;
  max-width: 20rem;
}

.portrait {
  display: block;
  width: 100%;
  max-width: 18rem;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border: 3px solid #111111;
  background: #ebe7db;
}

.hero-metrics {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.metric-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  display: flex;
  flex-direction: row;
  padding: 0.7rem 0.8rem;
  border: 3px solid #111111;
  background: #f7f3e8;
  box-shadow: 3px 3px 0 #111111;
}

.metric-card-accent {
  background: #ffd84d;
}

.metric-value {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 900;
}

.metric-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.journey-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.panel {
  padding: 0.9rem;
}

.panel-green {
  background: linear-gradient(180deg, #53d9a7 0%, #f7f3e8 100%);
}

.panel-blue {
  background: linear-gradient(180deg, #2f6bff 0%, #f7f3e8 100%);
}

.panel-head {
  margin-bottom: 1rem;
}

.panel-icon {
  width: fit-content;
  padding: 0.35rem 0.6rem;
  border: 3px solid #111111;
  background: #f7f3e8;
  box-shadow: 4px 4px 0 #111111;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  font-weight: 900;
  text-transform: uppercase;
}

.timeline-stack {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.timeline-card {
  padding: 0.85rem 0.9rem;
  border: 3px solid #111111;
  background: #f7f3e8;
  box-shadow: 4px 4px 0 #111111;
}

.timeline-card-soft {
  background: #fffdf5;
}

.timeline-period,
.timeline-institution,
.timeline-description,
.skill-card p {
  margin: 0;
}

.timeline-period {
  display: inline-block;
  margin-bottom: 0.45rem;
  padding: 0.2rem 0.45rem;
  background: #ffd84d;
  border: 2px solid #111111;
  font-size: 0.72rem;
  font-weight: 900;
  text-transform: uppercase;
}

.timeline-institution,
.timeline-description {
  margin-top: 0.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
}

.timeline-description {
  font-weight: 500;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin: 0.9rem 0 1rem;
}

.tab-button {
  padding: 0.7rem 0.95rem;
  border: 3px solid #111111;
  background: #ffd84d;
  box-shadow: 4px 4px 0 #111111;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.tab-button-alt {
  background: #ff5c4d;
}

.tab-button.active {
  transform: translate(3px, 3px);
  box-shadow: 1px 1px 0 #111111;
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.7rem;
}

.skill-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.8rem;
  border: 3px solid #111111;
  background: #f7f3e8;
  box-shadow: 4px 4px 0 #111111;
}

.skill-card-alt {
  background: #fff4d1;
}

.skill-icon-wrap {
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  flex: none;
  border: 3px solid #111111;
  background: #111111;
}

.skill-icon-wrap-alt {
  background: #111111;
}

.skill-icon {
  width: 60%;
  height: 60%;
  object-fit: contain;
}

.skill-card h3 {
  font-size: 1rem;
}

.skill-card p {
  margin-top: 0.2rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.animate-in {
  animation: riseIn 0.55s ease-out forwards;
}

.delay-1 {
  animation-delay: 0.08s;
}

.delay-2 {
  animation-delay: 0.16s;
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

@media (min-width: 769px) {
  .hero-layout {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-areas:
      "eyebrow portrait"
      "title portrait"
      "text metrics";
  }

  .hero-copy,
  .hero-side {
    display: contents;
  }

  .eyebrow {
    grid-area: eyebrow;
  }

  .hero-title {
    grid-area: title;
  }

  .hero-text-card {
    grid-area: text;
    max-width: none;
  }

  .portrait-frame {
    grid-area: portrait;
  }

  .hero-metrics {
    grid-area: metrics;
  }
}

@media (max-width: 1100px) {
  .hero-layout,
  .journey-grid,
  .skill-grid {
    grid-template-columns: 1fr 1fr;
  }

  .skill-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .hero-layout,
  .journey-grid,
  .skill-grid {
    grid-template-columns: 1fr;
  }

  .hero-copy,
  .hero-side {
    display: contents;
  }

  .eyebrow {
    order: 1;
  }

  .hero-title {
    order: 2;
  }

  .portrait-frame {
    order: 3;
  }

  .hero-text-card {
    order: 4;
  }

  .hero-metrics {
    order: 5;
  }

  .hero-copy {
    gap: 0.6rem;
  }

  .hero-card,
  .skills-section {
    padding: 0.85rem;
  }

  .hero-text-card {
    padding: 0.85rem;
    font-size: 0.95rem;
  }

  .portrait-frame {
    max-width: 17rem;
    margin-left: 0;
  }

  .portrait {
    max-width: 100%;
  }

  .hero-metrics {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .metric-card {
    flex: 1 1 10rem;
  }

  .journey-section,
  .skills-section {
    padding-top: 0.9rem;
    padding-bottom: 0.9rem;
  }

  .hero-title {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .hero-title {
    font-size: clamp(1.4rem, 6.5vw, 1.85rem);
    line-height: 1.12;
  }

  .hero-metrics {
    flex-direction: column;
  }

  .metric-card {
    flex: 1 1 auto;
  }

  .panel {
    padding: 0.8rem;
  }

  .skill-card {
    padding: 0.7rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-in {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>
