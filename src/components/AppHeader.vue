<script>
import SearchName from './SearchName.vue';
import axios from 'axios';
import { store } from './data/store';
export default {
    name: "appHeader",
    components: { SearchName },
    data() {
        return {
            store,
        }
    },
    methods: {
        changeurl() {

            axios.get(`${store.urlFisso}?${store.apiKey}&language=it-IT&page=1&query=${store.targetRicerca}`).then((res) => store.filmList = res.data.results)

        },

    },


}

</script>
<template>
    <search-name @filter-action="changeurl"></search-name>

</template>