<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Add Product</h2>

      <form @submit.prevent="addProduct">
        <div class="mb-4 px-2 w-full">
          <label class="block mb-1 text-sm text-gray-700" for="title">Product Title:</label>
          <input id="title" class="w-full border px-4 py-2 focus:border-blue-500 focus:shadow-outline rounded-lg" type="text" placeholder="Product Title..." v-model="title" />
        </div>

        <div class="mb-4 px-2 w-full">
          <label class="block mb-1 text-sm text-gray-700" for="description">Product Description:</label>
          <textarea id="description" v-model="description" rows="5" class="w-full border px-4 py-2 rounded-lg focus:border-blue-500 focus:shadow-outline outline-none" placeholder="Product Description..."></textarea>
        </div>

        <div class="mb-4 px-2 w-full">
          <label class="block mb-1 text-sm text-gray-700" for="price">Product Price:</label>
          <input id="price" class="w-full border px-4 py-2 focus:border-blue-500 focus:shadow-outline rounded-lg" type="number" placeholder="Product Price..." v-model.number="price" />
        </div>
        
        <div class="mb-4 px-2 w-full">
          <label class="block mb-1 text-sm text-gray-700" for="category">Select Category:</label>
          <select id="categories" v-model="selectedCategory" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option disabled value="">Choose a category</option>
            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
          </select>
        </div>
        
        <div class="mb-4 px-2 w-full">
          <label class="block mb-1 text-sm text-gray-700" for="image">Images:</label>
          <input
            class="relative m-0 block w-full min-w-0 flex-auto rounded-lg border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            type="file"
            id="formFile" accept="image/*"
            ref="fileInput" />
        </div>


        <button type="submit" class="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Add Product</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const productsData = JSON.parse(localStorage.getItem('products')) || [];

const categories = Array.from(new Set(productsData.map(product => product.category)));

const selectedCategory = ref('');

const title = ref('');
const description = ref('');
const price = ref(0);
const router = useRouter();
const fileInput = ref(null);

const addProduct = () => {
  const file = fileInput.value.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    const imageBase64 = reader.result;
    
    const newProduct = {
      title: title.value,
      description: description.value,
      price: price.value,
      category: selectedCategory.value,
      image: imageBase64,
      rating: {
        rate: 0,
        count: 0
      }
    };
  
    productsData.push(newProduct);
  
    localStorage.setItem('products', JSON.stringify(productsData));
    router.push('/');
  };
};
</script>
