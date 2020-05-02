<template>
  <div
    class="bookmark-landing__browser-card pt-16 shadow-bookmark-browser-card rounded-xl text-center mx-auto"
  >
    <header class="mb-10">
      <img class="mx-auto mb-10" :src="img" alt="browser image" />
      <h4 class="mb-2 text-xl rubik-bold" v-text="title" />
      <p
        class="bookmark-title-description text-bookmark-grayish-blue"
        v-text="version"
      />
    </header>
    <main class="px-6 pb-6 pt-8 relative">
      <img
        class="absolute top-0 left-0 w-full"
        src="/bookmark-landing/bg-dots.svg"
        alt="dots background"
      />
      <button
        class="bookmark-btn-blue-lg border-2 border-bookmark-soft-blue hover:bg-white hover:text-bookmark-soft-blue transition duration-300 ease-in-out"
        v-text="'Add & Install Extension'"
      />
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
