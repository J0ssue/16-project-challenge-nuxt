import { extend } from 'vee-validate'
import { required, email, numeric, digits } from 'vee-validate/dist/rules'

extend('email', {
  ...email,
  message: 'The {_field_} must be a valid email'
})
extend('required', {
  ...required,
  message: '{_field_} field is required'
})
extend('numeric', {
  ...numeric,
  message: 'The {_field_} must consist of numbers only'
})
extend('digits', {
  ...digits,
  message: 'The {_field_} must have be exactly 9 "numbers"'
})