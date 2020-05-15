/* eslint-disable */
import API from "../../infraestructure/api"
import router from "../../router/index";

const usersModule = {
    state: () => ({
        userList: null,
        user: null
    }),
    mutations: {
        getUsersListMutation(state, payload) {
            state.userList = payload;
        },
        setUser(state, payload) {
            state.user = payload
        }
    },
    actions: {
        async updateUser({ dispatch, commit, state }, payload) {
            const response = await API.post('/user/update', payload)
                .then(function (response) {
                    dispatch('getUserAll');
                    return response
                })
                .catch(function (error) {
                    console.log(error);
                });
            return response;
        }
        ,
        async getUserById({ dispatch, commit, state }, payload) {

            commit('setUser', payload)

            router.push({ name: 'user' })
            return payload;
        },
        async  getUserAll({ commit, state }) {
            try {
                console.log("Requiring list of users")

                let payload = [];

                const response = await API.get('/user/user-list');

                console.log(response)
                response.data.forEach(item => {
                    payload.push({
                        id: item[0],
                        username: item[1],
                        firstName: item[2],
                        lastName: item[3],
                        middleName: item[4],
                        gender: item[5],
                        email: item[6],
                        password: item[7],
                        phoneNumber: item[8],
                        active: item[9],
                        createdOn: item[10],
                        roleId: item[11],
                    })
                });

                commit('getUsersListMutation', payload)
                return state.userList;

            } catch (error) {
                console.error(error);
            }
        },
        async createUser({ dispatch, commit, state }, payload) {
            let user = {
                id: payload.id,
                username: payload.username,
                firstName: payload.firstName,
                lastName: payload.lastName,
                middleName: payload.middleName,
                gender: payload.gender,
                email: payload.email,
                password: payload.password,
                phoneNumber: payload.phoneNumber,
                active: payload.active,
                createdOn: payload.createdOn,
                roleId: payload.roleId,
            }

            console.log(user)
            const response = await API.post('/user/create', user)
                .then(function (response) {
                    dispatch('getUserAll');
                    return response
                })
                .catch(function (error) {
                    console.log(error);
                });
            return response;
        }
        ,
        async desactivateUser({ dispatch, commit, state }, payload) {

            let user = {
                userId: payload.id
            }

            const response = await API.post('/user/desactivate', user)
                .then(function (response) {
                    dispatch('getUserAll');
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

export default usersModule;