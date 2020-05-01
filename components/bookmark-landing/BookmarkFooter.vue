<template>
  <footer>
    <div>
      <img :src="footer.logo" alt="bookmark logo" />
      <ul>
        <li v-text="link" v-for="(link, i) in footer.menu" :key="i" />
      </ul>
    </div>
    <div>
      <ul>
        <li v-for="(icon, i) in footer.icons" :key="i">
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
