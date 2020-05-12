<template>
  <div>
    <label v-text="label" v-if="label !== 'no-show'" />
    <input
      :class="{
        'is-valid': errors && errors.length === 0,
        'is-invalid': errors && errors.length > 0
      }"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
    />
    <ul v-if="errors && errors.length > 0">
      <li v-for="(error, i) in errors" :key="i" v-text="error" />
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return ['text', 'email', 'password'].includes(value)
      }
    },
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    errors: {
      type: Array,
      required: false
    }
  }
}
</script>
