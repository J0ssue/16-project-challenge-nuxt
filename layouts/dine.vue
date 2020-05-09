<template>
  <div class="spartan">
    <nuxt />
    <DineFooter :footerData="footerData" />
  </div>
</template>

<script>
import dineData from '~/helpers/dine-db'
import DineFooter from '~/components/dine/DineFooter'
export default {
  components: {
    DineFooter
  },
  name: 'dine-layout',
  data() {
    return {
      footerData: dineData.footer
    }
  }
}
</script>
