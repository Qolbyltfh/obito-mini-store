<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Products</h2>
      <button @click="goToAddProduct" class="inline-block px-4 py-2 mb-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">Add Product</button>
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a v-for="product in products" :key="product.id" :href="product.href" class="group">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img :src="product.image || 'default-image.jpg'" :alt="product.imageAlt || 'Default Image'" class="h-full w-full object-cover object-center group-hover:opacity-75" />

          </div>
          <h3 class="mt-4 text-sm text-gray-700">{{ product.title }}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }}</p>
          <div class="flex mt-1">
            <div v-for="i in 5" :key="i" class="mr-1">
              <svg v-if="i <= product.rating.rate" class="w-4 h-4 fill-current text-yellow-500" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1l2.938 6.75H19.75L13.875 10l2.875 6.25L10 13.25 4.125 16.25l2.875-6.25L.25 7.75H7.062z"/>
              </svg>
              <svg v-else class="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1l2.938 6.75H19.75L13.875 10l2.875 6.25L10 13.25 4.125 16.25l2.875-6.25L.25 7.75H7.062z"/>
              </svg>
            </div>
          </div>
          <p class="text-sm text-gray-500">{{ product.rating.count }} terjual</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, computed } from "vue";
  import { useProductStore } from "../store/product";
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const store = useProductStore();

  const products = computed(() => {
    return store.products;
  });
  onMounted(() => {
    store.fetchProducts();
  });

  const goToAddProduct = () => {
    router.push('/add-product');
  };
</script>
