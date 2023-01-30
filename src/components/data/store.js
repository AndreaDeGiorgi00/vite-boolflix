import { reactive } from "vue";

export const store = reactive({

    filmList: [],
    seriesList: [],
    targetRicerca: "anelli",
    urlFisso: "https://api.themoviedb.org/3/search",
    apiKey: "api_key=c89fa0cecf2c0618da65d14a8cede8e2",
})