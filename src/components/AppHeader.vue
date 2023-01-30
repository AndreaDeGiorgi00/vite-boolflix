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
    <section class="contenitore d-flex justify-content-between align-items-center">
        <div class="logo">
            <img src="https://boolfix-jdonzelli.netlify.app/img/logo.png" alt="logo">
        </div>
        <search-name @filter-action="changeurl"></search-name>
    </section>

</template>

<style scoped lang="scss">
img {
    max-width: 200px;
}

.contenitore {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 60px;
    z-index: 3;
}

section {
    height: 100px;
    background-color: black;
}
</style>