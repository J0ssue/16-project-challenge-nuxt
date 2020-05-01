<template>
  <div class="text-center">
    <h2
      class="mb-6 leading-snug font-light text-black rubik capitalize"
      :class="{
        'text-3xl': titleBig,
        'text-2xl': !titleBig
      }"
      v-html="title"
    />
    <p
      class="text-bookmark-grayish-blue"
      :class="{
        'bookmark-title-description': descriptionSm
      }"
      v-text="description"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    titleBig: {
      type: Boolean,
      default: false
    },
    description: {
      type: String
    },
    descriptionSm: {
      type: Boolean,
      default: false
    }
  }
}
</script>
