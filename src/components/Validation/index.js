
export const required = value => (value ? undefined : 'This is a required field')

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

export const password = value =>
  value && !/^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/i.test(value)
    ? 'Password must be 8 characters or longer and must includes a number'
    : undefined
