<template>
  <ValidationProvider
    :name="name"
    tag="div"
    :vid="vid"
    :rules="rules"
    v-slot="{ errors, required, ariaInput, ariaMsg }"
  >
    <label
      class="base-input__label"
      v-if="label !== 'no-show'"
      @click="$refs.input.focus()"
    >
      {{ label }}
      <!-- <span>{{ required ? ' *' : '' }}</span> -->
    </label>
    <input
      class="base-input__input pl-4 pb-4 w-full capitalize text-dine-cod-gray spartan dine-input-text border-b border-dine-input-gray focus:outline-none"
      :class="{
        'is-valid': errors && errors.length === 0,
        'is-invalid': errors && errors.length > 0
      }"
      ref="input"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
      v-bind="ariaInput"
    />
    <ul
      class="base-input__list"
      v-if="showMessage === true"
      :class="{
        'base-input__error-list': !errors && !errors.length > 0,
        'base-input--error-list-show': errors && errors.length > 0
      }"
    >
      <li
        class="base-input__error-msg error-msg"
        v-for="(error, i) in errors"
        :key="i"
        v-text="error"
        v-bind="ariaMsg"
      />
    </ul>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
  components: {
    ValidationProvider
  },
  props: {
    showMessage: {
      type: Boolean,
      required: false,
      default: true
    },
    label: {
      type: String,
      required: true
    },
    vid: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    rules: {
      type: [Object, String],
      default: ''
    },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return [
          'url',
          'text',
          'password',
          'tel',
          'search',
          'number',
          'email'
        ].includes(value)
      }
    }
  }
}
</script>

<style lang="scss">
.base-input__list {
  height: 10px;
}
.base-input__error-list {
  opacity: 0;
  pointer-events: none;
}
.base-input__error-list-show {
  opacity: 1;
}

.is-invalid {
  border-bottom: 1px solid #b54949;
}
.is-invalid::placeholder {
  color: rgba(181, 73, 73, 0.4);
}
</style>
