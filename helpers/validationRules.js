import { extend } from 'vee-validate'
import { required, email, numeric, digits, length } from 'vee-validate/dist/rules'

extend('email', {
  ...email,
  message: 'The {_field_} must be a valid email'
})
extend('required', {
  ...required,
  message: '{_field_} field is required',
})
extend('numeric', {
  ...numeric,
  message: 'The {_field_} must consist of numbers only'
})
extend('digits', {
  ...digits,
  message: 'The {_field_} must have be exactly {size} "numbers"',
  params: ['size'],
})

extend('hasDigits', {
  validate(value, args) {
    let length = value.length
     return length <= args.number && `/^[0-9]{${2}}$/`.test(value)
  },
  params: ['number'],
  message: 'The {_field_} field must be {number} digits number'
}) 