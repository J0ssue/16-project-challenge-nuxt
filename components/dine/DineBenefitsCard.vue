<template>
  <div>
    <header>
      <picture>
        <source media="(min-width:1280px)" :srcset="card.img_desktop" />
        <source media="(min-width:768px)" :srcset="card.img_tablet" />
        <img
          class="benefit-img mb-16"
          :src="card.img_mobile"
          alt="benefit image"
        />
      </picture>
    </header>
    <DineTitleDescription
      :title="card.title"
      :description="card.description"
      :textBlack="card.textBlack"
    />
  </div>
</template>

<script>
import DineTitleDescription from '~/components/dine/DineTitleDescription'
export default {
  name: 'DineBenefitsCard',
  props: ['card'],
  components: {
    DineTitleDescription
  }
}
</script>

<style lang="css" scoped>
.benefit-img {
  margin-top: -67px;
  box-shadow: 0px 10px 68px rgba(0, 0, 0, 0.7);
}
</style>
