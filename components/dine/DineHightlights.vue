<template>
  <section class="bg-dine-cod-gray py-32 px-8">
    <header class="mb-20">
      <TitleDescription
        :title="highlights.title"
        :description="highlights.description"
      />
    </header>
    <main>
      <div v-for="(card, i) in highlights.favourites" :key="i">
        <div class="mb-6">
          <DineMediaCard :card="card" />
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
