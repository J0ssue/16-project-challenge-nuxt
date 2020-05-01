<template>
  <section class="mb-32">
    <header class="mb-12 px-6">
      <HeaderTitle
        :title="availability.title"
        :description="availability.description"
      />
    </header>
    <main class="flex flex-col justify-center">
      <div v-for="browser in availability.browsers" :key="browser.slug">
        <div class="px-10 pb-10">
          <BrowserCard
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
