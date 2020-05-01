<template>
  <div>
    <header>
      <img :src="img" alt="browser image" />
      <h4 v-text="title" />
      <p v-text="version" />
    </header>
    <main>
      <button v-text="'Add & Install Extension'" />
    </main>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String
    },
    title: {
      type: String,
      default: 'TODO'
    },
    version: {
      type: String,
      default: 'TODO'
    }
  }
}
</script>

<style lang="scss" scoped></style>
