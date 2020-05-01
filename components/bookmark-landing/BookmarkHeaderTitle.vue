<template>
  <div class="bookmark-header-title__container">
    <h2 class="bookmark-header-title__title" v-text="title" />
    <p class="bookmark-header-title__description" v-text="description" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  }
}
</script>
