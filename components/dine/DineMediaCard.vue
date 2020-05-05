<template>
  <div class="card-bottom-border text-white text-center pb-8">
    <header>
      <picture>
        <source media="(min-width: 768px)" :srcset="card.img_desktop_tablet" />
        <img class="mb-8" :src="card.img_mobile" alt="favourites card image" />
      </picture>
    </header>
    <main>
      <h3 class="mb-4 dine-h3" v-text="card.title" />
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
.card-bottom-border {
  border-bottom: 1px solid #979797;
}
</style>
