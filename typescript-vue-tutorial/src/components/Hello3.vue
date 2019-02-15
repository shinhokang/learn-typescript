<template>
    <div>
        <div class="greeting">Hello {{propExample.name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

type ObjectInterface = {
    name: string,
    initialEnthusiasm: number,
};

export default Vue.extend({
    props: {
        propExample: {
            type: Object as () => ObjectInterface
        }
    },
    data() {
        return {
            enthusiasm: this.propExample.initialEnthusiasm,
        }
    },
    methods: {
        increment() { this.enthusiasm++; },
        decrement() {
            if (this.enthusiasm > 1) {
                this.enthusiasm--;
            }
        },
    },
    computed: {
        exclamationMarks(): string {
            return Array(this.enthusiasm + 1).join('!');
        }
    }
});
</script>

<style lang="scss">
.greeting {
    font-size: 20px;
}
</style>
