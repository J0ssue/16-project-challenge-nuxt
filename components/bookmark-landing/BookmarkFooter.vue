<template>
  <footer
    class="py-8 bg-bookmark-dark-blue text-white text-center lg:flex lg:justify-between lg:items-center lg:px-24"
  >
    <div class="lg:flex lg:items-center">
      <img
        class="mb-10 mx-auto lg:mr-10 lg:mb-0"
        :src="footer.logo"
        alt="bookmark logo"
      />
      <ul class="lg:flex lg:items-center">
        <li
          class="mb-8 lg:mr-8 lg:mb-0"
          v-for="(link, i) in footer.menu"
          :key="i"
        >
          <nuxt-link :to="`#${link}`" class="uppercase" v-text="link" />
        </li>
      </ul>
    </div>
    <div>
      <ul class="flex justify-center">
        <li
          :class="{
            'mr-2': i === 0,
            'ml-2': i === 1
          }"
          v-for="(icon, i) in footer.icons"
          :key="i"
        >
          <img :src="icon" alt="social media icon" />
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    footer: {
      type: Object,
      required: true
    }
  }
}
</script>
