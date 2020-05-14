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
        },
    },
    actions: {
        async  getProductAll({ commit, state }) {
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
        },
        async createProduct({ dispatch, commit, state }, payload) {
            let product = {
                name: payload.name,
                description: payload.description,
                price: payload.price,
                category: payload.category
            }

            const response = await API.post('/product/create', product)
                .then(function (response) {
                    console.log(response);
                    return dispatch('getProductAll');
                })
                .catch(function (error) {
                    console.log(error);
                });
            return response;
        }
    },
    getters: {}
}

export default productModule;