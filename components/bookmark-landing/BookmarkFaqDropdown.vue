<template>
  <div class="border-b pb-8">
    <div class="flex justify-between items-center py-8">
      <h4
        class="rubik bookmark-title-description font-semibold"
        v-text="title"
      />
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
        <path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8" />
      </svg>
    </div>
    <div>
      <p
        class="text-bookmark-grayish-blue bookmark-title-description leading-relaxed"
        v-text="description"
      />
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
