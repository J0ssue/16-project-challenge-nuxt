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
          class="py-4 border-b border-bookmark-grayish-blue lg:px-16 lg:py-8 focus:outline-none relative"
          :class="{
            'border-t lg:border-t-0': i === 0
          }"
          v-for="(tab, i) in features.tabs"
          :key="i"
          @click="toggleTab(tab.slug)"
        >
          {{ tab.tab }}
          <div
            class="w-full h-1 bg-bookmark-soft-Red absolute bottom-0 left-0 transition duration-300 ease-in-out"
            :class="{
              'opacity-0 pointer-events-none': activeTab !== tab.slug,
              'opacity-1 pointer-events-auto': activeTab === tab.slug
            }"
          ></div>
        </button>
      </div>
      <div>
        <FeatureCard
          class="transition duration-300 ease-in-out"
          :class="{
            'opacity-0 pointer-events-none h-0': activeTab !== tab.slug,
            'opacity-1 pointer-events-auto h-full': activeTab === tab.slug
          }"
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
  },
  data() {
    return {
      activeTab: 'simple-bookmarking'
    }
  },
  methods: {
    toggleTab(tab) {
      this.activeTab = tab
    }
  }
}
</script>
