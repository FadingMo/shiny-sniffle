import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: [],
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ comit }) {
      return axios("http://localhost:3000/products", { method: "GET" })
        .then((products) => {
          comit("SET_PRODUCTS_TO_STATE", products);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
  modules: {},
});
