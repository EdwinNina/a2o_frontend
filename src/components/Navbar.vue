<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
   <nav class="bg-white shadow fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
         <RouterLink to="/"
            class="flex items-center space-x-3 rtl:space-x-reverse self-center text-2xl font-semibold whitespace-nowrap text-blue-400">
            A20 DEV
         </RouterLink>
         <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul
               class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
               <li>
                  <RouterLink :to="{ name: 'problem-one' }"
                     class="block py-2 px-3 text-blue-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                     :class="{ 'text-blue-600 underline': $route.path === '/problem-1' }">Problem 1</RouterLink>
               </li>
               <li>
                  <RouterLink :to="{ name: 'problem-two' }"
                     class="block py-2 px-3 text-blue-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                     :class="{ 'text-blue-600 underline': $route.path === '/problem-2' }">Problem 2</RouterLink>
               </li>
            </ul>
         </div>
      </div>
   </nav>
</template>