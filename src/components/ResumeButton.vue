<template>
  <a
    :href="resumePath"
    download="CV_REYNALDI_SIREGAR.pdf"
    class="resume-button"
    aria-label="Download my CV"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      class="icon"
      aria-hidden="true"
    >
      <path 
        fill-rule="evenodd" 
        d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm5.845 17.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V12a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z" 
        clip-rule="evenodd"
      />
      <path 
        d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z"
      />
    </svg>
    <span>Download CV</span>
  </a>
</template>

<script>
export default {
  name: 'ResumeButton',
  props: {
    resumePath: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.resume-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.9rem 1.2rem;
  margin: 0;
  font-size: 0.95rem;
  font-weight: 900;
  color: #111111;
  background-color: #ff5c4d;
  border: 3px solid #111111;
  border-radius: 0;
  text-decoration: none;
  box-shadow: 5px 5px 0 #111111;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: transform 160ms ease, box-shadow 160ms ease;
  position: relative;
  overflow: hidden;
}

.resume-button:hover {
  transform: translate(3px, 3px);
  box-shadow: 1px 1px 0 #111111;
}

.resume-button:focus {
  outline: none;
  box-shadow: 0 0 0 4px #111111, 7px 7px 0 #111111;
}

.resume-button .icon {
  width: 1rem;
  height: 1rem;
}

@media (min-width: 768px) {
  .resume-button {
    margin: 0;
  }
}
</style>