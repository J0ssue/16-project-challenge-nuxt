<template>
  <section
    class="dine__highlights bg-dine-cod-gray py-32 px-8 md:px-20 xl:px-24 xl:flex xl:justify-between"
  >
    <header class="mb-20 xl:mb-0 xl:w-6/12">
      <TitleDescription
        :title="highlights.title"
        :description="highlights.description"
      />
    </header>
    <main class="xl:w-6/12">
      <div v-for="(card, i) in highlights.favourites" :key="i">
        <div class="mb-6 md:mb-0">
          <DineMediaCard :card="{ ...card, index: i }" />
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import TitleDescription from '~/components/dine/DineTitleDescription'
import DineMediaCard from '~/components/dine/DineMediaCard'
export default {
  name: 'DineHightlights',
  props: {
    highlights: {
      type: Object
    }
  },
  components: {
    TitleDescription,
    DineMediaCard
  }
}
</script>
