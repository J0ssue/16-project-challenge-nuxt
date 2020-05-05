<template>
  <div>
    <Header :header="dineData.header" />
    <Benefits />
    <Hightlights />
    <Services />
    <Cta />
  </div>
</template>

<script>
import dineData from '~/helpers/dine-db'
import Header from '~/components/dine/DineHeader'
import Benefits from '~/components/dine/DineBenefits'
import Hightlights from '~/components/dine/DineHightlights'
import Services from '~/components/dine/DineServices'
import Cta from '~/components/dine/DineCta'
export default {
  components: {
    Header,
    Benefits,
    Hightlights,
    Services,
    Cta
  },
  head: {
    title: 'Dine'
  },
  layout: 'dine',
  name: 'home',
  data() {
    return {
      dineData
    }
  }
}
</script>
