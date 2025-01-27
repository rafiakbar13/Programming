<script>
export default {
  data() {
    return {
      Frameworks: ["Vue", "React", "Angular"],
    };
  },
};
</script>

<template>
  <div class="about">
    <li v-for="framework in Frameworks">{{ framework }}</li>
    <p class="description">This is Component</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .description {
    font-size: 1.2rem;
    color: aquamarine;
  }
}
</style>
