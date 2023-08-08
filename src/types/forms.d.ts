export interface BudgetForm {
  id?: number
  firstName: string
  lastName: string
  cpf: string
  phone: string
  email: string
  service: number | null
  returnWay: number | null
  description: string
}