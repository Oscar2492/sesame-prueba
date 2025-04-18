<script setup lang="ts">
import { useVacancyStore } from './stores/vacancy.ts'
import { computed, onMounted } from 'vue'

const vacancyStore = useVacancyStore()

onMounted(() => {
  vacancyStore.setVacancyStatus()
  vacancyStore.setVacancyCandidates()
})

const vacancyStatus = computed(() => vacancyStore.vacancyStatus)
const vacancyCandidates = computed(() => vacancyStore.vacancyCandidates)
const addNewCandidate = vacancyStore.addCandidates
</script>

<template>
  <div>
    <div>
      <h2>VACANTES</h2>
      <pre>{{ vacancyStatus }}</pre>
    </div>
    <div>
      <h2>Candidatos</h2>
      <pre>{{ vacancyCandidates }}</pre>
    </div>
    <div>
      <button
        @click="
          addNewCandidate({
            firstName: 'Oscar',
            lastName: 'Roza',
            vacancyId: '00cf9726-17c6-4178-aa9c-bb1c6e86c267',
            statusId: '2d7d0346-921b-4944-ad8a-017e27062754',
          })
        "
      >
        AÑADIR Candidatos
      </button>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
