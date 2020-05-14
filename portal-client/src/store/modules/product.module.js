/* eslint-disable */
import API from "../../infraestructure/api"
import router from "../../router/index";

const productModule = {
    state: () => ({
        productList: null,
        product: null
    }),
    mutations: {
        getProductListMutation(state, payload) {
            state.productList = payload;
        },
        setProduct(state, payload) {
            state.product = payload
        }
    },
    actions: {
        async updateProduct({ dispatch, commit, state }, payload) {

            console.log(payload)
            const response = await API.post('/product/update', payload)
                .then(function (response) {
                    dispatch('getProductAll');
                    return response
                })
                .catch(function (error) {
                    console.log(error);
                });
            return response;
        }
        ,
        async getProductById({ dispatch, commit, state }, payload) {

            commit('setProduct', payload)

            router.push({ name: 'productonly' })
            return payload;
        },
        async  getProductAll({ commit, state }) {
            try {
                console.log("Requiring list of products")

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
                    dispatch('getProductAll');
                    return response
                })
                .catch(function (error) {
                    console.log(error);
                });
            return response;
        }
        ,
        async desactivateProduct({ dispatch, commit, state }, payload) {

            let product = {
                producId: payload.id
            }

            const response = await API.post('/product/desactivate', product)
                .then(function (response) {
                    dispatch('getProductAll');
                    return response
                })
                .catch(function (error) {
                    console.log(error);
                });
            return response;

        },

    },
    getters: {}
}

export default productModule;