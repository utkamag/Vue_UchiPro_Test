import axios from "axios";

export default {
    state: {
        fullMongoDB: [],
        id: "",
        Token: "",
        URL: "",
        addTokens: ""

    },
    getters: {
        getArray(state) {
            return state.fullMongoDB
        }
    },
    mutations: {
        setArray(state, payload) {
            state.fullMongoDB = payload
        },
        addUrlID(state, item) {
            state.Token = item.token
            state.URL = item.url
            state.id = item._id
        },

    },
    actions: {
        fetchArray(context) {
            axios
                .get("http://localhost:3000/tokens")
                .then(response => context.commit("setArray", response.data))
        }
    }
}