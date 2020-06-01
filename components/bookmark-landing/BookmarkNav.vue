<template>
  <nav class="py-8 px-6 mb-12 flex items-center lg:px-20">
    <div class="flex-1">
      <img src="/bookmark-landing/logo-bookmark.svg" alt="brand" />
    </div>
    <ul
      class="hidden lg:flex items-center text-bookmark-grayish-blue uppercase"
    >
      <li class="mr-10" v-for="(link, i) in menu" :key="i">
        <nuxt-link
          class="hover:text-bookmark-soft-Red transition duration-300 ease"
          :to="`#${link}`"
          v-text="link"
        />
      </li>
      <li>
        <button
          class="py-2 px-10 bg-bookmark-soft-Red rounded-md shadow-bookmark-btn text-white hover:bg-white hover:text-bookmark-soft-Red border-2 border-bookmark-soft-Red transition duration-300 ease-in-out"
          v-text="'login'"
        />
      </li>
    </ul>
    <button class="lg:hidden" @click="toggleDrawer">
      <img src="/bookmark-landing/icon-hamburger.svg" alt="hamburger image" />
    </button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: ['features', 'pricing', 'contact']
    }
  },
  methods: {
    toggleDrawer() {
      console.log('here')
      this.$emit('toggleDrawer')
    }
  }
}
</script>
