<template>
  <footer>
    <!-- logo -->
    <div>
      <img :src="footer.logo" alt="footer logo image" />
    </div>
    <!-- menu -->
    <div>
      <nuxt-link
        to="#"
        v-for="(link, i) in footer.menu"
        :key="i"
        v-text="link"
      />
    </div>
    <!-- social -->
    <div>
      <a :href="media" v-for="(icon, i) in footer.social" :key="i">
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
