import { SNACKBAR_SET } from '@/store/action-types'

export const setMessage = (msg) => ({
  type: SNACKBAR_SET,
  id: 1,
  msg
})
