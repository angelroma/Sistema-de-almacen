/* eslint-disable */
import router from "../../router/index"
import API from "../../infraestructure/api"

const productModule = {
    state: () => ({
        productList: null
    }),
    mutations: {
        getProductListMutation(state, payload) {
            state.productList = payload;
        }
    },
    actions: {
        getProductListAction({ commit, state }) {
            return new Promise((resolve, reject) => {

                let payload = [
                    {
                        id: 1,
                        name: "nam1",
                        description: "desc",
                        price: 21.3,
                        active: 1,
                        createdOn: "10323:32432:34232324"
                    },
                    {
                        id: 2,
                        name: "nam1",
                        description: "desc",
                        price: 21.3,
                        active: 1,
                        createdOn: "10323:32432:34232324"
                    }
                ];

                commit('getProductListMutation', payload)
                resolve(state.productList);
            })

        }
    },
    getters: {}
}

export default productModule;