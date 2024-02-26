import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/Home.vue";
import AddProduct from '@/views/AddProduct.vue';

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/add-product",
    name: "Add Product",
    component: AddProduct,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
