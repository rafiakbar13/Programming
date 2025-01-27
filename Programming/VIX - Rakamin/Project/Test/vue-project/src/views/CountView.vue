<template>
  <div class="about">
    <h1>Count: {{ $store.state.count }}</h1>
    <button @click="$store.dispatch('addNumber', $store.state)">
      Increment
    </button>
  </div>
</template>
