<template>
  <div class="spartan">
    <nuxt />
    <DineFooter />
  </div>
</template>

<script>
import DineFooter from '~/components/dine/DineFooter'
export default {
  components: {
    DineFooter
  },
  name: 'dine-layout'
}
</script>
