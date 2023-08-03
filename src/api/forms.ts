import axiosInstance from '@/utils/axios'
import { AxiosResponse } from 'axios'
import { BudgetForm } from '@/types/forms'

export const createForm = async (data: BudgetForm) => {
  return new Promise<AxiosResponse>((resolve, reject) => {
    axiosInstance.post(`/forms/budget-form/`, data).then(response => resolve(response)).catch(error => reject(error))
  })
}

export const listForms = async () => {
  return new Promise<AxiosResponse>((resolve, reject) => {
    axiosInstance.get(`/forms/budget-form/`).then(response => resolve(response)).catch(error => reject(error))
  })
}