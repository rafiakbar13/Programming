import {createStore} from vuex

export default createStore({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    methods: {
        increment() {
            this.$store.commit('increment')
            
        }
    }
})