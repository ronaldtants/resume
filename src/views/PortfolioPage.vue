<template>
  <div class="container">
    <div>
      <h1 class="title">Ronald Tan’s Portfolio</h1>
      <div class="links">
        <router-link to="/resume">Go to Resume</router-link>
      </div>
      <div class="projects-section">
        <h2 class="projects-title">Projects:</h2>
        <a
          href="https://mahjong-stats-tracker-frontend.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link"
          >Mahjong Stats Tracker</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// No script logic needed unless you want interactivity later.
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
  text-align: center;
  flex-direction: column;
}

.title {
  font-family: 'Edwardian Script ITC', 'Brush Script MT', cursive;
  font-size: 5rem;
  font-weight: normal;
  color: black;
}

.links {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
  gap: 2rem;
}

.projects-section {
  margin-top: 3rem;
}

.projects-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: black;
}

.project-link {
  color: #0066cc;
  text-decoration: none;
  font-size: 1.1rem;
}

.project-link:hover {
  text-decoration: underline;
}
</style>
