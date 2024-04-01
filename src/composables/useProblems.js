import apiService from '@/lib/axios'
import { AxiosError } from 'axios'
import { ref } from 'vue'

export const useProblems = () => {
  const errorMessage = ref(null)

  const getProblemTwoResult = async (parameters) => {
    try {
      const { data } = await apiService.post('/problem-2', { stringValue: parameters })

      return data
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorDataMessage = error.response?.data?.message || 'error desconocido'
        errorMessage.value = errorDataMessage
      } else {
        errorMessage.value = String(error)
      }
    }
  }

  return {
    errorMessage,
    getProblemTwoResult
  }
}
