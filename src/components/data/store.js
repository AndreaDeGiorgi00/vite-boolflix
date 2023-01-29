import { reactive } from "vue";

export const store = reactive({

    filmList: [],
    targetRicerca: "anelli",
    urlFisso: "https://api.themoviedb.org/3/search/movie",
    apiKey: "api_key=c89fa0cecf2c0618da65d14a8cede8e2",
})