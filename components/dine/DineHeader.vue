<template>
  <header
    class="dine-header bg-black text-white text-center px-8 pb-32 pt-64 px-20 md:pt-88 xl:pt-16 xl:px-24 xl:text-left"
  >
    <div class="mb-6 xl:mb-32 relative z-10">
      <img class="mx-auto xl:ml-0" :src="header.logo" alt="dine logo" />
    </div>
    <div class="relative z-10">
      <h1 class="dine-h1 mb-6 xl:mb-8" v-html="header.title" />
      <p class="dine-body mb-6 xl:mb-16 xl:w-98">{{ header.description }}</p>
      <nuxt-link
        class="py-4 px-16 bg-black border border-white uppercase text-white "
        v-text="'book a table'"
        to="/dine/booking"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: 'DineHeader',
  props: {
    header: {
      type: Object
    }
  }
}
</script>
