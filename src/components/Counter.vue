<template>
    <div class="main">

        <div>
            <br>
            <button @click="counterStore.decrement">-</button>
            Count Value : {{ count }}
            <button @click="counterStore.increment">+</button>
            <br><br>
            Counter moved to {{ countDigitLength }} digit length
        </div>

    </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
const counterStore = useCounterStore();
const { count, increment, decrement, countDigitLength } = storeToRefs(counterStore);
</script>

<style scoped>
.main{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>
