<template>
  <div class="preloader">
    <div class="panel">
      <div class="stack">
        <span class="label">Loading</span>
        <div class="blocks" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPreloader',
};
</script>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at top left, rgba(255, 216, 77, 0.35), transparent 30%),
    radial-gradient(circle at bottom right, rgba(47, 107, 255, 0.22), transparent 32%),
    #f7f3e8;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.panel {
  padding: 1rem;
  border: 4px solid #111111;
  background: #ffd84d;
  box-shadow: 10px 10px 0 #111111;
  transform: rotate(-3deg);
}

.stack {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border: 3px solid #111111;
  background: #f7f3e8;
  min-width: 16rem;
}

.label {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.18em;
}

.blocks {
  display: flex;
  gap: 0.35rem;
}

.blocks span {
  width: 0.95rem;
  height: 0.95rem;
  border: 3px solid #111111;
  background: #2f6bff;
  display: inline-block;
  animation: pop 0.85s infinite ease-in-out;
}

.blocks span:nth-child(2) {
  animation-delay: 0.12s;
  background: #ff5c4d;
}

.blocks span:nth-child(3) {
  animation-delay: 0.24s;
  background: #53d9a7;
}

@keyframes pop {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-0.45rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .blocks span {
    animation: none;
  }

  .panel {
    transform: none;
  }
}
.atom .electron:nth-child(1):before {
  transform: rotateZ(-20deg) rotateY(-70deg);
  animation: electron1 3s linear infinite;
}
.atom .electron:nth-child(2):before {
  transform: rotateZ(30deg) rotateX(-60deg) rotateY(-60deg);
  animation: electron2 3s linear infinite;
}
.atom .electron:nth-child(3):before {
  transform: rotateZ(-100deg) rotateX(-60deg) rotateY(60deg);
  animation: electron3 3s linear infinite;
}
</style> 