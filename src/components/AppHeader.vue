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

            axios.get(`${store.urlFisso}/movie?${store.apiKey}&language=it-IT&page=1&query=${store.targetRicerca}`).then((res) => store.filmList = res.data.results)
            axios.get(`${store.urlFisso}/tv?${store.apiKey}&language=it-IT&page=1&query=${store.targetRicerca}`).then((res) => store.seriesList = res.data.results)

        },

    },


}

</script>
<template>
    <search-name @filter-action="changeurl"></search-name>

</template>