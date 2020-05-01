<template>
  <section>
    <header>
      <HeaderTitle
        :title="features.title"
        :description="features.description"
      />
    </header>
    <main>
      <div>
        <button v-text="tab.tab" v-for="(tab, i) in features.tabs" :key="i" />
      </div>
      <div>
        <FeatureCard
          :img="tab.img"
          :title="tab.title"
          :description="tab.description"
          v-for="tab in features.tabs"
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
