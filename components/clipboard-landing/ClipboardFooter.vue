<template>
  <footer
    class="py-12 clipboard-footer-bg text-center md:px-10 md:flex md:justify-between"
  >
    <!-- logo -->
    <div class="mb-12 md:mb-0 md:mr-20 md:flex md:flex-col md:justify-center">
      <img
        class="w-12 h-12 mx-auto"
        :src="footer.logo"
        alt="footer logo image"
      />
    </div>
    <!-- menu -->
    <div class="md:flex-1 md:flex">
      <div
        :class="{
          'mx-20': i === 1
        }"
        v-for="(chunkedMenuGroup, i) in parseLinks"
        :key="i"
      >
        <nuxt-link
          class="mb-8 block text-clipboard-grayish-blue text-center font-fam-bai-semibold capitalize md:text-left"
          to="#"
          v-for="(link, i) in chunkedMenuGroup"
          :key="i"
          v-text="link"
        />
      </div>
    </div>
    <!-- social -->
    <div class="flex items-center justify-center">
      <a
        :class="{
          'mx-8': i === 1
        }"
        :href="'#' + icon"
        v-for="(icon, i) in footer.social"
        :key="i"
      >
        <img :src="icon" alt="social media icon image" />
      </a>
    </div>
  </footer>
</template>

<script>
import chunk from 'lodash.chunk'
export default {
  name: 'ClipboardFooter',
  props: {
    footer: {
      type: Object,
      required: true
    }
  },
  computed: {
    parseLinks() {
      return chunk(this.footer.menu, 2)
    }
  }
}
</script>
