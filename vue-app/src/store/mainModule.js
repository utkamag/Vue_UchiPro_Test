import axios from "axios";

export default {
    state: {
        fullMongoDB: [],
        id: []
    },
    getters: {
        getArray(state) {
            return state.fullMongoDB
        }
    },
    mutations: {
        setArray(state, payload) {
            state.fullMongoDB = payload
        }
    },
    actions: {
        fetchArray(context) {
            axios
                .get("http://localhost:3000/tokens")
                .then(response => context.commit("setArray", response.data))
        }
    }
}