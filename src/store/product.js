import { defineStore } from 'pinia'
import axios from "axios"

export const useProductStore = defineStore("user", {
    state: () => ({
        products: [],
    }),
    getters: {
      getProducts(state){
          return state.products
        }
    },
    actions: {
      async fetchProducts() {
        try {
            if (localStorage.getItem('products')) {
                this.products = JSON.parse(localStorage.getItem('products'));
            } else {
                const { data } = await axios.get('https://fakestoreapi.com/products');
                this.products = data;
                localStorage.setItem('products', JSON.stringify(data));
            }
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
    },
})