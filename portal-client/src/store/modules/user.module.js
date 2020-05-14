/* eslint-disable */
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
        login({ context }) {
            return new Promise(resolve, reject => {

                try {
                    context.commit('bindUser');
                    resolve();
                }
                catch (e) {
                    reject(new Error(e.Message))
                }
            })

        }
    },
    getters: {}
}

export default userModule;