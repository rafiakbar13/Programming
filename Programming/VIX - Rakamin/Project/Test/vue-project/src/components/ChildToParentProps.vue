<script>
export default {
  name: "ChildToParentProps",
  components: {
    ChildToParentProps,
  },
  data() {
    return {
      person: "Name",
    };
  },
  methods: {
    getDataFromChild(data) {
      this.person = data;
      console.log(person);
    },
  },
};
</script>

<template>
  <div class="about">
    <h1 class="green">Hello {{ person }}</h1>
    <ChildToParentProps @sendDataFromChild="getDataFromChild" />
  </div>
</template>
