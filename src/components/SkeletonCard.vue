<template>
  <div class="skeleton-card">
    <div class="skeleton-image"></div>
    <div class="skeleton-body">
      <div class="skeleton-line title"></div>
      <div class="skeleton-copy">
        <div class="skeleton-line"></div>
        <div class="skeleton-line short"></div>
        <div class="skeleton-line medium"></div>
      </div>
      <div class="skeleton-footer">
        <div class="skeleton-pill"></div>
        <div class="skeleton-icons">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonCard'
}
</script>

<style scoped>
.skeleton-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  padding: 1rem;
  border: 3px solid #111111;
  background: #f7f3e8;
  box-shadow: 6px 6px 0 #111111;
}

.skeleton-image,
.skeleton-line,
.skeleton-pill,
.skeleton-icons div {
  position: relative;
  overflow: hidden;
  background: rgba(17, 17, 17, 0.12);
}

.skeleton-image {
  aspect-ratio: 16 / 9;
  border: 3px solid #111111;
}

.skeleton-body {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}

.skeleton-line {
  height: 1rem;
  border: 3px solid #111111;
}

.skeleton-line.title {
  height: 1.4rem;
  width: 72%;
}

.skeleton-line.short {
  width: 86%;
}

.skeleton-line.medium {
  width: 90%;
}

.skeleton-copy {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.skeleton-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  gap: 0.75rem;
}

.skeleton-pill {
  width: 40%;
  height: 1.1rem;
  border: 3px solid #111111;
}

.skeleton-icons {
  display: flex;
  gap: 0.45rem;
}

.skeleton-icons div {
  width: 1.15rem;
  height: 1.15rem;
  border: 3px solid #111111;
}

.skeleton-image::after,
.skeleton-line::after,
.skeleton-pill::after,
.skeleton-icons div::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.7), transparent);
  animation: shimmer 1.2s infinite;
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>