<template>
  <router-view></router-view>
</template>

<script>
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/Home.vue';
import AddProduct from './views/AddProduct.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/add-product',
      component: AddProduct
    }
  ]
});

export default {
  name: 'App',
  router // Menambahkan router ke dalam aplikasi Vue
};
</script>

<style>

</style>
