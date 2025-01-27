<script>
export default {
  name: "UserProps",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  //   data() {
  //     return {
  //       data: "Rafi",
  //     };
  //   },
};
</script>

<template>
  <div class="about">
    <p class="description">This is Component</p>
    <p class="green">Hello {{ name }}</p>
  </div>
</template>

<style></style>
