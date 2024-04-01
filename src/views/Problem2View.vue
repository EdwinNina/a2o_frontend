<script setup>
import { ref } from 'vue'
import { useProblems } from '@/composables/useProblems';
const form = ref('')
const result = ref('')
const errorMessage = ref('')
const { errorMessage: errorProblem, getProblemTwoResult } = useProblems()

const process = async () => {
   if (!form.value) {
      errorMessage.value = 'The value is required'
      return
   }
   const response = await getProblemTwoResult(form.value)

   if (errorProblem.value) {
      alert(errorProblem.value)
   }
   result.value = response
   errorMessage.value = ''
   form.value = ''
}
</script>

<template>
   <div class="container grid grid-cols-2 gap-10">
      <div>
         <label for="message" class="block mb-2 text-sm font-medium text-gray-900">String Value Parameters</label>
         <textarea id="input-2" rows="4"
            class="block p-2.5 w-full text-md  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            :class="{ 'border-red-500': errorMessage }" placeholder="Please enter a chess values..."
            v-model="form"></textarea>
         <span class="text-red-500 text-sm" v-if="errorMessage">{{ errorMessage }}</span>
         <div class="flex justify-end mt-5">
            <button type="button" class="px-4 py-2 bg-blue-400 hover:bg-blue-500 text-white rounded"
               @click="process">Process</button>
         </div>
      </div>
      <div>
         <h2 class="text-md font-medium text-gray-900">Result</h2>
         <pre id="output-2">{{ result }}</pre>
      </div>
   </div>
</template>