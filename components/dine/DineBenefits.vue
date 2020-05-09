<template>
  <section
    class="px-8 pb-48 dine-benefits relative relative md:px-20 md:pb-40 xl:px-24 xl:pb-0 "
  >
    <div class="dine-benefits__pattern hidden absolute xl:block">
      <img src="/dine/patterns/pattern-lines.svg" alt="pattern lines" />
    </div>
    <div>
      <DineBenefitsCard
        :index="i"
        class="flex flex-col items-center xl:justify-between"
        :class="{
          'mb-48': i === 0,
          'xl:flex-row': i % 2 === 0 || i === 0,
          'xl:flex-row-reverse': i === 1
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

<style lang="scss" scoped>
.dine-benefits {
  &__pattern {
    right: 40px;
    bottom: 300px;
  }
  @media (min-width: 768px) {
    background-image: url('/dine/patterns/pattern-curve-bottom-right.svg'),
      url('/dine/patterns/pattern-curve-top-left.svg');
    background-position: 0px 130px, right bottom;
    background-size: 50% 320px;
    background-repeat: no-repeat;
  }
  @media (min-width: 1280px) {
    background-image: url('/dine/patterns/pattern-curve-top-right.svg'),
      url('/dine/patterns/pattern-curve-top-left.svg');
    background-size: 70% 320px;
  }
}
</style>
