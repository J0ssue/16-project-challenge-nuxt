<template>
  <section class="mb-32">
    <header class="mb-8 px-6 lg:mb-16">
      <HeaderTitle
        :title="features.title"
        :description="features.description"
        :descriptionSm="true"
      />
    </header>
    <main>
      <div
        class="mb-20 px-6 flex flex-col justify-center text-bookmark-dark-blue lg:flex-row"
      >
        <button
          class="py-4 border-b border-bookmark-grayish-blue lg:px-16 lg:py-8 "
          :class="{
            'border-t lg:border-t-0': i === 0
          }"
          v-text="tab.tab"
          v-for="(tab, i) in features.tabs"
          :key="i"
        />
      </div>
      <div>
        <FeatureCard
          :img="tab.img"
          :title="tab.title"
          :description="tab.description"
          :topOffset="i"
          v-for="(tab, i) in features.tabs"
          :key="tab.slug"
        />
      </div>
    </main>
  </section>
</template>

<script>
import HeaderTitle from './BookmarkHeaderTitle'
import FeatureCard from './BookmarkFeatureCard'
export default {
  components: {
    HeaderTitle,
    FeatureCard
  },
  props: {
    features: {
      type: Object
    }
  }
}
</script>
