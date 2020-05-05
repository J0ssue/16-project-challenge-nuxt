<template>
  <section class="px-8 pb-48">
    <div>
      <DineBenefitsCard
        class="flex flex-col items-center"
        :class="{
          'mb-48': i === 0
        }"
        v-for="(benefit, i) in benefits"
        :key="i"
        :card="{ ...benefit, textBlack: true }"
      />
    </div>
  </section>
</template>

<script>
import DineBenefitsCard from '~/components/dine/DineBenefitsCard'
export default {
  name: 'DineBenefits',
  props: {
    benefits: {
      type: Array
    }
  },
  components: {
    DineBenefitsCard
  }
}
</script>
