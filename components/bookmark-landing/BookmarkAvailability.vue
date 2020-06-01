<template>
  <section class="mb-32">
    <header class="mb-12 px-6">
      <HeaderTitle
        :title="availability.title"
        :description="availability.description"
      />
    </header>
    <main
      class="flex flex-col justify-center lg:flex-row lg:justify-bewteen lg:px-32"
    >
      <div
        class="flex-1"
        v-for="browser in availability.browsers"
        :key="browser.slug"
      >
        <div class="px-10 pb-10 lg:pb-0 lg:px-0">
          <BrowserCard
            :class="{
              'feature-card-middle': browser.slug === 'firefox',
              'feature-card-last': browser.slug === 'opera'
            }"
            :img="browser.img"
            :title="browser.title"
            :version="browser.version"
          />
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import HeaderTitle from './BookmarkHeaderTitle'
import BrowserCard from './BookmarkBrowserCard'
export default {
  components: {
    HeaderTitle,
    BrowserCard
  },
  props: {
    availability: {
      type: Object,
      required: true
    }
  }
}
</script>
