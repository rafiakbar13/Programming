<script>
export default {
  name: "ChildToParentProps",
  // data() {
  //   return {
  //     person: "Rafi",
  //   };
  // },
  methods: {
    handleClick() {
      this.$emit("sendDataFromChild", "Agus");
    },
    handleClick2() {
      this.$emit("sendDataFromChild", "Joko");
    },
  },
};
</script>

<template>
  <div class="about">
    <button @click="handleClick">Agus</button>
    <button @click="handleClick2">Joko</button>
  </div>
</template>
