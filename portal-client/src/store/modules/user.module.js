/* eslint-disable */
import router from "../../router/index"
import API from "../../infraestructure/api"

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
                API.post('/login', {
                    username: payload.username,
                    password: payload.password
                })
                    .then(function (response) {
                        commit('loginMutation', response);
                        router.push({ name: 'product' })
                        resolve(response);
                    })
                    .catch(function () {
                        reject("Acceso no permitido,contacta al administrador.")
                    });
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