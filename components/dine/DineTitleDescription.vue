<template>
  <div class="text-center">
    <img
      class="mx-auto mb-8"
      src="/dine/patterns/pattern-divide.svg"
      alt="divider image"
    />
    <h2
      class="dine-h2 mb-8"
      :class="{
        'text-white': !textBlack,
        'text-ebony-clay': textBlack
      }"
      v-html="title"
    />
    <p
      class="dine-body"
      :class="{
        'text-white': !textBlack,
        'text-ebony-clay': textBlack
      }"
      v-text="description"
    />
  </div>
</template>

<script>
export default {
  name: 'DineTitleDescription',
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    textBlack: {
      type: Boolean,
      default: false
    }
  }
}
</script>
