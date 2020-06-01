<template>
  <footer class="py-12 clipboard-footer-bg text-center">
    <!-- logo -->
    <div class="mb-12">
      <img
        class="w-12 h-12 mx-auto"
        :src="footer.logo"
        alt="footer logo image"
      />
    </div>
    <!-- menu -->
    <div>
      <nuxt-link
        class="mb-8 block text-clipboard-grayish-blue text-center font-fam-bai-semibold capitalize"
        to="#"
        v-for="(link, i) in footer.menu"
        :key="i"
        v-text="link"
      />
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
export default {
  name: 'ClipboardFooter',
  props: {
    footer: {
      type: Object,
      required: true
    }
  }
}
</script>
