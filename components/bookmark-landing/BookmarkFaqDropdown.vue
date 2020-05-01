<template>
  <div>
    <div>
      <h4 v-text="title" />
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
        <path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8" />
      </svg>
    </div>
    <div>
      <p v-text="description" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'TODO'
    },
    description: {
      type: String,
      default: 'TODO'
    }
  }
}
</script>
