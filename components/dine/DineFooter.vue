<template>
  <footer
    class="py-20 bg-black spartan text-white text-center font-size-footer uppercase md:flex md:justify-between md:flex-wrap md:px-8 md:text-left xl:px-24"
  >
    <div class="mb-8 md:w-2/5 xl:mb-0 xl:w-4/12">
      <nuxt-link to="/dine">
        <img class="mx-auto md:mx-0" src="/dine/logo.svg" alt="dine logo" />
      </nuxt-link>
    </div>
    <div class="mb-8 md:w-3/5 xl:mb-0 xl:flex-1">
      <p v-text="para" v-for="(para, i) in footerData.address" :key="i"></p>
    </div>
    <div class="md:w-3/5 md:ml-auto xl:flex-1">
      <p>open times</p>
      <p v-text="hour" v-for="(hour, i) in footerData.schedule" :key="i" />
    </div>
  </footer>
</template>

<script>
export default {
  name: 'DineFooter',
  props: {
    footerData: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.font-size-footer {
  font-size: 14px;
  line-height: 28px;
}
</style>
