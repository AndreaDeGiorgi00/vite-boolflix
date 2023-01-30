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
            const url = new URL(`https://image.tmdb.org/t/p/w342/${term}`)
            return url.href
        }
    },

}
</script>
<template>
    <h1>films</h1>
    <div class="container-film d-flex">
        <div v-for="film in store.filmList">
            <div class="film-card">
                <img :src="getCopertina(film.poster_path)" class="background-film" alt="">
                <div class="content-film">

                    <div> <span><strong>titolo: </strong></span> <span>{{ film.title }}</span></div>
                    <div> <span><strong>titolo originale: </strong></span> <span>{{ film.original_title }}</span></div>
                    <div> <span><strong>voto: </strong></span> <span><i v-for="i in 5"
                                :class="getStars(film.vote_average, i)" class="fa-star"></i></span></div>
                    <div> <span><strong>overview: </strong></span> <span>{{ film.overview }}</span></div>
                    <div class="d-flex justify-content-between align-items-center">
                        <span><strong>language:</strong></span>
                        <div v-if="hasFlag(film.original_language)"><img class="flag"
                                :src="getFlag(film.original_language)" alt="bandiera">
                        </div>
                        <div v-else> {{ film.original_language }}</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
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
<style scoped lang="scss">
h1 {
    margin-top: 100px;
    color: white
}

;

.flag {
    height: 50px;
}

;

.film-card {
    width: 342px;
    height: 513px;
    margin: 10px;
    font-size: 13px
}

;

.film-card:hover .content-film {
    display: block;
    color: white;

}



.content-film {
    position: relative;
    padding: 20px;
    display: none;
    background-color: rgba(85, 84, 84, 0.59);
    height: 100%;
}

;

.background-film {
    position: absolute;
    height: 515px;
    width: 342px;
}

.container-film {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
}
</style>