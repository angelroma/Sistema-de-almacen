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
        async  getProductListAction({ commit, state }) {

            try {
                let payload = [];

                const response = await API.get('/product/product-list');

                response.data.forEach(item => {
                    payload.push({
                        id: item[0],
                        name: item[1],
                        description: item[2],
                        price: item[3],
                        active: item[4],
                        createdOn: item[5]
                    })
                });

                commit('getProductListMutation', payload)
                return state.productList;

            } catch (error) {
                console.error(error);
            }


        }
    },
    getters: {}
}

export default productModule;