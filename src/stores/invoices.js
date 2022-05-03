import { defineStore } from 'pinia'

export const useInvoiceStore = defineStore('invoices', {
  state: () => {
    return {
        id: 0
    }
  }
})