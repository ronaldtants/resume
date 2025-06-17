<template>
  <div class="container">
    <div>
      <h1 class="title">Ronald Tan’s Portfolio</h1>
      <div class="links">
        <router-link to="/resume">Go to Resume</router-link>
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
  gap: 2rem;
}
</style>
