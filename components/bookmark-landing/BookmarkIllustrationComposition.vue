<template>
  <div
    class="bookmark-illustration-composition"
    :class="{
      'bookmark-illustration__wh': resize,
      'bookmark-illustration-composition__left-bg': position === 'left',
      'bookmark-illustration-composition__right-bg': position === 'right'
    }"
  >
    <img class="mx-auto" :src="img" alt="illustration" />
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: 'no-image'
    },
    position: {
      type: String,
      default: 'right'
    },
    resize: {
      type: Boolean,
      default: false
    }
  }
}
</script>
