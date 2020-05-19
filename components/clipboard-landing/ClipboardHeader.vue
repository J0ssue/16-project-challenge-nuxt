<template>
  <header class="clipboard-landing__header">
    <img :src="header.img" alt="logo image" />
    <h1 v-text="header.title" />
    <p v-text="header.description" />
  </header>
</template>

<script>
export default {
  name: 'ClipboardHeader',
  props: {
    header: {
      type: Object,
      required: true
    }
  }
}
</script>
