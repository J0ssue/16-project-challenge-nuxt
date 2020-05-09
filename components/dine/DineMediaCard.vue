<template>
  <div
    class="card-bottom-border text-white text-center pb-8 md:py-8 md:flex md:items-center md:text-left"
    :class="{ 'med-size-border': card.index === 1 }"
  >
    <header class="dine-med-card-header relative md:mr-8 md:pr-8">
      <picture>
        <source media="(min-width: 768px)" :srcset="card.img_desktop_tablet" />
        <img
          class="mb-8 md:mb-0 mx-auto md:mx-0"
          :src="card.img_mobile"
          alt="favourites card image"
        />
      </picture>
    </header>
    <main class="flex-1">
      <h3 class="mb-4 dine-h3 capitalize md:mb-2" v-text="card.title" />
      <p class="dine-fav-card-body" v-text="card.description" />
    </main>
  </div>
</template>

<script>
export default {
  name: 'DineMediaCard',
  props: ['card']
}
</script>

<style lang="css" scoped>
.dine-med-card-header::before {
  @media (min-width: 768px) {
    content: '';
    position: absolute;
    right: 0px;
    top: 10px;
    width: 32px;
    height: 1px;
    background-color: #9e7f66;
  }
}

.card-bottom-border {
  @media (max-width: 767px) {
    border-bottom: 1px solid #979797;
  }
}
.med-size-border {
  @media (min-width: 768px) {
    border-bottom: 1px solid #979797 !important;
    border-top: 1px solid #979797;
  }
}
</style>
