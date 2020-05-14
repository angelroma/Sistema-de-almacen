/* eslint-disable */
import router from "../../router/index"

const userModule = {
    state: () => ({
        user: null
    }),
    mutations: {
        loginMutation(state, payload) {
            state.user = payload.user
        },
        logoutMutation(state) {
            state.user = null;
        }
    },
    actions: {
        login({ commit, state }, payload) {
            return new Promise((resolve, reject) => {
                try {
                    commit('loginMutation', payload.user);
                    router.push({ name: 'product' })
                    resolve("Login successful");
                }
                catch (e) {
                    reject(new Error(e))
                }
            })

        },
        logout({ commit }) {
            return new Promise((resolve, reject) => {
                commit('logoutMutation');
                router.push({ name: 'Login' })
                resolve();
            })
        }
    },
    getters: {}
}

export default userModule;