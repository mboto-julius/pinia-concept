import { defineStore } from "pinia";
import { useAuthStore } from "./auth";
import { computed, ref } from "vue";

// export const useCounterStore = defineStore('counter', {
//     state: () => ({
//         count: 0,
//     }),
//     getters: {
//         countDigitLength: (state) => state.count.toString().length,
//     },
//     actions: {
//         increment(){
//             if(!this.isAuthenticated()) return;
//             this.count++;
//         },
//         decrement() {
//             if(!this.isAuthenticated()) return;
//             this.count--;
//         },
//         isAuthenticated() {
//             const authStore = useAuthStore();
//             return authStore.isAuthenticated;
//         }
//     }
// });

// Another way of doing it Using Composition API
export const useCounterStore = defineStore('counter', () => {

    const count = ref(0);

    const countDigitLength = computed(() => {
        count.toString().length;
    });

    function increment(){
        if(!isAuthenticated()) return;
        this.count++;
    }

    function decrement() {
        if(!isAuthenticated()) return;
        this.count--;
    }

    function isAuthenticated() {
        const authStore = useAuthStore();
        return authStore.isAuthenticated;
    }

    return {increment, decrement, count, countDigitLength}

});