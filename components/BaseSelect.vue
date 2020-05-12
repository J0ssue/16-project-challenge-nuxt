<template>
  <div>
    <label v-if="label !== 'no-show'" v-text="label" />
    <select @change="$emit('input', $event.target.value)">
      <option
        :value="opt.value"
        v-for="(opt, i) in options"
        :key="i"
        :selected="value === opt.value"
      >
        {{ opt.label || 'No label' }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true,
      validator(opts) {
        return !opts.find(opt => typeof opt !== 'object')
      }
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>
