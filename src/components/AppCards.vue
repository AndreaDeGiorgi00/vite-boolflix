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
        getStars(originalScore, i) {

            let finalRewiev = (parseFloat(originalScore) / 2);
            finalRewiev = Math.ceil(finalRewiev);
            console.log("final rew", finalRewiev);
            console.log("i", i)
            return finalRewiev >= i && finalRewiev != 0 ? "fa-solid" : "fa-regular"
        },

        hasFlag(term) {
            if (term == "it" || term == "en") {
                return true
            } else {
                return false
            }
        },
        getFlag(term) {

            const url = new URL(`../assets/flags/${term}.png`, import.meta.url)
            return url.href

        },
        getCopertina(term) {
            const url = new URL(`https://image.tmdb.org/t/p/w300/${term}`)
            return url.href
        }
    },

}
</script>
<template>
    <h1>films</h1>
    <ul v-for="film in store.filmList">
        <li> <strong>{{ film.original_title }}</strong> </li>
        <li> {{ film.title }} </li>
        <li v-if="hasFlag(film.original_language)"><img :src="getFlag(film.original_language)" alt="bandiera"></li>
        <li v-else="!hasFlag(film.original_language)"> {{ film.original_language }}</li>
        <li><img :src="getCopertina(film.poster_path)" alt=""></li>

        <li><i v-for="i in 5" :class="getStars(film.vote_average, i)" class="fa-star"></i> </li>


    </ul>
    <h1>serie TV</h1>
    <ul v-for="serie in store.seriesList">
        <li> <strong>{{ serie.original_name }} </strong></li>
        <li> {{ serie.name }} </li>
        <li v-if="hasFlag(serie.original_language)"><img :src="getFlag(serie.original_language)" alt="bandiera"></li>
        <li v-else="!hasFlag(serie.original_language)"> {{ serie.original_language }}</li>
        <li><i v-for="i in 5" :class="getStars(serie.vote_average, i)" class="fa-star"></i> </li>
        <li><img :src="getCopertina(serie.poster_path)" alt="copertina"></li>





    </ul>


</template>
