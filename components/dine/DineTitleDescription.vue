<template>
  <div class="text-center xl:text-left">
    <img
      class="mx-auto mb-8 xl:ml-0"
      src="/dine/patterns/pattern-divide.svg"
      alt="divider image"
    />
    <h2
      class="dine__title-desc-title dine-h2 mb-8 md:mx-auto"
      :class="{
        'text-white': !textBlack,
        'text-ebony-clay': textBlack
      }"
      v-html="title"
    />
    <p
      class="dine__title-desc-desc dine-body md:mx-auto"
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
