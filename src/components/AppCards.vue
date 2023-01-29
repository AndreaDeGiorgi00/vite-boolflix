<script>
import { store } from './data/store';
export default {
    name: "card",
    data() {
        return {
            store,

        }
    },
    methods: {
        getStars(originalScore) {


            let finalRewiev = Math.ceil(parseFloat(originalScore) / 2)
            return finalRewiev
        }
    }
}
</script>
<template>
    <ul v-for="film in store.filmList">
        <li> {{ film.original_title }} </li>
        <li> {{ film.title }} </li>
        <li> {{ film.original_language }} </li>
        <li> {{ getStars(film.vote_average) }} </li>

    </ul>

</template>
