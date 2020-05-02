<template>
  <div class="bookmark-header-title text-center lg:mt-16">
    <h2
      class="mb-6 leading-snug font-light text-black rubik capitalize lg:leading-none"
      :class="{
        'text-3xl lg:text-5xl': titleBig,
        'text-2xl': !titleBig
      }"
      v-html="title"
    />
    <p
      class="text-bookmark-grayish-blue title-description-bk lg:mx-auto"
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
    center: {
      type: Boolean,
      default: true
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
