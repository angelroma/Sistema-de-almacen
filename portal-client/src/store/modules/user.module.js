/* eslint-disable */
import router from "../../router/index"

const userModule = {
    state: () => ({
        user: null
    }),
    mutations: {
        bindUser(state, payload) {
            state.user = payload.user
        }
    },
    actions: {
        login({ commit, state }, payload) {
            return new Promise((resolve, reject) => {
                try {
                    commit('bindUser', payload.user);
                    router.push({ name: 'product' })
                    resolve("Login successful");
                }
                catch (e) {
                    reject(new Error(e))
                }
            })

        }
    },
    getters: {}
}

export default userModule;