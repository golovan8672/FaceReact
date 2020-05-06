const required = value => value  ? undefined : 'Field is Required'
export const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined
export const minLength = min => value => value && value.length < min ? `Must be ${min} characters or less` : undefined

export default required

