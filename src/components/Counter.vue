<template>
  <div>
    <br />
    <button @click="increment">+</button>
    Count Value : {{ store.count }}
    <button @click="decrement">-</button>

    <br />
    Counter moved to {{ store.countDigitLength }} digit length
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
import { computed } from "@vue/runtime-core";
const store = useCounterStore();

function increment() {
  store.count++;
}

function decrement() {
  store.count--;
}

// const countDigitLength = computed(() => store.count.toString().length);
// const countDigitLength = store.count.toString().length;
</script>
