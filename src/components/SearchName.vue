<script>
import { store } from './data/store';
export default {
    name: "search section",
    data() {
        return {
            store,
            searchString: "",
        }
    },
    methods: {
        connectTotheStore() {



            if (!this.searchString) {

                store.targetRicerca = "test";

            } else {
                store.targetRicerca = this.searchString

            }


        }

    },
    emits: ["filter-action"]
}
</script>
<template>

    <form @submit.prevent="$emit('filter-action', searchString)">
        <input type="text" v-model="this.searchString">
        <button type="submit" @click="connectTotheStore">cerca</button>

    </form>


</template>